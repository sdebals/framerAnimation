"use client";
import {ReactNode, useRef} from "react";
import {motion, useScroll, useTransform, useSpring} from "framer-motion";

interface ImageBoxProps {
  children: ReactNode;
}
const ImageBox = ({children}: ImageBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: ref, offset: ["0 1", "1.8 1"]});

  const temporaryTranslateProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const yTranslateProgress = useTransform(temporaryTranslateProgress, [0, 1], [100, 0]);

  return (
    <motion.div ref={ref} style={{y: yTranslateProgress}}>
      {children}
    </motion.div>
  );
};
const HeaderIsInvestment = () => {
  const containerRef = useRef(null);
  return (
    <header className="section_content is-investment">
      <div className="padding-section-medium">
        <div className="padding-global">
          <div className="container-large">
            <div className="w-layout-grid strategies_grid is-first" ref={containerRef}>
              <div className="strategies_image-wrapper">
                <div className="strategies_static-image-wrapper">
                  <div className="strategies_image">
                    <ImageBox>
                      <img src="https://cdn.prod.website-files.com/64f7880f47ac71c582abc9fa/6500381efa378c130652ccae_bg-mask-2.webp" alt="A mountain lion rests on a moss covered rock." />
                    </ImageBox>
                  </div>
                </div>
                <div className="strategies_image-overlay-wrapper">
                  <div className="strategies_image-overlay">
                    <ImageBox>
                      <img
                        src="https://cdn.prod.website-files.com/64f7880f47ac71c582abc9fa/6500381ea17868235c9c356a_peeking-mask-2.webp"
                        alt="cutout of A mountain lion rests on a moss covered rock."
                      />
                    </ImageBox>
                  </div>
                </div>
              </div>
              <div className="strategies_component">
                <div className="strategies_content">
                  <h3 className="font-syncopate">Extinction Drivers</h3>
                  <p>The industries most responsible for biodiversity loss are the ones that most need disruption. We look for startups with new ideas to slow and reverse drivers of extinction.</p>
                  <div id="w-node-_89372217-6855-7b22-01e0-1e615e975593-e4a575ca" className="strategies_divider"></div>
                  <div id="w-node-_8fb76a5f-6210-8327-b044-ace1a897c1c9-e4a575ca" className="strategies_sectors">
                    <div className="font-syncopate">INTEREST&nbsp;AREAS</div>
                    <div id="w-node-_260016a9-a5b3-2a19-2203-feeb307f66de-e4a575ca" className="strategies_sectors-tag-warpper">
                      <div className="strategies_sectors-tag">Agriculture</div>
                      <div className="strategies_sectors-tag">Circular Economy</div>
                      <div className="strategies_sectors-tag">Cities</div>
                      <div className="strategies_sectors-tag">Invasive Species</div>
                      <div className="strategies_sectors-tag">Pollution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid strategies_grid is-opp">
              <div className="strategies_image-wrapper">
                <div className="strategies_static-image-wrapper">
                  <div className="strategies_image">
                    <ImageBox>
                      <img src="https://cdn.prod.website-files.com/64f7880f47ac71c582abc9fa/6500381ea7c18c4c7c3e17cf_bg-mask-1.webp" alt="An underwater view of a mangrove tree in the water." />{" "}
                    </ImageBox>
                  </div>
                </div>
                <div className="strategies_image-overlay-wrapper">
                  <div className="strategies_image-overlay">
                    <ImageBox>
                      <img src="https://cdn.prod.website-files.com/64f7880f47ac71c582abc9fa/6500381ea006a750a8f98287_peeking-mask-1.webp" alt="cutout of a mangrove tree." />
                    </ImageBox>
                  </div>
                </div>
              </div>
              <div className="strategies_component">
                <div className="strategies_content">
                  <h3 className="font-syncopate">CLIMATE X&nbsp;BIODIVERSITY</h3>
                  <p>Biodiversity and climate are intrinsically linked, and we invest in tech-driven solutions that are win-wins for both.</p>
                  <div id="w-node-_90001b0b-8cca-e54a-33c8-0504e53caf38-e4a575ca" className="strategies_divider"></div>
                  <div id="w-node-_90001b0b-8cca-e54a-33c8-0504e53caf39-e4a575ca" className="strategies_sectors">
                    <div className="font-syncopate">INTEREST&nbsp;AREAS</div>
                    <div id="w-node-_90001b0b-8cca-e54a-33c8-0504e53caf3c-e4a575ca" className="strategies_sectors-tag-warpper">
                      <div className="strategies_sectors-tag">Adaptation</div>
                      <div className="strategies_sectors-tag">Forests</div>
                      <div className="strategies_sectors-tag">MRV</div>
                      <div className="strategies_sectors-tag">Oceans</div>
                      <div className="strategies_sectors-tag">Soil</div>
                      <div className="strategies_sectors-tag">Wildfire</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid strategies_grid is-last">
              <div className="strategies_image-wrapper">
                <div className="strategies_static-image-wrapper">
                  <div className="strategies_image">
                    <ImageBox>
                      <img src="https://cdn.prod.website-files.com/64f7880f47ac71c582abc9fa/6500381ed101e433e2357067_bg-mask.webp" alt="A close up of a blue bird flying on the sky." />{" "}
                    </ImageBox>
                  </div>
                </div>
                <div className="strategies_image-overlay-wrapper">
                  <div className="strategies_image-overlay">
                    <ImageBox>
                      <img src="https://cdn.prod.website-files.com/64f7880f47ac71c582abc9fa/6500381e4c36ec9668677c7b_peeking-mask.webp" alt="cutout of a blue bird flying." />{" "}
                    </ImageBox>
                  </div>
                </div>
              </div>
              <div className="strategies_component">
                <div className="strategies_content">
                  <h3 className="font-syncopate">Enabling Tech</h3>
                  <p>Remote sensing, genomics, drones: conservationists have always put tech innovation to work. We invest in the next generation of breakthroughs.</p>
                  <div id="w-node-acac2a71-b303-45be-02ef-464c6872d437-e4a575ca" className="strategies_divider"></div>
                  <div id="w-node-acac2a71-b303-45be-02ef-464c6872d438-e4a575ca" className="strategies_sectors">
                    <div className="font-syncopate">INTEREST&nbsp;AREAS</div>
                    <div id="w-node-acac2a71-b303-45be-02ef-464c6872d43b-e4a575ca" className="strategies_sectors-tag-warpper">
                      <div className="strategies_sectors-tag">AI</div>
                      <div className="strategies_sectors-tag">Biomanufacturing</div>
                      <div className="strategies_sectors-tag">Genomics</div>
                      <div className="strategies_sectors-tag">Remote sensing</div>
                      <div className="strategies_sectors-tag">Robotics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderIsInvestment;
