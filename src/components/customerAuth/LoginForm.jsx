import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = { email: "", password: "" };

const LoginForm = () => {
  const [input, setInput] = useState(initialState);

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="flex w-full flex-1 lg:justify-end">
      <form
        onSubmit={handleSubmit}
        className="flex  flex-col   text-base font-normal leading-6"
      >
        <span className="form-heading mb-12 flex flex-col gap-6">
          <h2 className="font-inter text-4xl font-medium tracking-[4%]">
            Log in to Exclusive
          </h2>
          <p>Enter your details below</p>
        </span>

        <span className="form-inputs mb-10 flex flex-col gap-10">
          <input
            placeholder="Email"
            className="border-b-2   focus:text-main-active-color focus:outline-none"
            type="email"
            name="user_email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            className="border-b-2   focus:text-main-active-color focus:outline-none"
            type="password"
            name="user_password"
            value={input.password}
            onChange={handleChange}
          />
        </span>

        <span className="form-buttons flex items-center  justify-between  gap-4 text-center">
          <button
            className="rounded-md bg-main-active-color px-6  py-4 text-white"
            type="submit "
          >
            Log in
          </button>
          <Link
            to="/forgotPassword"
            className="text-main-active-color underline-offset-8 hover:underline"
          >
            Forgot Password?
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
