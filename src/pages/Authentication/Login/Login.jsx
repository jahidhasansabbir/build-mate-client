import React from "react";
import { NavLink, useNavigate } from "react-router";
import GoogleLogin from "../../shared/GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Login = () => {
  const { logInWithEmail } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
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
          .catch(() => {});
      })
      .catch((err) => errorAlert(err.message));
  };
  return (
    <div className="card bg-base-100 w-11/12 border my-10 border-base-300 max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-2xl font-bold md:text-4xl">Log in now!</h1>
        <form className="fieldset" onSubmit={handleLoginWithEmail}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input border-1"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input border-1"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className="text-center text-gray-400">or,</p>
        <GoogleLogin></GoogleLogin>
      </div>
      <p className="text-center pb-4">
        Haven't an account?{" "}
        <NavLink to="/register">
          <span className="text-blue-700 hover:underline">Register</span>
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
