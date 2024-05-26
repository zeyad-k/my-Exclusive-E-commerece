import React from "react";
import {
  Button,
  Menu,
  MenuHandler,
  // MenuItem,
  MenuList,
  // Typography,
} from "@material-tailwind/react";
// import {
//   HiCog,
//   HiInboxIn,
//   HiPencilAlt,
//   HiOutlineMail,
//   HiUserCircle,
// } from "react-icons/hi";
import LogoutButton from "./LogoutButton";
import ManageMyAccountButton from "./ManageMyAccountButton";

// profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: HiUserCircle,
//   },
//   {
//     label: "Edit Profile",
//     icon: HiPencilAlt,
//   },
//   {
//     label: "Inbox",
//     icon: HiOutlineMail,
//   },
//   {
//     label: "Help",
//     icon: HiInboxIn,
//   },
//   {
//     label: "Sign Out",
//     icon: HiCog,
//   },
// ];

const UserHeaderIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isMenuOpen ? "bg-main-active-color p-1" : undefined}
          >
            <path
              d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
              stroke={isMenuOpen ? "#fff" : "black"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
              stroke={isMenuOpen ? "#fff" : "black"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </MenuHandler>

      <MenuList className=" to-black/800 flex flex-col gap-2 border-none bg-transparent/30 bg-gradient-to-r  from-gray-800 via-purple-800  p-1 px-2 py-2 font-poppins text-sm font-normal text-white backdrop-blur-sm backdrop-brightness-50   ">
        <ManageMyAccountButton />
        <LogoutButton />
        {/* {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })} */}
      </MenuList>
    </Menu>
  );
};

export default UserHeaderIcon;
