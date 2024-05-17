import ProfitIconComponent from "./ProfitIconComponent";

const ProfitSection = () => {
  const profit = [
    {
      serviceNumber: 10.5,
      serviceStatement: "Sallers active our site",
      serviceIcon: "/profitsIcons/Services.svg",
      serviceIconHover: "/profitsIcons/Services-Hover.svg",
    },
    {
      serviceNumber: 33,
      serviceStatement: "Mopnthly Produduct Sale",
      serviceIcon: "/profitsIcons/Dolor.svg",
      serviceIconHover: "/profitsIcons/Dolor-Hover.svg",
    },
    {
      serviceNumber: 45.5,
      serviceStatement: "Customer active in our site",
      serviceIcon: "/profitsIcons/Cart.svg",
      serviceIconHover: "/profitsIcons/Cart-Hover.svg",
    },
    {
      serviceNumber: 25,
      serviceStatement: "Anual gross sale in our site",
      serviceIcon: "/profitsIcons/MonyBag.svg",
      serviceIconHover: "/profitsIcons/MonyBag-Hover.svg",
    },
  ];
  return (
    <section className="profits flex flex-wrap items-center justify-center gap-3 lg:flex-nowrap">
      {profit.map((service, index) => (
        <ProfitIconComponent
          key={index}
          serviceNumber={service.serviceNumber}
          serviceStatement={service.serviceStatement}
          serviceIcon={service.serviceIcon}
          serviceIconHover={service.serviceIconHover}
        />
      ))}
    </section>
  );
};

export default ProfitSection;
