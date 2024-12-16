"use client";

const HeaderIsPledge = () => {
  return (
    <section className="section_sticky-header is-pledge">
      <div className="pledge_text-wrapper">
        <div className="pledge_text">10%</div>
      </div>
      <div className="container-large">
        <div className="max-width-xxlarge align-center">
          <div className="text-align-center">
            <div className="margin-bottom margin-medium">
              <h2 className="heading-style-h4 font-syncopate">A pledge to nature</h2>
            </div>
            <p className="text-size-medium">
              We’ve pledged 10% of Superorganism’s profits to future conservation efforts. Learn more about the nature funding gap{" "}
              <a href="https://www.nature.org/en-us/what-we-do/our-insights/perspectives/closing-nature-funding-gap-global-biodiversity-finance/" target="_blank" className="is-link-paragraph">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderIsPledge;
