import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function Coupons() {
  
  const axiosSecure = useAxiosSecure()
  const {data: coupons, isLoading}=useQuery({
    queryKey:["coupons"],
    queryFn: async()=>{
      const res = await axiosSecure.get('/coupons')
      return res.data
    }
  })
//   code
// : 
// "JKKNIU16"
// description
// : 
// "new year"
// discount
// : 
// 16
  console.log(coupons, isLoading);
  return (
    <section className="bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 sm:p-10 md:p-14 text-gray-900 shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-500 mb-8 text-center">
        Exclusive Member Coupons
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {coupons?.map(({ code, description, discount }) => (
          <div
            key={code}
            className="bg-green-50 bg-opacity-50 backdrop-blur-sm border border-green-200 rounded-xl p-6 flex flex-col justify-between transition-transform duration-300"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2 tracking-wide">
                {code}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-green-700 font-medium tracking-wide">
              Get {discount}% discount
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
