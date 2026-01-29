import { create } from "zustand";
import { useUserStore } from "../Auth/User";
import { persist } from "zustand/middleware";

export const useAppointmentStore = create(persist((set) => ({
    appointments: [],
    setAppointments: (appointments) => set({ appointments }),
    createAppointment: async (newAppointment) => {
    const { accessToken } = useUserStore.getState();
   
    if ( !newAppointment.petname || !newAppointment.date || !newAppointment.time || !newAppointment.mobilenumber || !newAppointment.category || !newAppointment.reason) {
      return { success: false, message: "Please provide all fields" };
    }
    if (!accessToken) {
      return { success: false, message: "You must be logged in" };
    }
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newAppointment),
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, message: data.message || "Failed to create appointment" };
      }
      set((state) => ({
        appointments: [...state.appointments, data.data],
      }));

      return { success: true, message: "Appointment created successfully" };
    } catch (error) {
      console.error("Create appointment error:", error);
      return { success: false, message: "Something went wrong" };
    }
  },

  fetchAppointments: async () => {
    const { accessToken } = useUserStore.getState();
    if (!accessToken) return;

    try {
      const res = await fetch("/api/appointments", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await res.json();
      if (res.success) set({ appointments: data.data });
    } catch (error) {
      console.error("Fetch appointments error:", error);
    }
  },
  }),
  {
  name: "appointment-storage", 
  }
));