import SectionComponentHeader from "./SectionComponentHeader";

const SectionComponent = (props) => {
  const { upTitle, downTitle, downContent, buttons, sectionBody } = props;
  return (
    <div className="container font-poppins">
      <SectionComponentHeader
        upTitle={upTitle}
        downTitle={downTitle}
        downContent={downContent}
        buttons={buttons}
      />

      <div className="Section__Body mt-16">{sectionBody && sectionBody}</div>
    </div>
  );
};

export default SectionComponent;
