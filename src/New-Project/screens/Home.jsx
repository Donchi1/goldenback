import React, { useContext } from "react";
import { goldenContext } from "../context/GoldenProvider";

import Title from "../components/Title";
import Category from "../components/Category";
import Products from "./Products";
import HomeCarousel from "../components/HomeCarousel";
import ModalWrapper from "../components/ModalWrapper";
import Brands from "../components/Brands";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home() {
  const { scrollRef } = useContext(goldenContext);
  return (
    <main className="" ref={scrollRef}>
      <HomeCarousel />
      <Title text="Products" />

      <div>
        <div className="bg-gray-100">
          <div className="grid lg:grid-cols-3 grid-cols-2   text-center place-content-center place-items-center  ">
            <Category
              name="Laptops"
              price="from $8656"
              img="ecoms/images/catalog/laptops.png"
              width={"200px"}
              path="/category/laptops"
            />
            <Category
              name=" SmartPhones"
              price="from $4556"
              img="ecoms/images/catalog/smartphones.png"
              width="150px"
              path="/category/smartphones"
            />

            <Category
              name="  Watches"
              price="from $456"
              img="ecoms/images/catalog/watches.png"
              width="150px"
              path="/category/watches"
            />

            <Category
              name=" Clothes"
              price="from $456"
              img="ecoms/data/images/10-13130A.jpg"
              width="150px"
              path="/category/clothes"
            />
            <Category
              name="Tablets"
              price="from $356"
              img="ecoms/images/catalog/tablets.png"
              width="180px"
              path="/category/clothes"
              padding={true}
            />
            <Category
              name="PlayStations"
              price="from $496"
              img="ecoms/images/catalog/consoles.png"
              width="150px"
              path="/category/consoles"
            />
          </div>
        </div>
        <Products />
        <ModalWrapper />
        <Brands />
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
