import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../shared/Loading/Loading";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments, isLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <section data-aos="fade-up" className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-indigo-500 text-center mb-8">
        Payment History
      </h2>

      {payments?.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No payment history found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-100 text-indigo-900 text-left text-sm uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {payments?.map((payment, index) => (
                <tr
                  key={payment._id}
                  className="border-t border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">
                    ৳{payment.discountedAmount?.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                      payment.status === "success"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-red-100 text-red-600"
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {format(new Date(payment.createdAt), "dd MMM yyyy, h:mm a")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
);
};

export default PaymentHistory;
