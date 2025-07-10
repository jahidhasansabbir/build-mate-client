import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../../shared/Loading/Loading";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {month} =useParams();
  const { data: agreement, isLoading } = useQuery({
    queryKey: ["agreement", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/agreement/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <section data-aos="fade-up" className="py-10 max-w-3xl mx-auto">
      <Elements stripe={stripePromise}>
          <CheckoutForm agreement={agreement} month={month}/>

      </Elements>
    </section>
  );
};

export default Payment;
