import React from "react";
import Swal from "sweetalert2";
import { MdAddCircleOutline } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageCoupons = () => {
const axiosSecure = useAxiosSecure();

  const {data:coupons, isLoading, refetch}=useQuery({
    queryKey: ["coupons"],
    queryFn:async()=>{
        const res = await axiosSecure.get('/coupons')
        return res.data;
    }
  })
  if(isLoading)return "loadin..."

  const handleAddCoupon = async () => {
    const { value: formValues } = await Swal.fire({
      title: `
    <p class="text-4xl font-semibold text-blue-600">
      Add New Coupon
    </p>`,
      html: `
    <div class="space-y-4 p-0 m-0 text-left overflow-hidden">
      <input
        id="code"
        class="swal2-input !w-full !bg-[#0A0F1C]/70 backdrop-blur-md !text-white !border !border-[#1A2238] !rounded-lg !px-4 !py-2 !text-sm placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Coupon Code"
      />
      <input
        id="discount"
        type="number"
        class="swal2-input !w-full !bg-[#0A0F1C]/70 backdrop-blur-md !text-white !border !border-[#1A2238] !rounded-lg !px-4 !py-2 !text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Discount Percentage (e.g. 20)"
      />
      <textarea
        id="description"
        rows="3"
        class="swal2-textarea !w-full !bg-[#0A0F1C]/70 backdrop-blur-md !text-white !border !border-[#1A2238] !rounded-lg !px-4 !py-2 !text-sm placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Write the description..."
      ></textarea>
    </div>
  `,
      background: "rgba(50, 60, 80, 0.9)", // semi-transparent background
      customClass: {
        popup:
          "backdrop-blur-xl bg-[#0A0F1C]/60 text-white rounded-xl border border-[#1A2238]",
        confirmButton:
          "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition duration-200",
        cancelButton:
          "bg-gray-800 ml-4 hover:bg-gray-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition duration-200",
      },
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      focusConfirm: false,
      preConfirm: () => {
        const code = document.getElementById("code").value.trim();
        const discount = document.getElementById("discount").value.trim();
        const description = document.getElementById("description").value.trim();

        if (!code || !discount || !description) {
          Swal.showValidationMessage("All fields are required");
          return false;
        }

        return {
          code,
          discount: parseInt(discount),
          description,
        };
      },
    });

    if (formValues) {
        
        axiosSecure.post('/coupons', formValues)
        .then(res=>{console.log(res.data);refetch()})
        .catch(err=>{console.log(err);})





      console.log("Coupon submitted:", formValues);
      Swal.fire({
        title: '<p class="text-4xl font-semibold text-blue-600">Success!</p>',
        html: '<p class="text-white">Coupon added successfully!</p>',
        icon: "success",
        background: "rgba(50, 60, 80, 0.9)",
        customClass: {
          popup:
            "backdrop-blur-xl bg-[#0A0F1C]/60 text-white rounded-xl border border-[#1A2238]",
          confirmButton:
            "bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition duration-200",
          title: "text-blue-600",
          content: "text-white text-sm",
        },
        buttonsStyling: false,
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
          Manage Coupons
        </h2>
        <button
          onClick={handleAddCoupon}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          <MdAddCircleOutline className="text-lg" /> Add Coupon
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-[#0D1117] border border-[#30363D] shadow-lg">
        <table className="min-w-full text-sm text-left text-white">
          <thead className="bg-[#161B22] text-gray-400 text-xs uppercase border-b border-[#30363D]">
            <tr>
              <th className="px-6 py-4">Coupon Code</th>
              <th className="px-6 py-4">Discount (%)</th>
              <th className="px-6 py-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {coupons?.map((coupon) => (
              <tr
                key={coupon._id}
                className="border-b border-[#30363D] hover:bg-[#1f2937]/30 transition"
              >
                <td className="px-6 py-4 font-medium text-blue-400">
                  {coupon.code}
                </td>
                <td className="px-6 py-4">{coupon.discount}%</td>
                <td className="px-6 py-4">{coupon.description}</td>
              </tr>
            ))}
            {coupons.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No coupons found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageCoupons;
