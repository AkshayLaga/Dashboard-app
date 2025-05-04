import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ card, from }) => {
  const [, drag] = useDrag(() => ({
    type: "CARD",
    item: { card, from },
  }));

  return (
    <div
      ref={drag}
      style={{
        background: "#fff",
        padding: "0.75rem",
        marginBottom: "0.5rem",
        borderRadius: "4px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      <strong>{card.title}</strong>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
