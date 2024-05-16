import SectionComponentHeader from "./SectionCompontheader";

const SectionComponent = (props) => {
  const { upTitle, downTitle, downContent } = props;
  return (
    <div className="container font-poppins">
      <SectionComponentHeader
        upTitle={upTitle}
        downTitle={downTitle}
        downContent={downContent}
      />

      <div className="Section__Body"></div>
    </div>
  );
};

export default SectionComponent;
