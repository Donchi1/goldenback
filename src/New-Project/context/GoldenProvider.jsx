import React, { useState, useEffect, useRef } from "react";
import { mobileData } from "../products/tempFile/TestFile";
import formatCurrency from "../utils/formatCurrency";

export const goldenContext = React.createContext();

function GoldenProvider({ children }) {
  const [mobile, setMobile] = useState([...mobileData]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [cart, setCart] = useState(() => {
    const jsonCart = JSON.parse(localStorage.getItem("cart"));
    if (jsonCart) {
      return jsonCart;
    } else {
      return [];
    }
  });
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setmodalData] = useState([]);
  const [inStock, setInstock] = useState(true);
  const [searchFile, setSearchFile] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark"))?.dark
  );

  useEffect(() => {
    if (dark) {
      return document.documentElement.classList.add("dark");
    }
  }, []);

  const searchItem = (qName) => {
    const filterByName = mobile.filter((each) =>
      each.name.toLowerCase().includes(qName.toLowerCase())
    );

    return setSearchFile([...filterByName]);
  };

  const modalFile = (id) => {
    const tempData = mobile.find((item) => item.id === id);
    setmodalData(tempData);
  };

  useEffect(() => {
    return localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const scroll = () => {
    if (window.pageYOffset > 0) {
      Window.scrollTo({ x: 0, y: 0, behavior: "smooth" });
    } else {
      return;
    }
  };

  const handleCheck = (value) => {
    console.log(value);
  };

  const addToCart = (id) => {
    let newCart = [...cart];
    let added = mobile.find((item) => item.id === id);
    if (newCart.includes(added)) {
      return (added.inCart = true);
    }
    if (added.quantity >= 9) {
      added.quantity = 8;
    }
    added.inCart = true;
    setCart([...newCart, added]);
  };
  const removeCart = (id) => {
    cart.map((each) => {
      if (each.id === id) {
        each.inCart = false;
        each.update = false;
        return setCart((prev) => prev.filter((each) => each.id !== id));
      }
    });
  };

  const clearCart = () => {
    cart.map((each) => {
      if (each.inCart) {
        each.inCart = false;
        each.update = false;
      }
    });
    return setCart([]);
  };

  const sumSingle = (id) => {
    const item = cart.find((each) => each.id === id);
    const total = item.price * item.quantity;

    return formatCurrency(total);
  };
  const sumTotal = () =>
    formatCurrency(
      cart.reduce(
        (sum, { price, quantity, discount }) =>
          sum + price * quantity - discount,
        0
      )
    );

  const generalProductCalc = (id) => {
    let tempCart = [...cart];
    let productIncart;
    const product = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(product);
    productIncart = tempCart[index];

    return { productIncart, tempCart };
  };

  const tempMobileCalc = (id) => {
    let tempMobile = [...mobile];
    let proInfo;
    const product = tempMobile.find((prod) => prod.id === id);
    const index = tempMobile.indexOf(product);
    proInfo = tempMobile[index];

    return { proInfo, tempMobile };
  };

  const increment = (id, single) => {
    if (single) {
      const { proInfo, tempMobile } = tempMobileCalc(id);
      proInfo.quantity++;
      if (proInfo.quantity === 9) {
        proInfo.inStock = false;
        proInfo.quantity = 9;
      }
      if (proInfo.quantity < 9) {
        proInfo.inStock = true;
      }
      if (proInfo.quantity === 0) {
        proInfo.quantity = 1;
        proInfo.inStock = true;
      }

      return setMobile([...tempMobile]);
    }
    const { productIncart, tempCart } = generalProductCalc(id);
    productIncart.quantity += 1;

    if (productIncart.quantity === 9) {
      productIncart.inStock = false;
      productIncart.quantity = 9;
    }
    if (productIncart.quantity < 9 && productIncart.quantity !== 0) {
      productIncart.inStock = true;
    }
    productIncart.update = true;
    return setCart([...tempCart]);
  };
  const decrement = (id, single) => {
    if (single) {
      const { proInfo, tempMobile } = tempMobileCalc(id);

      proInfo.quantity -= 1;

      if (proInfo.quantity === 9) {
        proInfo.inStock = false;
        proInfo.quantity = 9;
      }
      if (proInfo.quantity < 9 && proInfo.quantity > 0) {
        proInfo.inStock = true;
      }

      return setMobile([...tempMobile]);
    }
    const { productIncart, tempCart } = generalProductCalc(id);
    productIncart.quantity -= 1;
    if (productIncart.quantity === 1) {
      productIncart.update = false;
    }
    if (productIncart.quantity >= 9) {
      productIncart.inStock = false;
      productIncart.quantity = 9;
    }
    if (productIncart.quantity < 9 && productIncart.quantity > 0) {
      productIncart.inStock = true;
    }

    return setCart([...tempCart]);
  };

  const scrollRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        return buttonRef.current?.classList.remove("hidden");
      } else {
        return buttonRef.current?.classList.add("hidden");
      }
    });
  }, []);

  return (
    <goldenContext.Provider
      value={{
        scrollRef,
        buttonRef,
        dark,
        setDark,
        openSidebar,
        setOpenSidebar,
        openSearch,
        setOpenSearch,
        openModal,
        searchFile,
        searchItem,
        modalData,
        modalFile,
        setOpenModal,
        sumSingle,
        inStock,
        setInstock,
        mobile,

        addToCart,
        cart,
        clearCart,
        removeCart,
        sumTotal,
        increment,
        decrement,
        handleCheck,
        scroll,
        setCart,
      }}
    >
      {children}
    </goldenContext.Provider>
  );
}

export default GoldenProvider;
