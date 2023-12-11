import { useEffect } from "react";
import useUserAuth from "../store/useUserAuth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logout } = useUserAuth((state) => ({ logout: state.logout }));
const navigate = useNavigate();
  useEffect(() => {
    logout().catch(console.error);
    navigate('/');
  }, []);
}

