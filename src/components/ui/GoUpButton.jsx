import { ArrowUp } from "lucide-react";

const GoUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="go-up-button p-2 bg-main-form-input-color rounded-[50%]" onClick={scrollToTop}>
      <ArrowUp />
    </button>
  );
};

export default GoUpButton;
