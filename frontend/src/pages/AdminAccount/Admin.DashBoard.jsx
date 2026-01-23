import { useUserStore } from "../../store/Auth/User";

const AdminDashBoard = () => {
      const {user} = useUserStore();
  return (
    <div className="mt-20 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Total Pets</h2>
          <p className="text-gray-600">no pets</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <p className="text-gray-600">{user.length}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Total Appointments</h2>
          <p className="text-gray-600">no appointments</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Total Donations</h2>
          <p className="text-gray-600">no donations</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
