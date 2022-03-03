import React from "react";
import Review from "../components/Review";

function BeerDisplay(props) {
  const { data } = props;
  return (
    <>
      <h1>{data.brand}</h1>
      <h2>{data.name}</h2>
      <p>Style: {data.drink_style.style}</p>
      <p>First entered: {data.created_at}</p>

      <h2>Reviews</h2>
      {data.reviews.map((r) => (
        <Review
          key={r.id}
          date={r.date}
          where={r.whereFrom}
          price={r.pricePaid}
          notes={r.notes}
        />
      ))}
    </>
  );
}

export default BeerDisplay;
