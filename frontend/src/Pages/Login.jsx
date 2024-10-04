// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { Link, useNavigate, Navigate } from "react-router-dom";

// const Login = () => {
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const navigateTo = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios
//         .post(
//           "http://localhost:4000/api/v1/user/login",
//           { email, password, confirmPassword, role: "Patient" },
//           {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//           }
//         )
//         .then((res) => {
//           toast.success(res.data.message);
//           setIsAuthenticated(true);
//           navigateTo("/");
//           setEmail("");
//           setPassword("");
//           setConfirmPassword("");
//         });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <>
//       <div className="container form-component login-form">
//       <h2>Sign In</h2>
// <h3>Welcome to CUREMATE Healthcare!</h3>
// <h4>Please log in to access your healthcare services.</h4>
// <p>
//     At CUREMATE Healthcare, we are dedicated to providing seamless healthcare solutions tailored to your needs. Your health and well-being are our top priorities, and we are here to support you every step of the way.
// </p>

//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <div
//             style={{
//               gap: "10px",
//               justifyContent: "flex-end",
//               flexDirection: "row",
//             }}
//           >
//             <p style={{ marginBottom: 0 }}>Not Registered?</p>
//             <Link
//               to={"/register"}
//               style={{ textDecoration: "none", color: "#271776ca" }}
//             >
//               Register Now
//             </Link>
//           </div>
//           <div style={{ justifyContent: "center", alignItems: "center" }}>
//             <button type="submit">Login</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;


import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/login",
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <h3 style={{ marginBottom: "10px" }}>Welcome to CUREMATE Healthcare!</h3>
        <h4>Please log in to access your healthcare services.</h4>
        <p>
          At CUREMATE Healthcare, we are dedicated to providing seamless healthcare solutions tailored to your needs. Your health and well-being are our top priorities, and we are here to support you every step of the way.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
