import React from "react";

const OfferBadge = ({ offer }) => {
  if (!offer || offer <= 0) return null;

  return (
    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-md z-10">
      {offer}% OFF
    </span>
  );
};

export default OfferBadge;
