const ProductItemComponent = (props) => {
  const { result } = props;
  return (
    <div className="relative m-4 w-64 overflow-hidden rounded-lg border shadow-lg">
      <div className="absolute left-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-white">
        -{result.discountPercentage}%{" "}
      </div>
      <div className="absolute right-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-white">
        -{result.discountPercentage}%{" "}
      </div>
      <img
        src={result.image}
        alt={result.title}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{result.title}</h2>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-red-500">
            ${result.price}
          </span>
          {result.oldPrice && (
            <span className="text-gray-500 line-through">
              ${result.oldPrice}
            </span>
          )}
        </div>
        <div className="mt-2  text-main-star-color">
          {"★".repeat(result.rating ? Math.round(result.rating.rate) : 0)}{" "}
          <span className="text-gray-600">
            ({result.rating ? result.rating.count : 0})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemComponent; // import { useState, useEffect } from "react";
