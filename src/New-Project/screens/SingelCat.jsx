import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function SingleCat() {
  const { info } = useParams();

  return (
    <div>
      <p>{info}</p>
      <Footer />
    </div>
  );
}

export default SingleCat;
