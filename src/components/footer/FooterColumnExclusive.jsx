import { Link } from "react-router-dom";

const FooterColumnExclusive = () => {
  return (
    <div className="footer-column flex flex-col gap-4">
      <div className=" flex flex-col gap-6 ">
        <Link
          to="/"
          className="logo text-2xl font-bold leading-6 tracking-[2px] "
        >
          <h1>Exclusive</h1>
        </Link>

        <Link to="#" className="logo text-xl font-medium leading-6   ">
          Subscribe
        </Link>
        <p className="text-base font-normal">Get 10% off your first order</p>
      </div>
      <form className="footer-enter-email flex max-w-[100%] gap-2  rounded-md border-2 border-solid border-main-text-color px-2 py-3">
        <input
          className="bg-transparent"
          type="email"
          name="email"
          placeholder="Enter your email address"
          id="footer-email"
        />
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default FooterColumnExclusive;
