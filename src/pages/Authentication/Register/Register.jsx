import React, { useState } from 'react';
import GoogleLogin from '../../shared/GoogleLogin/GoogleLogin';
import { NavLink,  useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {
  const { registerWithEmail, updateUserProfile } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate( '/');
  };

  const errorAlert = (msg) => {
    Swal.fire({
      title: "Error!",
      text: `${msg}`,
      icon: "error",
      showConfirmButton: true,
    });
  };

  const handleSignUpWithEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const profileInfo = { name, photoUrl };

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    } else if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    } else {
      registerWithEmail(email, password)
        .then(() => {
          updateUserProfile(profileInfo).then(() => {
           
            sweetAlert();
          });
           const userData = {
              name,
              email,
              photoURL: photoUrl,
            };axiosSecure.post('/users', userData).then(() => {}).catch((err) => errorAlert(err.message));
        })
        .catch((err) => errorAlert(err.message));
    }
  };

  return (
    <div className="card bg-white w-11/12 my-8 border border-gray-200 max-w-sm shrink-0 shadow-xl mx-auto rounded-lg">
      <div className="card-body space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl text-center text-indigo-600">
          Register now!
        </h1>
        <form onSubmit={handleSignUpWithEmail} className="fieldset space-y-3">
          <label className="label text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="input rounded-lg input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            placeholder="Name"
          />

          <label className="label text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="input rounded-lg input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            placeholder="Email"
          />

          <label className="label text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="input rounded-lg input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            placeholder="Password"
          />

          <label className="label text-gray-700 font-medium">Photo</label>
          <input
            type="text"
            name="photoUrl"
            className="input rounded-lg input-bordered w-full border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            placeholder="Photo URL"
          />

          <div>
            <a className="link link-hover text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <p className="text-red-600 text-sm">{error}</p>

          <button className="btn rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white w-full font-semibold mt-2 transition-all">
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">or</p>
        <GoogleLogin />
      </div>

      <p className="text-center pb-4 text-gray-600 text-sm">
        Already have an account?{" "}
        <NavLink to="/login">
          <span className="text-indigo-600  hover:underline font-medium">
            Log in
          </span>
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
