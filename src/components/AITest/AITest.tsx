import { useState } from "react";
import { predictRating } from "../../ai/model";

export default function AITest() {
  const [text, setText] = useState("amazing quality and perfect taste");
  const [result, setResult] = useState("");

  return (
    <div style={{ padding: 12, border: "1px solid #ddd", margin: 12 }}>
      <h3 style={{ fontWeight: 700, marginBottom: 8 }}>AI Review Test</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        style={{ width: "100%", padding: 8, border: "1px solid #ccc", borderRadius: 6 }}
      />

      <div style={{ marginTop: 8 }}>
        <button
          onClick={async () => {
            setResult("Analyzing...");
            const r = await predictRating(text);
            setResult("AI -> " + r.star_rating + " stars | " + r.sentiment + " | confidence=" + r.confidence);
          }}
          style={{ padding: "8px 12px", border: "1px solid #333", borderRadius: 6 }}
        >
          Analyze with AI
        </button>
      </div>

      {result && <p style={{ marginTop: 10 }}>{result}</p>}
    </div>
  );
}
