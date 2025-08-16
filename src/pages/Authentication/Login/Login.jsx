import React from "react";
import { NavLink,  useLocation, useNavigate } from "react-router";
import GoogleLogin from "../../shared/GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Login = () => {
  const { logInWithEmail } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const location = useLocation()
  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(location.state?.from || '/');
  };

  const errorAlert = (msg) => {
    Swal.fire({
      title: "Error!",
      text: `${msg}`,
      icon: "error",
      showConfirmButton: true,
    });
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInWithEmail(email, password)
      .then((data) => {
        
        sweetAlert();
        const userData = {
          name: data?.user?.displayName,
          email: data?.user?.email,
          photoURL: data?.user?.photoURL,
        };
        axiosSecure
          .post("/users", userData)
          .then(() => {})
          .catch((err) => errorAlert(err.message));
      })
      .catch((err) => errorAlert(err.message));
  };

  return (
    <div className="card bg-white w-11/12 border my-10 border-gray-200 max-w-sm shrink-0 shadow-xl mx-auto rounded-2xl">
      <div className="card-body space-y-4">
        <h1 className="text-3xl text-indigo-600 font-bold md:text-4xl text-center">
          Log in now!
        </h1>
        <form className="fieldset space-y-3" onSubmit={handleLoginWithEmail}>
          <label className="label text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            placeholder="Email"
          />
          <label className="label text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full font-semibold mt-4 transition-all">
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm">or</p>
        <GoogleLogin />
      </div>
      <p className="text-center pb-4 text-gray-600 text-sm">
        Haven't an account?{" "}
        <NavLink to="/register">
          <span className="text-indigo-600 hover:underline font-medium">
            Register
          </span>
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
