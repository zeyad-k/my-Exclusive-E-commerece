import SignUpForm from "../components/customerAuth/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="relative overflow-y-hidden">
      <img
        src="/images/sideimg.png"
        className="absolute left-0 max-h-full"
        alt="side image"
      />
      <section className="container ">
        <div className="  items-center gap-40 py-16 lg:flex">
          <SignUpForm />
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
