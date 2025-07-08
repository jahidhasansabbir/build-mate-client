import React from "react";
import Swal from "sweetalert2";
import { MdAddCircleOutline } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();

  const { data: coupons, isLoading, refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupons");
      return res.data;
    },
  });
  if (isLoading) return "loading...";

  const handleAddCoupon = async () => {
    const { value: formValues } = await Swal.fire({
      title: `
    <p class="text-4xl p-0 m-0 font-semibold text-green-600">
      Add New Coupon
    </p>`,
      html: `
    <div class="space-y-4 p-0 m-0 text-left overflow-hidden">
      <input
        id="code"
        class="swal2-input !w-full !bg-white/10 backdrop-blur-lg !text-black !border !border-gray-200  !rounded-lg !px-4 !py-2 !text-sm placeholder:!text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        placeholder="Coupon Code"
      />
      <input
        id="discount"
        type="number"
        class="swal2-input !w-full !bg-white/10 backdrop-blur-lg !text-black !border !border-gray-200 !rounded-lg !px-4 !py-2 !text-sm placeholder:!text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        placeholder="Discount Percentage (e.g. 20)"
      />
      <textarea
        id="description"
        rows="3"
        class="swal2-textarea !w-full !bg-white/10 backdrop-blur-lg !text-black !border !border-gray-200 !rounded-lg !px-4 !py-2 !text-sm placeholder:!text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600"
        placeholder="Write the description..."
      ></textarea>
    </div>
  `,
      background: "rgba(255 255 255 / 0.6)", // light translucent background
      customClass: {
        popup:
          "backdrop-blur-xl bg-white/10 text-black rounded-xl border border-gray-200",
        confirmButton:
          "bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition duration-200",
        cancelButton:
          "bg-gray-200 ml-4 hover:bg-gray-300 text-black px-5 py-2 rounded-lg text-sm font-medium transition duration-200",
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
      axiosSecure
        .post("/coupons", formValues)
        .then(() => {
          refetch();
        })
        .catch((err) => {
          console.log(err);
        });

      Swal.fire({
        title: '<p class="text-4xl font-semibold text-green-600">Success!</p>',
        html: '<p class="text-black">Coupon added successfully!</p>',
        icon: "success",
        background: "rgba(255 255 255 / 0.15)",
        customClass: {
          popup:
            "backdrop-blur-xl bg-white/10 text-black rounded-xl border border-gray-200",
          confirmButton:
            "bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition duration-200",
          title: "text-green-600",
          content: "text-black text-sm",
        },
        buttonsStyling: false,
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-500">
          Manage Coupons
        </h2>
        <button
          onClick={handleAddCoupon}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          <MdAddCircleOutline className="text-lg" /> Add Coupon
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white/10 backdrop-blur-lg border border-gray-200 shadow-md">
        <table className="min-w-full text-sm text-left text-black">
          <thead className="bg-green-500/10 border-b border-gray-200 text-gray-700 text-xs uppercase">
            <tr>
              <th className="px-6 py-4 font-semibold">Coupon Code</th>
              <th className="px-6 py-4 font-semibold">Discount (%)</th>
              <th className="px-6 py-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {coupons?.map((coupon) => (
              <tr
                key={coupon._id}
                className="border-b border-gray-200 hover:bg-white/20 transition"
              >
                <td className="px-6 py-4 font-medium text-green-700">
                  {coupon.code}
                </td>
                <td className="px-6 py-4">{coupon.discount}%</td>
                <td className="px-6 py-4">{coupon.description}</td>
              </tr>
            ))}
            {coupons?.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-10 text-center text-gray-600"
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
