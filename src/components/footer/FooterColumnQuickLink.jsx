import { Link } from "react-router-dom";

const FooterColumnQuickLink = () => {
  return (
    <div className="footer-column flex flex-col gap-6 font-poppins text-main-text-color ">
      <h3 className="footer-column-title text-xl font-medium leading-7">
        QuickLink
      </h3>
      <ul className="footer-column-list flex	 flex-col gap-4 text-base font-normal">
        <li className="footer-column-list-item ">
          <Link to="#">My Account</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">Privacy Policy</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">Terms Of Use</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">FAQ</Link>
        </li>
        <li className="footer-column-list-item ">
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterColumnQuickLink;
