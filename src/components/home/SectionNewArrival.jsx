const SectionNewArrival = () => {
  return (
    <section className="section-new-arrival">
      <div className="container flex flex-wrap gap-7 md:flex-nowrap">
        <span>
          <a href="#">
            <img
              src="/newarrivalImage/newArrivalPlayStation.png"
              alt="PlayStation Offer "
            />
          </a>
        </span>
        <span className="flex flex-col gap-8">
          <a href="#">
            <img
              src="/newarrivalImage/WomenCollections.png"
              alt="PlayStation Offer "
            />
          </a>

          {/* end */}

          <div className="flex gap-7">
            <span>
              <a href="#">
                <img
                  src="/newarrivalImage/speakers.png"
                  alt="PlayStation Offer "
                />
              </a>
            </span>

            <span>
              <a href="#">
                <img
                  src="/newarrivalImage/perfum.png"
                  alt="PlayStation Offer "
                />
              </a>
            </span>
          </div>
        </span>
      </div>
    </section>
  );
};

export default SectionNewArrival;
