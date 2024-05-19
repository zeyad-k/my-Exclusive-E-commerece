// const ProductItemComponent = () => {

//   const product = {
//     name: "HAVIT HV-G92 Gamepad",
//     oldPrice: 160,
//     newPrice: 120,
//     discount: 40,
//     rating: 5,
//     reviews: 88,
//     imageUrl: "https://via.placeholder.com/250", // replace with the actual image path
//   };

//   return (
//     <div className="relative m-4 w-64 overflow-hidden rounded-lg border shadow-lg">
//       <div className="absolute right-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-white">
//         -{product.discount}%
//       </div>
//       <img
//         src={product.imageUrl}
//         alt={product.name}
//         className="h-64 w-full object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{product.name}</h2>
//         <div className="mt-2 flex items-center justify-between">
//           <span className="text-xl font-bold text-red-500">
//             ${product.newPrice}
//           </span>
//           <span className="text-gray-500 line-through">
//             ${product.oldPrice}
//           </span>
//         </div>
//         <div className="mt-2 text-yellow-500">
//           {"★".repeat(product.rating)}{" "}
//           <span className="text-gray-600">({product.reviews})</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItemComponent;

// const ProductItemComponent = () => {
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/1")
//       .then((res) => res.json())
//       .then((json) => console.log(json))
//       .catch((err) => console.error(err));
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error occurred while fetching data</div>;
//   }

//   if (!result) {
//     return null;
//   }

//   return (
//     <div className="relative m-4 w-64 overflow-hidden rounded-lg border shadow-lg">
//       <div className="absolute right-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-white">
//         -{result.id}% // This should probably be a discount, not the id
//       </div>
//       <img
//         src={result.image}
//         alt={result.title}
//         className="h-64 w-full object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{result.title}</h2>
//         <div className="mt-2 flex items-center justify-between">
//           <span className="text-xl font-bold text-red-500">
//             ${result.price}
//           </span>
//           {/* You might want to add an old price to your API response if you want to display it */}
//           <span className="text-gray-500 line-through">${result.oldPrice}</span>
//         </div>
//         <div className="mt-2 text-yellow-500">
//           {"★".repeat(result.rating ? Math.round(result.rating.rate) : 0)}{" "}
//           <span className="text-gray-600">
//             ({result.rating ? result.rating.count : 0})
//           </span>
//         </div>{" "}
//       </div>
//     </div>
//   );
// };

// export default ProductItemComponent;

import { useState, useEffect } from "react";

const ProductItemComponent = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        setResult(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (!result) {
    return null;
  }

  // Assuming a discount property or calculating discount based on oldPrice if available
  const discount = result.oldPrice
    ? Math.round(((result.oldPrice - result.price) / result.oldPrice) * 100)
    : 0;

  return (
    <div className="relative m-4 w-64 overflow-hidden rounded-lg border shadow-lg">
      {discount > 0 && (
        <div className="absolute right-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-white">
          -{discount}%
        </div>
      )}
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
        <div className="text-main-star-color  mt-2    ">
          {"★".repeat(result.rating ? Math.round(result.rating.rate) : 0)}{" "}
          <span className="text-gray-600">
            ({result.rating ? result.rating.count : 0})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemComponent;
