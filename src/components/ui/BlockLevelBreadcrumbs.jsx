import { Breadcrumbs } from "@material-tailwind/react";
import { useLocation, Link } from "react-router-dom";

export function BlockLevelBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs fullWidth className="bg-transparent text-gray-500">
      <Link to="/" className="text-gray-500">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return isLast ? (
          <span key={to}>{value}</span>
        ) : (
          <Link key={to} to={to} className="text-black opacity-60">
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
