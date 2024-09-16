import { useAppSelector } from "../../redux/store"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AuthProvider = (children) => {
  const { loggedIn, account } = useAppSelector(state => state.auth)
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate('/home')
    } else {
      navigate('/login')
    }
  }, [loggedIn]);

  return (
    <></>
  )
}