import { Link } from "react-router-dom";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";

const ErrorPage = () => {
  return (
    <div className="container my-10 ">
      <BlockLevelBreadcrumbs />
      <section className="  mt-10 flex flex-col items-center justify-center gap-20 py-5 text-center">
        <div className="flex flex-col gap-10 ">
          <h1 className="font-inter text-[110px] font-medium leading-[115px] tracking-wide text-black">
            404 Not Found
          </h1>
          <p className="font-poppins text-base font-normal leading-6">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <Link
          className="rounded-md bg-main-active-color px-12 py-4 font-poppins text-base font-medium leading-6 text-white"
          to="/"
        >
          Back to home page
        </Link>
      </section>
    </div>
  );
};
export default ErrorPage;
