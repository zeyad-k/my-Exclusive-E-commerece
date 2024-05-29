import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";

const UserForm = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState({
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    address: user.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await updateUserProfile(userProfile);
    //   alert("Profile updated successfully");
    // } catch (error) {
    //   alert(`Failed to update profile: ${error.message}`);
    // }
  };

  return (
    <div className="container flex flex-col gap-20 px-20 py-10 font-poppins shadow-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-medium text-main-active-color">
          Edit Your Profile
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="displayName">Display Name</label>
              <input
                type="text"
                name="displayName"
                placeholder="First Name"
                id="displayName"
                value={userProfile.displayName}
                onChange={handleChange}
                className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
              />
            </div>

            <div className="row flex items-center justify-between gap-4">
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="displayName">First Name</label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="First Name"
                  id="displayName"
                  value={userProfile.displayName.split(" ")[0]}
                  onChange={handleChange}
                  className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
                />
              </div>

              <div className="row flex w-full items-center justify-between gap-4">
                <div className="flex w-full flex-col gap-2">
                  <label htmlFor="displayName">Last Name</label>
                  <input
                    type="text"
                    name="displayName"
                    placeholder="Last Name"
                    id="displayName"
                    value={userProfile.displayName.split(" ")[1]}
                    onChange={handleChange}
                    className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="row flex items-center justify-between gap-4">
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userProfile.email}
                  onChange={handleChange}
                  className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label htmlFor="address">Address</label>
                <input
                  type="address"
                  name="address"
                  placeholder="address"
                  id="address"
                  value={userProfile.address}
                  onChange={handleChange}
                  className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
                />
              </div>
            </div>

            <div className="change_password flex w-full flex-col gap-2">
              <label htmlFor="displayName">Password Changes</label>
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                id="currentPassword"
                onChange={handleChange}
                className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                id="newPassword"
                onChange={handleChange}
                className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                id="confirmPassword"
                onChange={handleChange}
                className="input rounded bg-main-form-input-color px-4 py-3 outline-none"
              />
            </div>
            <div className="form buttons flex w-full justify-end gap-2">
              <button
                type="submit"
                className="button rounded-lg px-4 py-3 hover:shadow "
              >
                cancel
              </button>
              <button
                type="submit"
                className="button rounded-lg bg-main-active-color px-4 py-3 text-white"
              >
                save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
