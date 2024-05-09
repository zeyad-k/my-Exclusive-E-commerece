import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="logo text-2xl font-bold leading-6 tracking-[2px] text-black"
    >
      <h1>Exclusive</h1>
    </Link>
  );
};

export default Logo;
