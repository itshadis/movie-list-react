import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoute = () => {
  const { user } = useSelector(state => state.userReducer);
  
  return user.isLogin ? <Outlet /> : <Navigate to={'/unauthorized'} />
}

export default ProtectedRoute;