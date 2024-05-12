import FooterColumnAccount from "./FooterColumnAccount";
import FooterColumnDownloadApp from "./FooterColumnDownloadApp";
import FooterColumnExclusive from "./FooterColumnExclusive";
import FooterColumnQuickLink from "./FooterColumnQuickLink";
import FooterColumnSupport from "./FooterColumnSupport";
// import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      className="footer  bg-black  
    py-20 font-poppins  text-main-text-color "
    >
      {/* container of footer  */}
      <div className=" container flex flex-wrap gap-20">
        <FooterColumnExclusive />
        <FooterColumnSupport />
        <FooterColumnAccount />
        <FooterColumnQuickLink />
        <FooterColumnDownloadApp />
      </div>
    </footer>
  );
};

export default Footer;
