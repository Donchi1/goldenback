import React from "react";

import ReactDom from "react-dom";
import * as Icons from "react-bootstrap-icons";
import Modal from "./Modal";
import LightBox from "./LightBox";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../State/goldenSlice";

function ModalWrapper({ light }) {
  const dispatch = useDispatch();
  const { modal, modalData, openSearch } = useSelector((state) => state.golden);
  if (!modal) return null;
  return ReactDom.createPortal(
    <>
      <div
        className="fixed w-full h-screen z-50 fade overflow-hidden right-0 left-0 bottom-0 top-0 bg-gray-500/60"
        onClick={() => dispatch(openModal(false))}
      ></div>
      <div className="flex mx-auto relative  w-full overflow-y-scroll ">
        <div
          className="  fixed left-[4%]  fade 
         z-50 w-11/12 m-auto  pb-8 "
        >
          <button
            onClick={() => dispatch(openModal(false))}
            className="  bg-transparent text-3xl top-10  font-semibold right-0   absolute
        outline-none cursor-pointer
        transition-all duration-500 ease-linear hover:border-red-700 border-2 
  text-red-500"
          >
            <Icons.X />
          </button>

          {light && <LightBox modalData={modalData} />}

          {!light && <Modal modalData={modalData} setOpenModal={openModal} />}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ModalWrapper;
