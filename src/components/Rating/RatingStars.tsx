import React from "react";

export default function RatingStars({ average }: { average: number }) {
  const full = Math.floor(average);
  const half = average - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  const Star = ({ filled }: { filled: boolean }) => (
    <span style={{ fontSize: 14, lineHeight: 1, marginRight: 2 }}>
      {filled ? "★" : "☆"}
    </span>
  );

  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={"f" + i} filled={true} />
      ))}
      {half === 1 ? <Star filled={true} /> : null}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={"e" + i} filled={false} />
      ))}
    </span>
  );
}
