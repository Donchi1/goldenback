import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import axios from "../utils/axios";
import makeRequest from "../utils/makeRequest";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../State/cartSlice";
import { getOrders } from "../State/goldenSlice";

function Stripe({
  total,

  shipping,

  delivery,
  contactInformation,
}) {
  const id = localStorage.getItem("user");
  const stripe = useStripe();
  const elements = useElements();
  const [secret, setSecret] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [cardState, setCardState] = useState({
    error: null,
    brand: null,
    disabled: "",
    isLoading: false,
  });

  const { error, brand, disabled, isLoading } = cardState;

  useEffect(() => {
    const getClientSecret = async () => {
      //api call
      try {
        const res = await axios.post(`/payment?amount=${total * 100}`);
        setSecret(res.data.clientSecret);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClientSecret();
  }, [products]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCardState({ ...cardState, isLoading: true });
    try {
      const { paymentIntent } = await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          payment_method: "card",
        },
      });
      const { created, amount, currency, payment_method } = paymentIntent;
      // make requst for Order
      const filtered = products.map((each) => {
        return { productId: each._id, quantity: each.quantity };
      });
      const { data, error } = await makeRequest(
        axios.post,
        `/orders/create/${id}`,
        {
          products: filtered,
          date: created,
          amount,
          shipping: {
            contact: contactInformation,
            address: delivery,
            currency,
            pickupType: shipping.method,
            payment_method,
          },
        }
      );
      setCardState({
        ...cardState,
        isLoading: false,
        disabled: false,
        error: null,
      });
      dispatch(clearCart());
      localStorage.removeItem("cartId");
      dispatch(getOrders(data));
      navigate("/products/order", { replace: true });
    } catch (err) {
      setCardState({ ...cardState, isLoading: false, error: err.message });
    }
  };

  const handleChange = (e) => {
    setCardState({
      ...cardState,
      error: e.error ? e.error.message : "",
      disabled: e.empty,
      brand: e.brand,
    });
  };

  return (
    <div className=" flex justify-center items-center bg-white shadow-lg h-28 px-8">
      <div className="flex-1 ">
        <h2 className=" lg:text-xl text-lg capitalize ">
          Stripe Payment{" "}
          {brand && (
            <span className="text-red-500 uppercase">{brand} card</span>
          )}
        </h2>
      </div>
      <form className="flex-1 " onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />
        <div className="mt-4 gap-8 ">
          <button
            disabled={!stripe || !elements || isLoading || disabled}
            className="bg-blue-500 w-full disabled:cursor-not-allowed disabled:opacity-60 rounded  py-2 px-4 text-white uppercase"
          >
            {isLoading ? "Loading..." : "Pay Now"}
          </button>
          {error !== "" && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Stripe;
