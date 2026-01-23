import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: [],
      currentUser: null,
      setUser: (user) => set({ user }),

      // create user account
      createUser: async (newUser) => {
        if (!newUser.name || !newUser.email || !newUser.password)
          return { success: false, message: "Please provide all required fileds" };
        else if (newUser.password.length < 6)
          return { success: false, message: "Password must be at least 6 characters long" };
        else if (newUser.name.length < 3)
          return { success: false, message: "Name must be at least 3 characters long" };
        else if (!/^[\w.-]+@gmail\.com$/.test(newUser.email))
          return { success: false, message: "Please provide a valid email address" };

        const res = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        const data = await res.json();
        set((state) => ({ user: [...state.user, data.data] }));
        return { success: true, message: "Account created successfully" };
      },

      // update user account
      updateUser: async (userid, updatedUser) => {
        const res = await fetch(`/api/users/${userid}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        set((state) => ({
          user: state.user.map((u) => (u._id === userid ? data.data : u)),
          currentUser: state.currentUser?._id === userid ? data.data : state.currentUser,
        }));
        return { success: true, message: data.message };
      },

      // delete user account
      deleteUser: async (userid) => {
        const res = await fetch(`/api/users/${userid}`, { method: "DELETE" });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        set((state) => ({ user: state.user.filter((u) => u._id !== userid) }));
        return { success: true, message: data.message };
      },

      fetchUsers: async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.success) {
          set({ user: data.data }); 
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },

      // sign in to account
      signInUser: async ({ email, password }) => {
        if (!email || !password)
          return { success: false, message: "Please provide email and password" };

        const res = await fetch("/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (data.success) {
          set({ currentUser: data.user });
          return { success: true, message: "Login successfully", user: data.user };
        }
        return { success: false, message: data.message || "Login failed" };
      },

      // sign out from account
      signOutUser: () => {
        set({ currentUser: null });
        return { success: true, message: "Logout successfully" };
      },
    }),
    { name: "user-storage" }
  )
);
