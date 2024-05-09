import FooterColumnAccount from "./FooterColumnAccount";
import FooterColumnDownloadApp from "./FooterColumnDownloadApp";
import FooterColumnExclusive from "./FooterColumnExclusive";
import FooterColumnQuickLink from "./FooterColumnQuickLink";
import FooterColumnSupport from "./FooterColumnSupport";
// import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      className="top-header  bg-black  
    py-20 font-poppins  text-main-text-color "
    >
      {/* container of footer  */}
      <div className="mx-auto flex max-w-[1200px] gap-20">
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
