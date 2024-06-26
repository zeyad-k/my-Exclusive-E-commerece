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

  return (
    <button
      className=" flex items-center gap-2 rounded px-4 py-2 hover:bg-red-400/70 focus:bg-red-500/65 active:bg-red-500/75"
      onClick={logout}
    >
      <img src="/images/Icon-logout.svg" alt="" />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
