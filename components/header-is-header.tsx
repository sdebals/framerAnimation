"use client";
import Image from "next/image";

const HeaderIsHeader = () => {
  return (
    <header className="section_content is-header">
      <div className="padding-global">
        <div className="container-small">
          <div className="padding-section-large">
            <div className="text-align-center">
              <div className="max-width-xlarge align-center">
                <div className="margin-bottom margin-medium">
                  <h1 className="header-is-header-h1 text-balance">For those with wild ambition.</h1>
                </div>
                <p className="text-size-medium">
                  Superorganism is the first venture firm dedicated to biodiversity. We work with founders bold enough to imagine an abundant future for humans and nature alike.
                </p>
                <Image src="/images/mark-grizzly.svg" width="49" height="53" alt="superorganism logo" className="header_bottom-logo"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderIsHeader;
