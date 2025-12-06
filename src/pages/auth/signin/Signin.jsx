import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const { signIn, setUser } = useAuth();
  const navigate = useNavigate();
  const handleSignin = async (data) => {
    const { email, password } = data;

    await signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "SignIn Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-10 mb-20">
      <title>Tuition-ManagerBD | Sign In</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-3xl text-center mt-5">
          Sign In Your Account
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignin)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "This field is required",
                  maxLength: {
                    value: 30,
                    message: "Email cannot exceed 30 characters",
                  },
                  pattern: {
                    value: /@/,
                    message: "Email must contain an @ symbol",
                  },
                })}
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                      message:
                        "Password must contain one uppercase, one lowercase letter and one special character",
                    },
                  })}
                  className="input"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-6 top-7 cursor-pointer z-50"
                >
                  {show ? <IoEyeOff size={20} /> : <FaEye size={20} />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.password.message}
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral rounded-md mt-4 text-[16px] font-semibold hover:text-black hover:bg-gray-100 transition-colors"
              >
                Sign In
              </button>
              <p className="flex flex-inline gap-3 font-semibold text-[14px] mt-2">
                Don't have an account?
                <Link to="/signup" className="text-red-500 underline">
                  Sign Up
                </Link>
              </p>
            </fieldset>
          </form>
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-blue-700"></div>
            <span className="text-[16px] text-blue-700">or continue with</span>
            <div className="h-px w-16 bg-blue-700"></div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-3 btn btn-neutral mt-2 text-[16px] px-5 py-2 rounded-md w-full font-semibold hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {/* <FcGoogle size={20}></FcGoogle> Google */} Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
