import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../context/Auth";

const initialState = { email: "", password: "" };

const LoginForm = () => {
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

    console.log(input);
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        input.email,
        input.password,
      );
      setUser(userCredential.user);
      setInput(initialState);
      navigate("/");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "The email / password address is not valid.";
          break;
        case "auth/user-disabled":
          errorMessage =
            "The user corresponding to the given email has been disabled.";
          break;
        case "auth/user-not-found":
          errorMessage = "There is no user corresponding to the given email.";
          break;
        case "auth/wrong-password":
          errorMessage = "The email / password address is not valid.";
          break;
        default:
          errorMessage = "The email / password address is not valid.";
      }
      setError(errorMessage);
    }
  };

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
