import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as authService from "../services/authService";

const storageState = JSON.parse(localStorage.getItem("authData"));

const initialToken = () => {
  if (storageState?.state.accessToken) {
    return storageState.state.accessToken;
  } else {
    return "";
  }
};

const initialUserData = () => {
  if (storageState?.state.userData) {
    return storageState.state.userData;
  } else {
    return {};
  }
};

const initialIsAuthenticated = () => {
  return storageState?.state.isAuthenticated;
};

const useUserAuth = create(
  persist(
    (set) => ({
      isAuthenticated: initialIsAuthenticated(),
      accessToken: initialToken(),
      userData: initialUserData(),

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
      partialize: (state) => ({
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
        userData : {_id: state.userData._id, username:state.userData.username}
      }),
    }
  )
);

export default useUserAuth;
