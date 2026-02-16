import { useState } from "react";

export default function HoverIcon({ white, orange, alt }) {
  return (
    <div className="hover-icon">
      <img src={white} alt={alt} className="icon icon--white" />
      <img src={orange} alt={alt} className="icon icon--orange" />
    </div>
  );
}
