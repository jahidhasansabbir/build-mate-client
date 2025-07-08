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
      .patch(`/agreement/${id}`, { request: true, email: req.userEmail })
      .then(() => {
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReject = (id) => {
    axiosSecure
      .patch(`/agreement/${id}`, { request: false })
      .then(() => {
        refetch();
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
      className="bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 text-black flex flex-col justify-between"
    >
      <div className="flex items-center gap-4 mb-5">
        <FaUserCircle className="text-5xl text-green-500 drop-shadow-md" />
        <div>
          <h3 className="text-xl font-semibold text-green-700">{req.userName}</h3>
          <p className="text-sm text-green-400 flex items-center gap-1">
            <MdOutlineMail className="text-base" /> {req.userEmail}
          </p>
        </div>
      </div>

      <div className="text-sm space-y-3 text-black">
        <p className="flex items-center gap-2">
          <FaBuilding className="text-green-600" />
          Floor: <span className="font-semibold">{req.floorNo}</span> | Block:{" "}
          <span className="font-semibold">{req.blockName}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdMeetingRoom className="text-green-600" />
          Room: <span className="font-semibold">{req.apartmentNo}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdAttachMoney className="text-yellow-500" />
          Rent: <span className="font-semibold">{req.rent}৳</span>
        </p>
        <p className="flex items-center gap-2">
          <MdDateRange className="text-purple-500" />
          Requested: <span className="font-semibold">{formattedDate}</span>
        </p>
      </div>

      <div className="flex justify-between gap-3 mt-8">
        <button
          onClick={() => handleAccept(req._id)}
          className="flex-1 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition shadow-md shadow-green-500/50"
        >
          <FaCheckCircle className="text-lg" /> Accept
        </button>
        <button
          onClick={() => handleReject(req._id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition shadow-md shadow-red-500/50"
        >
          <FaTimesCircle className="text-lg" /> Reject
        </button>
      </div>
    </div>
  );
};

export default AgreementRequestsCard;
