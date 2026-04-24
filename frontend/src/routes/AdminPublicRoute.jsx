import { Navigate } from "react-router-dom";

const AdminPublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  
  if (token) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default AdminPublicRoute;




// import { Navigate } from "react-router-dom";

// const AdminPublicRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   const expiry = localStorage.getItem("tokenExpiry");

//   // ✅ VALID TOKEN → REDIRECT TO ADMIN
//   if (token && expiry && Date.now() < Number(expiry)) {
//     return <Navigate to="/admin" replace />;
//   }

//   return children;
// };

// export default AdminPublicRoute;