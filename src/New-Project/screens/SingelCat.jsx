import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { goldenContext } from "../context/GoldenProvider";

function SingleCat() {
  const { info } = useParams();
  const { scrollRef } = useContext(goldenContext);

  return (
    <div ref={scrollRef}>
      <p>{info}</p>
      <Footer />
    </div>
  );
}

export default SingleCat;
