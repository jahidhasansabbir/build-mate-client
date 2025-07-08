import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth"
import useAxios from "../../../hooks/useAxios";
const ApartmentCard = ({ room }) => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const axiosFetch = useAxios()
 
  const {
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    _id
  } = room;
  // console.log(user);
  const handleAgreement =()=>{
    if(!user)return navigate("/login")
    else {
      const updatedInfo = {
        userName: user?.displayName,
        userEmail: user?.email,
        floorNo,
        blockName,
        apartmentNo,
        rent,
        status: "pending",
        _id
      }
      axiosFetch.post("/agreement",updatedInfo)
      .then(data=>console.log(data))
      .catch(err=>console.log(err))
    }
  }
  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-700/30 transition-shadow duration-300">
      <img
        src={apartmentImage}
        alt={`Apartment ${apartmentNo}`}
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />

      <div className="p-4 sm:p-6 md:p-8 text-[#F3F4F6]">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          Apartment {apartmentNo}
        </h3>

        <div className="text-sm sm:text-base text-[#9CA3AF] space-y-1 mb-4">
          <p><span className="font-medium text-blue-500">Floor:</span> {floorNo}</p>
          <p><span className="font-medium text-blue-500">Block:</span> {blockName}</p>
          <p><span className="font-medium text-blue-500">Rent:</span> ৳{rent.toLocaleString()}</p>
        </div>

        <button className="mt-2 w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base" onClick={handleAgreement}>
          Agreement
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
