import React from "react";
import SingleProduct from "./SingleProduct";

import { useSelector } from "react-redux";
import { getFiltered } from "../utils/getFiltered";

function Products() {
  const { products } = useSelector((state) => state.cart);
  const products1 = useSelector((state) => state.golden.products);

  const [a, b, c, d] = getFiltered(products1, products);

  const latest = [a, b, c];
  const recent = [c, a, b];
  const popular = [a, d];

  return (
    <>
      <SingleProduct item={popular} title="popular" />
      <SingleProduct item={latest} title="Latest" />
      <SingleProduct item={recent} title="recent" shadow={"shadow"} />
    </>
  );
}

export default Products;
