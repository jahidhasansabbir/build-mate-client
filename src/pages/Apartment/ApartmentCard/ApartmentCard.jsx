import {  useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApartmentCard = ({ room , role}) => {
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
 const errorAlert = (msg) => {
  Swal.fire({
    title: "Action Denied",
    text: `${msg}`,
    icon: "warning",
    iconColor: "#f87171", 
    confirmButtonText: "Got it",
    confirmButtonColor: "#10b981", 
    background: "#fefefe",
    customClass: {
      popup: "rounded-xl shadow-lg",
      title: "text-lg font-semibold",
      confirmButton: "px-5 py-2 rounded-md text-white",
    },
  });
};
const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Agreement submitted!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleAgreement = () => {
   if (!user) {
        return navigate("/login", { state: { from: location.pathname } });
    }
    else if(role==='member'){
      return errorAlert('You have already submitted an agreement for this apartment.');
    }
    else if(role === 'admin'){
      return errorAlert('You are an admin.')
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
        .then((res) => {if(res.data.message){errorAlert(res.data.message);}
      else{
        sweetAlert();
      }})
        .catch(() => {});
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
          {apartmentNo}
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
