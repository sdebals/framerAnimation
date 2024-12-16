"use client";
import Marquee from "./ui/marquee";

const ContentIsMentor = () => {
  return (
    <section className="section_content is-mentor">
      <div className="mentor_component-wrapper">
        <div className="mentor_component">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
            <Marquee pauseOnHover className="[--duration:20s]">
              {/**<div role="list" className="mentor_list w-dyn-items">**/}
              <div role="listitem">
                <div id="w-node-_7393af95-a539-63f4-35da-64249b1fd2d5-e4a575ca" className="card">
                  <img src="https://cdn.prod.website-files.com/64fc5180cf0e897a272111fc/658b589cd6a454cb5ee995af_Andre%20Haddad.png" alt="" />
                  <div className="card-content">
                    <h3 className="heading-style-h4 font-syncopate">Andre Haddad</h3>
                    <div>CEO</div>
                    <div>Turo</div>
                  </div>
                </div>
              </div>
              <div role="listitem">
                <div id="w-node-_7393af95-a539-63f4-35da-64249b1fd2d5-e4a575ca" className="card">
                  <img src="https://cdn.prod.website-files.com/64fc5180cf0e897a272111fc/65495a12f3b3658d117b48ad_Andrew%20Farnsworth.png" alt="" />
                  <div className="card-content">
                    <h3 className="heading-style-h4 font-syncopate">Andrew Farnsworth</h3>
                    <div>Lead Scientist</div>
                    <div>BirdCast</div>
                  </div>
                </div>
              </div>
              <div role="listitem">
                <div id="w-node-_7393af95-a539-63f4-35da-64249b1fd2d5-e4a575ca" className="card">
                  <img src="https://cdn.prod.website-files.com/64fc5180cf0e897a272111fc/6500f5e723a0ce1d2fd70009_6500cdf9bd23a074ee474b5b_Ashley%20Zehnder%20(Optimized).jpeg" alt="" />
                  <div className="card-content">
                    <h3 className="heading-style-h4 font-syncopate">Ashley Zehnder</h3>
                    <div>CEO</div>
                    <div>Fauna Bio</div>
                  </div>
                </div>
              </div>
              <div role="listitem">
                <div id="w-node-_7393af95-a539-63f4-35da-64249b1fd2d5-e4a575ca" className="card">
                  <img src="https://cdn.prod.website-files.com/64fc5180cf0e897a272111fc/6500f5f72c196746ff7a126e_6500ce1dfee165ef89758b5c_Bailey%20Richardson%20(Optimized).webp" alt="" />
                  <div className="card-content">
                    <h3 className="heading-style-h4 font-syncopate">Bailey Richardson</h3>
                    <div>Head of Marketing</div>
                    <div>Substack</div>
                  </div>
                </div>
              </div>
              {/**</div>**/}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="padding-vertical padding-xxlarge"></div>
    </section>
  );
};

export default ContentIsMentor;
