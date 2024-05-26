import { Link } from "react-router-dom";

const ManageMyAccountButton = () => {
  return (
    <Link
      to="/profile"
      className="flex items-center gap-2 rounded px-4 py-2 hover:bg-gray-200/70 focus:bg-gray-500/65 active:bg-gray-500/65"
    >
      {/* className="  flex items-center gap-2 rounded px-4 py-2 hover:bg-red-900/70 focus:bg-red-500/65 active:bg-red-500/65"
      onClick={logout} */}

      <img src="/images/ManageMyAccount.svg" alt="" />
      <span>Manage My Account</span>
    </Link>
  );
};

export default ManageMyAccountButton;
