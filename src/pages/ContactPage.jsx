import { useState } from "react";
import ContactInfo from "../components/Contact/ContactInfo";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className=" container my-4  flex-col    font-poppins lg:my-16  lg:flex-row  ">
      <BlockLevelBreadcrumbs />
      <div className="flex flex-col gap-8 lg:my-16  lg:flex-row">
        <ContactInfo />

        <section className="Contact__Form shadow-lg">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 px-8 py-10 text-base font-normal"
          >
            <span className=" flex flex-col  gap-4 lg:flex-row ">
              <input
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Your Name"
                name="name"
                className="bg-main-form-input-color rounded-sm border-2 border-none px-4 py-3 focus:text-main-active-color/70 focus:outline-none"
              />
              <input
                onChange={handleInputChange}
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-main-form-input-color rounded-sm border-2 border-none px-4 py-3 focus:text-main-active-color/70 focus:outline-none"
              />
              <input
                onChange={handleInputChange}
                required
                name="phone"
                type="number"
                placeholder="Your Phone"
                className="bg-main-form-input-color rounded-sm border-2 border-none px-4 py-3 focus:text-main-active-color/70 focus:outline-none"
              />
            </span>
            <textarea
              onChange={handleInputChange}
              required
              name="message"
              rows="6"
              placeholder="Your Message"
              className="bg-main-form-input-color  rounded-sm border-2 border-none px-4 py-3 focus:text-main-active-color/70 focus:outline-none"
            ></textarea>
            <button className=" self-end rounded-md bg-red-500 p-2 px-8 py-4 text-white">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
