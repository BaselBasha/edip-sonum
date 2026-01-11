import * as tf from "@tensorflow/tfjs";
import { TRAIN_DATA } from "./dataset";
import { buildVocab, vectorize } from "./textVectorizer";

export type PredictResult = {
  star_rating: 1 | 2 | 3 | 4 | 5;
  sentiment: "positive" | "neutral" | "negative";
  confidence: number;
};

let vocab: string[] | null = null;
let model: tf.LayersModel | null = null;
let trained = false;

function starToSentiment(star: number): PredictResult["sentiment"] {
  if (star >= 4) return "positive";
  if (star === 3) return "neutral";
  return "negative";
}

export async function trainModel(): Promise<void> {
  const texts = TRAIN_DATA.map((s) => s.text);
  vocab = buildVocab(texts, 2000);

  const xs = tf.tensor2d(texts.map((t) => vectorize(t, vocab!)));
  const ys = tf.tensor2d(
    TRAIN_DATA.map((s) => {
      const onehot = [0, 0, 0, 0, 0];
      onehot[s.star - 1] = 1;
      return onehot;
    })
  );

  const m = tf.sequential();
  m.add(tf.layers.dense({ inputShape: [vocab.length], units: 96, activation: "relu" }));
  m.add(tf.layers.dropout({ rate: 0.25 }));
  m.add(tf.layers.dense({ units: 48, activation: "relu" }));
  m.add(tf.layers.dense({ units: 5, activation: "softmax" }));

  m.compile({
    optimizer: tf.train.adam(0.008),
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  await m.fit(xs, ys, { epochs: 80, batchSize: 8, shuffle: true, verbose: 0 });

  model = m;
  trained = true;

  xs.dispose();
  ys.dispose();
}

export async function predictRating(text: string): Promise<PredictResult> {
  if (!trained || !model || !vocab) {
    await trainModel();
  }

  const x = tf.tensor2d([vectorize(text, vocab!)]);
  const out = model!.predict(x) as tf.Tensor;
  const probs = Array.from(await out.data());

  let bestIdx = 0;
  for (let i = 1; i < probs.length; i++) if (probs[i] > probs[bestIdx]) bestIdx = i;

  const star = (bestIdx + 1) as 1 | 2 | 3 | 4 | 5;
  const confidence = Number(probs[bestIdx].toFixed(3));

  x.dispose();
  out.dispose();

  return { star_rating: star, sentiment: starToSentiment(star), confidence };
}
