import { RatingSummary, Review } from "./types";

export function computeSummary(reviews: Review[]): RatingSummary {
  const distribution: RatingSummary["distribution"] = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const count = reviews.length;

  if (count === 0) {
    return { average: 0, percent: 0, count: 0, distribution };
  }

  let sum = 0;
  for (const r of reviews) {
    distribution[r.star] += 1;
    sum += r.star;
  }

  const average = sum / count;
  const percent = Math.round((average / 5) * 100);

  return {
    average: Number(average.toFixed(2)),
    percent,
    count,
    distribution,
  };
}

export function starsFromAverage(avg: number): (1 | 2 | 3 | 4 | 5)[] {
  // helper if needed later
  const rounded = Math.round(avg) as 1 | 2 | 3 | 4 | 5;
  return [1, 2, 3, 4, 5].slice(0, rounded) as (1|2|3|4|5)[];
}
