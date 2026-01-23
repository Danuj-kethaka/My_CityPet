import { useState } from "react";
import { useUserStore } from "../store/Auth/User";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditUserModal = ({ isOpen, onClose, currentUser }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const [updatedUser, setUpdateduser] = useState(currentUser);
  const { updateUser, deleteUser } = useUserStore();
  const handleUpdateUser = async (userid, updatedUser) => {
    const { success, message } = await updateUser(userid, updatedUser);
    if (success) {
      toast.success(message || "Account updated successfully");
    } else {
      toast.error(message || "Failed to update");
    }
  };

  const handleDeleteUser = async (userid) => {
    const { success, message } = await deleteUser(userid);
    if (success) {
      toast.success(message);
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg relative">
        <div className="flex items-center justify-between p-5 border-b">
          <h3 class="text-xl font-semibold">Edit User Details</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
            onClick={onClose}
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-6">
          <form action="#">
            <div class="grid grid-cols-1 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={(e) =>
                    setUpdateduser({ ...updatedUser, name: e.target.value })
                  }
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={updatedUser.email}
                  onChange={(e) =>
                    setUpdateduser({ ...updatedUser, email: e.target.value })
                  }
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="p-6 border-t border-gray-200 rounded-b">
          <button
            class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            onClick={() => handleUpdateUser(currentUser._id, updatedUser)}
          >
            Update
          </button>
          <button
            class="ml-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            onClick={() => handleDeleteUser(currentUser._id)}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
