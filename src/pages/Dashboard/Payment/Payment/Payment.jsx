import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data: agreement, isLoading } = useQuery({
    queryKey: ["agreement", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/agreement/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-green-600 text-xl font-medium">Loading payment info...</span>
      </div>
    );
  }

  return (
    <section className="py-10 px-4 max-w-2xl mx-auto">
      <Elements stripe={stripePromise}>
          <CheckoutForm agreement={agreement} />

      </Elements>
    </section>
  );
};

export default Payment;
