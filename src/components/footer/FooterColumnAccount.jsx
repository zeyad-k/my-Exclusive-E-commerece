import { Link } from "react-router-dom";

const FooterColumnAccount = () => {
  return (
    <div className="footer-column flex flex-col gap-6 font-poppins text-main-text-color ">
      <h3 className="footer-column-title text-xl font-medium leading-7">
        Account
      </h3>
      <ul className="footer-column-list flex	 flex-col gap-4 text-base font-normal">
        <li className="footer-column-list-item ">
          <Link to="#">My Account</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">Login / Register</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">Cart</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">Wishlist</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterColumnAccount;
