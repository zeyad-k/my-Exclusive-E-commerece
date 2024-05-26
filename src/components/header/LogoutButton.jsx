import { firebaseAuth } from "../../utils/Firebase";

const LogoutButton = () => {
  const logout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Sign Out Error", error);
      });
  };

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
