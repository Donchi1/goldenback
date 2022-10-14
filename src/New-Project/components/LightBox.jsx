import React, { useRef } from "react";

import { Slide } from "react-slideshow-image";

function LightBox({ modalData }) {
  const lightRef = useRef();

  const goto = (id) => {
    lightRef.current.goTo(id);
  };

  return (
    <div className="h-screen">
      <div className="  pb-2 h-[100%] lg:h-[50%] xl:h-[75%] xl:mt-[6.5%] lg:mt-[35%] bg-white px-4">
        <div className="h-screen ">
          <div className=" pt-[50%] md:pt-[40%] lg:pt-[15%] xl:pt-0 ">
            <Slide ref={lightRef}>
              {modalData.subImg.map((each, idx) => (
                <div key={idx} className="flex justify-center  h-full">
                  <img src={each} alt="lightbox" className=" w-3/5 lg:w-2/6" />
                </div>
              ))}
            </Slide>
            <div className="flex items-center gap-6 mt-4 justify-center ">
              {modalData.subImg.map((each, idx) => (
                <div key={idx}>
                  <img
                    src={each}
                    alt="lightbox"
                    className="hover:border-blue-500 h-[80px] transition-all ease-linear duration-500 border-2 border-gray-300 rounded p-4"
                    width="80px"
                    onClick={() => goto(idx)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LightBox;
