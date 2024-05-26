import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../utils/Firebase";
import { Link } from "react-router-dom";

const initialState = { email: "" };

const ForgetPasswordForm = () => {
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
    setError("");
  };
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(firebaseAuth);

  const resetRequest = async () => {
    if (input.email) {
      try {
        await sendPasswordResetEmail(input.email);
        alert("link has been sent to your email");
      } catch (error) {
        // Handle the error here
        alert(error.message);
      }
    } else {
      alert("Please enter an email");
    }
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    resetRequest();
  };

  return (
    <div className="flex w-full flex-1 lg:justify-end">
      <form
        onSubmit={handleResetPassword}
        className="flex  flex-col   text-base font-normal leading-6"
      >
        <span className="form-heading mb-12 flex flex-col gap-6">
          <h2 className="font-inter text-4xl font-medium tracking-[4%]">
            Forget Password
          </h2>
          <p>Enter your email below</p>
          <p className="form__error text-red-500">{error}</p>
        </span>

        <span className="form-inputs mb-10 flex flex-col gap-10">
          <input
            placeholder="Email"
            className="border-b-2   focus:text-main-active-color focus:outline-none"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </span>

        <span className="form-buttons flex flex-col items-center  justify-center  gap-4 text-center">
          <button
            className="rounded-md bg-main-active-color px-6  py-4 text-white"
            type="submit "
          >
            Enter Your Email
          </button>

          <Link
            className="font-semibold underline-offset-8  hover:underline"
            to="/login"
          >
            Log in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
