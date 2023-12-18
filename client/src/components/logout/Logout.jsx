import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useUserAuth from "../../store/useUserAuth";

export default function Logout() {
  const { logout } = useUserAuth((state) => ({ logout: state.logout }));
  const navigate = useNavigate();
  useEffect(() => {
    logout().then(navigate("/")).catch(console.error);
  }, []);
}
