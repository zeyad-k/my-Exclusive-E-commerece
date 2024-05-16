import SectionComponentHeader from "./SectionComponentHeader";

const SectionComponent = (props) => {
  const { upTitle, downTitle, downContent, buttons } = props;
  return (
    <div className="container font-poppins">
      <SectionComponentHeader
        upTitle={upTitle}
        downTitle={downTitle}
        downContent={downContent}
        buttons={buttons}
      />

      <div className="Section__Body"></div>
    </div>
  );
};

export default SectionComponent;
