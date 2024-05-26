import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { firebaseAuth } from "../../utils/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignUpWithGoogleButton from "./SignUpWithGoogleButton";

const initialState = { name: "", email: "", password: "" };

const SignUpForm = () => {
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [input, setInput] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = input;
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        setInput(initialState);
        navigate("/");

        // ...
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };

  return (
    <div className="flex w-full flex-1 lg:justify-end">
      <form
        onSubmit={handleSubmit}
        className="flex  flex-col    text-base font-normal leading-6"
      >
        <span className="form-heading mb-12 flex flex-col gap-6">
          <h2 className="font-inter text-4xl font-medium tracking-[4%]">
            Create an account
          </h2>
          <p>Enter your details below</p>
        </span>
        {error && (
          <p className="form__error mb-4 text-center text-red-500">{error}</p>
        )}

        <span className="form-inputs mb-10 flex flex-col gap-10">
          <input
            className="border-b-2   focus:text-main-active-color focus:outline-none"
            placeholder="Name"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />

          <input
            placeholder="Email"
            className="border-b-2   focus:text-main-active-color focus:outline-none"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            className="border-b-2   focus:text-main-active-color focus:outline-none"
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </span>

        <span className="form-buttons mb-8 flex flex-col gap-4">
          <button
            className="rounded-md bg-main-active-color  py-4 text-white"
            type="submit "
          >
            Create Account
          </button>
          <SignUpWithGoogleButton />
        </span>
        <span className="form-footer flex justify-center gap-4 text-center   text-black opacity-70 ">
          <p>Already have account?</p>
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

export default SignUpForm;
