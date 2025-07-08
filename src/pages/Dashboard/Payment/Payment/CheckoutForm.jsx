import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckoutForm = ({ agreement }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [rentAmount, setRentAmount] = useState(agreement?.rent)
  const [isApplied, setIsApplied] = useState(false);
  const [coupon, setCoupon] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrorMessage("");

    const paymentData = {
      email: agreement?.userEmail,
      amount: agreement?.rent,
      coupon
    };

    try {
      const res = await axiosSecure.post("/create-payment-intent", paymentData);
      const data = res.data;

      const card = elements.getElement(CardElement);

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card,
            billing_details: {
              name: agreement?.userName || "Customer",
              email: agreement?.userEmail,
            },
          },
        }
      );

      if (error) {
        setErrorMessage(error.message);
      } else if (paymentIntent.status === "succeeded") {
        alert("✅ Payment successful!");
        // Optionally: update backend with status
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Payment failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
        color: "#1F2937", // Tailwind gray-800
        fontFamily: "inherit",
        iconColor: "#22C55E", // Tailwind green-500
        "::placeholder": {
          color: "#9CA3AF", // Tailwind gray-400
        },
      },
      invalid: {
        iconColor: "#EF4444", // red-500
        color: "#EF4444",
      },
    },
  };
  const handleCoupon = (e) => {
    e.preventDefault()
    const code = e.target.coupon.value;
    axiosSecure.get(`/coupon/${code}`)
    .then(res=>{
        console.log(res.data);
        const discount = res.data.discount;
        const updatedAmount = rentAmount - (rentAmount * (discount/100))
        setRentAmount(updatedAmount)
        setIsApplied(true)
        setCoupon(code);
    })
    .catch(err=>{
        console.log(err);
    })
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto space-y-4 border-2 border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold text-center text-green-600">
          Pay Your Rent
        </h2>
        <p className="text-gray-600 text-base text-center">
          Amount: ৳
          <span className="font-bold text-gray-800">{rentAmount}</span>
        </p>

        <div className="border border-gray-300 rounded-md p-4 focus-within:ring-2 focus-within:ring-green-500 transition">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>

        {errorMessage && (
          <p className="text-sm text-red-500 mt-2 text-center">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={!stripe || processing}
          className={`w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition ${
            processing ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {processing ? "Processing..." : "Pay Now"}
        </button>
      </form>
      <div>
        <label
          htmlFor="coupon"
          className="block mb-2 font-semibold text-gray-700"
        >
          Have a coupon?
        </label>
        <form onSubmit={handleCoupon} className="flex gap-3">
          <input
            id="coupon"
            type="text"
            name="coupon"
            placeholder="Enter coupon code"
            required
            className="flex-grow rounded-lg border border-gray-300 bg-white px-4 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />
          <button
          type="submit"
          disabled={isApplied}
            className="bg-green-500 hover:bg-green-700 text-white btn rounded-lg font-semibold transition"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
