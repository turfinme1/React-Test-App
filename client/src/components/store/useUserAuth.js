import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as authService from "../../services/authService";

const useUserAuth = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      userData: {},
      accessToken: "",

      register: async (useData) => {
        const user = await authService.register(useData);

        set(() => ({
          userData: user,
          accessToken: user.accessToken,
          isAuthenticated: true,
        }));
      },

      login: async (userData) => {
        const user = await authService.login(userData);

        set(() => ({
          userData: user,
          accessToken: user.accessToken,
          isAuthenticated: true,
        }));
      },

      logout: async () => {
        await authService.logout();
        set(() => ({
          isAuthenticated: false,
          userData: {},
          accessToken: "",
        }));
      },
    }),
    {
      name: "authData",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ accessToken: state.accessToken }),
    }
  )
);

export default useUserAuth;
