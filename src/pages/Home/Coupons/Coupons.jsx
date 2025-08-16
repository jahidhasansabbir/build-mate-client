import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../shared/Loading/Loading";
import { motion } from "framer-motion";

export default function Coupons() {
  const axiosSecure = useAxiosSecure();

  const { data: coupons, isLoading } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupons");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  const availableCoupons = coupons?.filter((c) => c.available) || [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 text-gray-900 shadow-lg"
    >
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: false }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-500 mb-8 text-center"
      >
        Exclusive Member Coupons
      </motion.h2>

      {availableCoupons.length === 0 ? (
        <p className="text-center text-gray-500 text-base sm:text-lg font-medium">
          No active coupons available at the moment.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {availableCoupons.map(({ code, description, discount }, index) => (
            <motion.div
              key={code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: false }}
              className="bg-indigo-50 bg-opacity-50 backdrop-blur-sm border border-indigo-200 rounded-xl p-6 flex flex-col justify-between transition-transform duration-300"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-500 mb-2 tracking-wide">
                  {code}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-indigo-700 font-medium tracking-wide">
                Get {discount}% discount
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
