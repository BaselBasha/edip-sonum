export type Review = {
  id: string;
  productId: string;
  text: string;
  star: 1 | 2 | 3 | 4 | 5;
  createdAt: string;

  ai?: {
    sentiment: "positive" | "neutral" | "negative";
    confidence: number;
  };
};

export type RatingSummary = {
  average: number;        // 0..5
  percent: number;        // 0..100
  count: number;          // number of reviews
  distribution: { [star in 1 | 2 | 3 | 4 | 5]: number }; // counts by star
};

export type RatingsDB = Record<string, Review[]>; // productId -> reviews[]
