import { useUserStore } from "../../store/Auth/User.js";
import { useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import EditUserModal from "../../components/EditUser.jsx";


const UserAccount = () => {
  const { currentUser, signOutUser } = useUserStore();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    const { success, message } = signOutUser();
    if (success) {
      toast.success(message);
    }
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen">
      <button
        onClick={handleSignOut}
        type="button"
        className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400"
      >
        Sign Out
      </button>
      <h2 className="mt-5 text-center text-3xl/9 font-bold tracking-tight text-black">
        Welcome {currentUser?.name}
      </h2>
      <div className="flex flex-col  sm:flex-row gap-6 lg:ml-30 lg:mt-7 sm:ml-20 ">
        <div
          onClick={() => setIsOpen(true)}
          class="sm:mt-10 mt-4 ml-6  border-2 border-[black] bg-white p-6 rounded-lg shadow-md w-90 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">  
            <h3 class="font-bold text-xl mb-2 text-gray-800 text-center">Account Details</h3>
        </div>
        <div class="sm:mt-10 mt-4 ml-6 border-2 border-[black] bg-white p-6 rounded-lg shadow-md w-90 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 class="font-bold text-xl mb-2 text-gray-800 text-center">Appointments</h3>
        </div>
        <div class="sm:mt-10 mt-4 ml-6 border-2 border-[black] bg-white p-6 rounded-lg shadow-md w-90 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 class="font-bold text-xl mb-2 text-gray-800 text-center">Donations</h3>
        </div>
      </div>
      <div className="flex flex-col  sm:flex-row gap-6 mt-6 lg:ml-30 sm:ml-20  ">
        <div class="sm:mt-10 mt-4 ml-6 border-2 border-[black] bg-white p-6 rounded-lg shadow-md w-90 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 class="font-bold text-xl mb-2 text-gray-800 text-center">Adoptions</h3>
        </div>
        <div class="sm:mt-10 mt-4 ml-6 border-2 border-[black] bg-white p-6 rounded-lg shadow-md w-90 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 class="font-bold text-xl mb-2 text-gray-800 text-center">Pet Details</h3>
        </div>
         <div class="sm:mt-10 mt-4 ml-6 border-2 border-[black] bg-white p-6 rounded-lg shadow-md w-90 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 class="font-bold text-xl mb-2 text-gray-800 text-center">Settings</h3>
        </div>
      </div>
      <EditUserModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        currentUser={currentUser}
      />
    </div>
  );
};
export default UserAccount;
