import { useMemo, useState } from "react";
import RatingStars from "./RatingStars";
import { Review } from "../../ratings/types";
import { computeSummary } from "../../ratings/summary";
import { predictRating } from "../../ai/model";

type Props = {
  isOpen: boolean;
  onClose: () => void;

  productId: string;
  productName: string;

  reviews: Review[];
  onAddReview: (review: Review) => void;
};

function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

function StarPicker({
  value,
  onChange,
}: {
  value: 1 | 2 | 3 | 4 | 5;
  onChange: (v: 1 | 2 | 3 | 4 | 5) => void;
}) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n as 1 | 2 | 3 | 4 | 5)}
          style={{
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: "6px 10px",
            background: n === value ? "#111" : "white",
            color: n === value ? "white" : "#111",
            fontWeight: 700,
          }}
        >
          {n}★
        </button>
      ))}
    </div>
  );
}

export default function ReviewModal(props: Props) {
  const { isOpen, onClose, productId, productName, reviews, onAddReview } = props;

  const summary = useMemo(() => computeSummary(reviews), [reviews]);

  const [text, setText] = useState("");
  const [status, setStatus] = useState<string>("");

  // USER rating (manual) - default 5
  const [userStar, setUserStar] = useState<1 | 2 | 3 | 4 | 5>(5);

  // AI info (optional)
  const [aiSentiment, setAiSentiment] = useState<"positive" | "neutral" | "negative">("positive");
  const [aiConfidence, setAiConfidence] = useState<number>(0);
  const [aiSuggestedStar, setAiSuggestedStar] = useState<1 | 2 | 3 | 4 | 5>(5);

  if (!isOpen) return null;

  async function handleAnalyze() {
    if (!text.trim()) {
      setStatus("Please write a review text first.");
      return;
    }
    setStatus("Analyzing with AI...");
    try {
      const r = await predictRating(text);
      setAiSuggestedStar(r.star_rating);
      setAiSentiment(r.sentiment);
      setAiConfidence(r.confidence);

      // Important: set user's rating to AI suggestion (user can still change it manually)
      setUserStar(r.star_rating);

      setStatus("AI suggested a rating. You can adjust stars manually if you want.");
    } catch {
      setStatus("AI failed. Try again.");
    }
  }

  function handleSave() {
    if (!text.trim()) {
      setStatus("Please write a review text first.");
      return;
    }

    const review: Review = {
      id: uid(),
      productId,
      text: text.trim(),
      star: userStar,
      createdAt: new Date().toISOString(),
      ai: {
        sentiment: aiSentiment,
        confidence: aiConfidence,
      },
    };

    onAddReview(review);

    // reset form
    setText("");
    setUserStar(5);
    setStatus("Saved!");
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "min(720px, 100%)",
          background: "white",
          borderRadius: 12,
          padding: 16,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header + Summary */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>{productName}</h3>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <RatingStars average={summary.average} />
              <span style={{ fontWeight: 800 }}>{summary.percent}%</span>
              <span style={{ color: "#555" }}>({summary.count})</span>
            </div>

            <div style={{ marginTop: 6, fontSize: 12, color: "#666" }}>
              Average: <b>{summary.average}</b> / 5
            </div>
          </div>

          <button
            onClick={onClose}
            style={{ border: "1px solid #ccc", borderRadius: 8, padding: "6px 10px" }}
          >
            Close
          </button>
        </div>

        <hr style={{ margin: "12px 0" }} />

        {/* Add Review */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>Your rating</div>
            <StarPicker value={userStar} onChange={setUserStar} />
            <div style={{ marginTop: 6, fontSize: 12, color: "#666" }}>
              Selected: <b>{userStar}</b> / 5
              {aiConfidence > 0 ? (
                <>
                  {"  "} | AI suggested: <b>{aiSuggestedStar}</b> / 5 (sentiment: {aiSentiment}, conf={aiConfidence})
                </>
              ) : null}
            </div>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Write your review..."
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 8 }}
          />

          <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
            <button
              onClick={handleAnalyze}
              style={{ border: "1px solid #111", borderRadius: 8, padding: "8px 10px" }}
            >
              Analyze with AI (optional)
            </button>

            <button
              onClick={handleSave}
              style={{ background: "#16a34a", color: "white", borderRadius: 8, padding: "8px 10px" }}
            >
              Save Review
            </button>
          </div>

          {status ? <div style={{ marginTop: 8, color: "#555" }}>{status}</div> : null}
        </div>

        {/* Reviews list */}
        <div style={{ maxHeight: 280, overflow: "auto", borderTop: "1px solid #eee", paddingTop: 10 }}>
          {reviews.length === 0 ? (
            <p style={{ color: "#666" }}>No reviews yet. Be the first to review this product!</p>
          ) : (
            reviews.slice(0, 30).map((r) => (
              <div key={r.id} style={{ padding: "8px 0", borderBottom: "1px solid #f2f2f2" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <RatingStars average={r.star} />
                  <span style={{ fontWeight: 800 }}>{r.star}/5</span>
                  <span style={{ color: "#666", fontSize: 12 }}>
                    {new Date(r.createdAt).toLocaleString()}
                  </span>
                </div>

                <div style={{ marginTop: 4 }}>{r.text}</div>

                {r.ai && r.ai.confidence > 0 ? (
                  <div style={{ marginTop: 4, color: "#555", fontSize: 12 }}>
                    AI: {r.ai.sentiment} | conf={r.ai.confidence}
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
