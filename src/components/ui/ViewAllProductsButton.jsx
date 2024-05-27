import { Link } from "react-router-dom";

const ViewAllProductsButton = () => {
  return (
    <div className="view-all-best-selling-button">
      <Link
        to="/allProducts"
        className="view-all-best-selling-button__button rounded-md   bg-main-active-color px-12 py-4 font-medium text-white"
      >
        View All Products
      </Link>
    </div>
  );
};

export default ViewAllProductsButton;
