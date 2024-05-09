import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="font-inter text-[110px] font-medium leading-[115px] tracking-wide text-black">
        404 Not Found
      </h1>
      <p className="font-poppins text-base font-normal leading-6">
        Your visited page not found. You may go home page.
      </p>
      <Link
        className="rounded-md bg-main-active-color px-12 py-4 font-poppins text-base font-medium leading-6 text-white"
        to="/"
      >
        Back to home page
      </Link>{" "}
    </div>
  );
};
export default ErrorPage;
