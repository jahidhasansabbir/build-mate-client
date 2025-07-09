import {  useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ApartmentCard = ({ room }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const {
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    _id,
  } = room;

  const handleAgreement = () => {
   if (!user) {
        return navigate("/login", { state: { from: location.pathname } });
    }
    else {
      const updatedInfo = {
        userName: user?.displayName,
        userEmail: user?.email,
        floorNo,
        blockName,
        apartmentNo,
        rent,
        status: "pending",
      };
      axiosSecure
        .post("/agreement", updatedInfo)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-indigo-200 transition-shadow duration-300">
      <img
        src={apartmentImage}
        alt={`Apartment ${apartmentNo}`}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-2xl"
      />

      <div className="p-4 sm:p-6 md:p-8 text-gray-800">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          Apartment {apartmentNo}
        </h3>

        <div className="text-sm sm:text-base text-gray-600 space-y-1 mb-5 leading-relaxed">
          <p>
            <span className="font-medium text-green-500">Floor:</span> {floorNo}
          </p>
          <p>
            <span className="font-medium text-green-500">Block:</span> {blockName}
          </p>
          <p>
            <span className="font-medium text-green-500">Rent:</span> ৳{rent.toLocaleString()}
          </p>
        </div>

        <button
          onClick={handleAgreement}
          className="mt-2 w-full text-center bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base"
        >
          Agreement
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
