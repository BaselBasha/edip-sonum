import { RatingsDB, Review } from "./types";

const KEY = "ratings_v1";

export function loadRatings(): RatingsDB {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as RatingsDB;
  } catch {
    return {};
  }
}

export function saveRatings(db: RatingsDB): void {
  localStorage.setItem(KEY, JSON.stringify(db));
}

export function getReviews(db: RatingsDB, productId: string): Review[] {
  return db[productId] ?? [];
}

export function addReviewToDB(db: RatingsDB, review: Review): RatingsDB {
  const next = { ...db };
  const list = next[review.productId] ? [...next[review.productId]] : [];
  list.unshift(review); // newest first
  next[review.productId] = list;
  return next;
}
