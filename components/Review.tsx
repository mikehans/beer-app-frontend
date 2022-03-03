import React from "react";

function Review(props) {
  const { date, where, price, notes } = props;

  return <div>
      <p>{date}</p>
      <p>{where}</p>
      <p>${price}</p>
      <p>{notes}</p>
  </div>;
}

export default Review;
