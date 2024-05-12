import LoginForm from "../components/customerAuth/LoginForm";

const LoginPage = () => {
  return (
    <div className="relative my-16 overflow-y-hidden">
      <img
        src="/images/sideimg.png"
        className="absolute left-0 hidden max-h-full lg:block"
        alt="side image"
      />
      <section className="container ">
        <div className="  items-center md:lg:flex md:lg:gap-40 md:lg:py-40">
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
