import React from "react";
import {
  FaUserCircle,
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import {
  MdOutlineMail,
  MdMeetingRoom,
  MdAttachMoney,
  MdDateRange,
} from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AgreementRequestsCard = ({ req, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleAccept = (id) => {
    axiosSecure
      .patch(`/agreement/${id}`, { request: true, email: req.userEmail})
      .then((res) => {
        console.log(res.data);
        refetch()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReject = (id) => {
    axiosSecure
      .patch(`/agreement/${id}`, { request: false})
      .then((res) => {
        console.log(res.data);
        refetch()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const date = new Date(req.requestedDate);

  const formattedDate = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;

  return (
    <div
      key={req._id}
      className="bg-gradient-to-br from-[#0d1117] to-[#1f2937] border border-[#30363D] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 text-white"
    >
      <div className="flex items-center gap-4 mb-4">
        <FaUserCircle className="text-4xl text-blue-500" />
        <div>
          <h3 className="text-lg font-semibold">{req.userName}</h3>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            <MdOutlineMail className="text-base" /> {req.userEmail}
          </p>
        </div>
      </div>

      <div className="text-sm space-y-2 text-gray-300">
        <p className="flex items-center gap-2">
          <FaBuilding className="text-blue-400" />
          Floor: <span className="text-white font-medium">{req.floorNo}</span> |
          Block: <span className="text-white font-medium">{req.blockName}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdMeetingRoom className="text-green-400" />
          Room:{" "}
          <span className="text-white font-medium">{req.apartmentNo}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdAttachMoney className="text-yellow-400" />
          Rent: <span className="text-white font-medium">{req.rent}৳</span>
        </p>
        <p className="flex items-center gap-2">
          <MdDateRange className="text-purple-400" />
          Requested:{" "}
          <span className="text-white font-medium">{formattedDate}</span>
        </p>
      </div>

      <div className="flex justify-between gap-2 mt-6">
        <button
          onClick={() => handleAccept(req._id)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 font-medium transition"
        >
          <FaCheckCircle /> Accept
        </button>
        <button
          onClick={() => handleReject(req._id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 font-medium transition"
        >
          <FaTimesCircle /> Reject
        </button>
      </div>
    </div>
  );
};

export default AgreementRequestsCard;
