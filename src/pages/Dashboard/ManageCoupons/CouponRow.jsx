import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const CouponRow = ({ coupon, refetch }) => {
  const [isAvailable, setIsAvailable] = useState(coupon.available);
  const axiosSecure = useAxiosSecure();
  const handleEdit = async (coupon) => {
    const newAvailability = !isAvailable;
    setIsAvailable(newAvailability);
    axiosSecure.patch(`/coupons/${coupon._id}`, { isAvailable:newAvailability }).then(refetch);
  };

  const handleDelete = (couponId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the coupon.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/coupons/${couponId}`).then(refetch);
        Swal.fire("Deleted!", "Coupon has been removed.", "success");
      }
    });
  };
  return (
    <tr
      key={coupon._id}
      className="border-b border-gray-200 hover:bg-white/20 transition"
    >
      <td className="px-6 py-4 font-medium text-green-700">{coupon.code}</td>
      <td className="px-6 py-4">{coupon.discount}%</td>
      <td className="px-6 py-4">{coupon.description}</td>
      <td className="px-6 py-4 flex justify-center items-center gap-4">
        <button
          onClick={() => handleEdit(coupon)}
          className="text-green-600 btn hover:text-green-800"
          title="Edit"
        >
          {isAvailable ? "Available" : "Unavailable"}
        </button>
        <button
          onClick={() => handleDelete(coupon._id)}
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default CouponRow;
