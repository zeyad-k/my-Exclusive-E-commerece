import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignUpWithGoogleButton = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <span
      onClick={() => handleLogin()}
      className="signUpWithGoogleButton   flex cursor-pointer items-center justify-center gap-4 rounded-md border-2   py-4 hover:bg-gray-200"
    >
      <img src="/images/Icon-Google.svg" alt="Icon-Google" />
      Sign up with Google
    </span>
  );
};
export default SignUpWithGoogleButton;
