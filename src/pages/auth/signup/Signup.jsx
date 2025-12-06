import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../utils";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const { name } = useAuth();
  console.log(name);

  const handleSignup = async (data) => {
    const { name, image, email, password } = data;
    console.log({ name, image, email, password });
    const imageFile = image[0];
    const photo = await imageUpload(imageFile);
    console.log(photo);
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-10 mb-20">
      <title>Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-3xl text-center mt-5">Sign Up Here</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignup)}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 20,
                    message: "Name cannot exceed 20 characters",
                  },
                })}
                className="input"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.name.message}
                </p>
              )}

              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
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

              <label className="label">Profile Image</label>
              <input
                type="file"
                {...register("image", { required: "Image is required" })}
                className="file-input"
              />
              {errors.image && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.image.message}
                </p>
              )}

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
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
                <p className="flex flex-inline gap-4 font-semibold text-[14px]">
                  Already have an account?
                  <Link to="/auth-login" className="text-red-500 underline">
                    Login
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="btn btn-neutral mt-4 text-[16px] font-semibold hover:text-black hover:bg-gray-100 transition-colors"
              >
                Sign Up
              </button>
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

export default Signup;
