import { Link } from "react-router-dom";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";

const WishlistPage = () => {
  const wishlist = [
    {
      id: 1,
      img: "/CategoryImages/WomanHandBag.png",
      name: "bag",
      price: "5",
      discountPercentage: ".1",
      discountedPrice: "4",
    },
  ];

  return (
    <div className="container my-4 flex flex-col gap-32 font-poppins lg:my-16">
      <BlockLevelBreadcrumbs />
      <div className="flex flex-col justify-center gap-4">
        <div className="section-header flex items-center justify-between">
          <p>
            Wishlist(<span>{wishlist.length}</span>)
          </p>
          <Link to="/cart">
            <button className="rounded-md border border-black px-12 py-4 hover:border-white hover:bg-main-active-color hover:text-white">
              Move All To Bag
            </button>
          </Link>
        </div>
        <div className="section-body">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-product-card">
              <img
                className="rounded bg-main-form-input-color px-12 py-14"
                src={item.img}
                alt={item.name}
              />
              <p>{item.name}</p>
              <p className="flex gap-2">
                <span>${item.price}</span>
                <span>${item.discountedPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
