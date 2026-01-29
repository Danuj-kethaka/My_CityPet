import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdminAppointmentPage = () => {
   return(
    <div className="mt-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="p-5 bg-white shadow rounded-lg">
        <h1 className="text-2xl font-bold mb-6">All Appointments</h1>
      
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pet Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Owner nb
                  </th>
                </tr>
              </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <button
                            className="text-blue-600 hover:text-blue-900 mr-2">
                            <FaRegEdit size={20} />
                            </button>
                            <button
                            className="text-red-600 hover:text-red-900">
                            <MdDelete size={22} />
                            </button>
                        </td>
                    </tr>
             </tbody>
            </table>
        </div>
    </div>
</div>
   )
};

export default AdminAppointmentPage;