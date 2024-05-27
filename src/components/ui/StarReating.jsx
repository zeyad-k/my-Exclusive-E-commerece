// import { useState } from "react";

const StarRating = (props) => {
  const { rating } = props;

  //   const [rating, setRating] = useState(0);

  //   const handleRating = (value) => {
  //     setRating(value);
  //   };

  return (
    <div className=" flex gap-2">
      <div className="inline-block text-gray-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <label
            key={star}
            className={`cursor-pointer  text-lg transition-colors ${
              rating.rate >= star ? " text-main-star-color" : "text-gray-400"
            }`}
            // onClick={() => handleRating(star)}
          >
            ★
          </label>
        ))}
      </div>
      <span className="text-gray-600">({rating ? rating.count : 0})</span>
    </div>
  );
};

export default StarRating;
