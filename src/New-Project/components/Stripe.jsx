import React, { useState, useEffect, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { goldenContext } from "../context/GoldenProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Stripe({
  total,
  clearCart,
  replace,
  shipping,
  regionDelivery,
  cityDelivery,
  contactInformation,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [secret, setSecret] = useState("");
  const { cart } = useContext(goldenContext);
  const [cardState, setCardState] = useState({
    error: null,
    brand: null,
    disabled: "",
    isLoading: false,
  });
  const navigate = useNavigate();
  const { error, brand, disabled, isLoading } = cardState;

  useEffect(() => {
    const getClientSecret = async () => {
      //api call
      // try{

      //   const res = axios.post(`http://localhost:5000/api/payment?amount=${total * 100}`)
      //   setSecret(res.data.clientSecret);
      // }catch(error){
      //   console.log(error)
      // }
      setSecret("dhiuoj");
    };
    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCardState({ ...cardState, isLoading: true });
    try {
      const { paymentIntent } = await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      setCardState({
        ...cardState,
        isLoading: false,
        disabled: false,
        error: null,
      });
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
