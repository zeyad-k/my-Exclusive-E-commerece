import SignUpForm from "../components/customerAuth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="relative overflow-y-hidden md:lg:my-16">
      <img
        src="/images/sideimg.png"
        className="absolute left-0 hidden max-h-full lg:block"
        alt="side image"
      />
      <section className="container ">
        <div className="  items-center md:lg:flex md:lg:gap-40 md:lg:py-40">
          <SignUpForm />
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
