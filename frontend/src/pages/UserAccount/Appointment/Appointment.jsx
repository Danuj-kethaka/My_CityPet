import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppointmentStore } from "../../../store/Appointment/Appointment.js";
import { create } from "zustand";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useUserStore } from "../../../store/Auth/User.js";

const AppointmentPage = () => {
  const [newAppointment,setnewAppointment] = useState({
    petname: "",
    date: "",
    time: "",
    mobilenumber: "",
    category: "",
    reason: "",
  });
  const {createAppointment,fetchAppointments,appointments} = useAppointmentStore();
  const handleAddAppointment = async () => {
    const {success,message} = await createAppointment(newAppointment);
    if(success){
      toast.success(message);
      setnewAppointment({petname: "", date: "",time: "",mobilenumber: "",category: "",reason: ""})
    }
    else{
      toast.error(message);
    }}
    const { accessToken } = useUserStore.getState();
      useEffect(() => {
    if (accessToken) fetchAppointments();
    }, [accessToken]);

  return (
    <div>
      {(appointments.length === 0 &&
        <h1>no appointment found</h1>
      )}
      <div class="flex items-start justify-between p-5 border-b rounded-t">
        <h3 class="text-xl font-semibold">Book Appointment</h3>
      </div>
      <div class="p-6 space-y-6">
        <form action="#">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Pet Name
              </label>
              <input
                type="text" 
                name="name"  
                value={newAppointment.petname}
                onChange={(e) => setnewAppointment({...newAppointment,petname: e.target.value})}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="category"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Category
              </label>
              <input
                type="text" 
                name="category"
                value={newAppointment.category}
                onChange={(e) => setnewAppointment({...newAppointment,category: e.target.value})}      
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="brand"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Date
              </label>
              <input
                type="date"   
                 value={newAppointment.date}
                onChange={(e) => setnewAppointment({...newAppointment,date: e.target.value})}            
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="price"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Time
              </label>
              <input
                type="time"  
                value={newAppointment.time}
                onChange={(e) => setnewAppointment({...newAppointment,time: e.target.value})}              
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="price"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Mobile Number
              </label>
              <input
                type="search" 
                value={newAppointment.mobilenumber}
                onChange={(e) => setnewAppointment({...newAppointment,mobilenumber: e.target.value})}               
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              />
            </div>
            <div class="col-span-full">
              <label
                for="product-details"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Reason
              </label>
              <textarea
                id="product-details"
                rows="6"
                value={newAppointment.reason}
                onChange={(e) => setnewAppointment({...newAppointment,reason: e.target.value})}   
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

      <div class="p-6 border-t border-gray-200 rounded-b">
        <button onClick={handleAddAppointment}
          class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentPage;
