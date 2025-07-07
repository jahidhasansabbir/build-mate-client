import React from 'react';
import GoogleLogin from '../../shared/GoogleLogin/GoogleLogin';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-11/12 my-8 border border-base-300 max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-2xl font-bold md:text-4xl">Register now!</h1>
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input border-1" placeholder="Name" />
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
          <label className="label">Photo</label>
          <input
            type="text"
            name="photoUrl"
            className="input border-1"
            placeholder="PhotoURL"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p className="text-center text-gray-400">or,</p>
        <GoogleLogin></GoogleLogin>
      </div>
      <p className="text-center pb-4">
        Already have an account?{" "}
        <NavLink to="/login">
          <span className="text-blue-700 hover:underline">Log in</span>
        </NavLink>
      </p>
    </div>
    );
};

export default Register;