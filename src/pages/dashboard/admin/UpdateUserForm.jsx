import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateUserForm = () => {
  const { userId } = useParams();
  const { register, handleSubmit, formState: errors } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${userId}`);
      return res.data;
    },
  });
  const handleUpdate = (data) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/update-user-information/${userId}`, data)
          .then((res) => {
            if (res.data.modifiedCount) {
              refetch();
              navigate("/dashboard/manage-users");
              Swal.fire({
                title: "Updated!",
                text: "User information updated.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-10 mb-20">
      <title>Tuition-ManagerBD | User Update</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-3xl text-center mt-5">
          Update User Information
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleUpdate)}>
            <fieldset className="fieldset">
              <label className="label">User Name</label>
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
                defaultValue={user.name}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.name.message}
                </p>
              )}

              <label className="label">User Email</label>
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
                defaultValue={user.email}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}

              <label className="label">User Role</label>
              <select
                {...register("role", {
                  required: "Role is required",
                })}
                defaultValue={user.role}
                className="select"
              >
                <option value="Student">Student</option>
                <option value="Tutor">Tutor</option>
                <option value="Admin">Admin</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.role.message}
                </p>
              )}

              <label className="label">User Phone</label>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="input"
                placeholder="Enter Your Phone Number"
                defaultValue={user.phone}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.phone.message}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-neutral mt-4 text-[16px] font-semibold hover:text-black hover:bg-gray-100 transition-colors"
              >
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserForm;
