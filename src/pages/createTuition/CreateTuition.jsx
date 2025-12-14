import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CreateTuition = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    data.budget = Number(data.budget);
    axiosSecure
      .post("/create-tuition", data)
      .then((res) => console.log(res.data));
    Swal.fire({
      icon: "success",
      title: "Tuition Posted Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    reset();
    navigate("/dashboard/tuitions");
  };
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex justify-center items-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl bg-white p-6 md:p-10 rounded-xl shadow-md"
      >
        {/* grid: 2 columns on lg and above, 1 column on small screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Row 1: Subject (L) / Class (R) */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              disabled={true}
              value={user.email}
              className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md focus:outline-lime-500 cursor-not-allowed"
              {...register("email")}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              disabled={true}
              value={user.displayName}
              className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md focus:outline-lime-500 cursor-not-allowed"
              {...register("name")}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="block text-gray-600 font-medium mb-1"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject Name"
              className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md focus:outline-lime-500"
              {...register("subject", {
                required: "Subject is required",
                maxLength: {
                  value: 20,
                  message: "Subject cannot be too long",
                },
              })}
            />
            {errors.subject && (
              <p className="text-xs text-red-500 mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Row 2: Description (L) / Location (R) -> both same height */}
          <div className="space-y-2">
            <label
              htmlFor="class"
              className="block text-gray-600 font-medium mb-1"
            >
              Class
            </label>
            <select
              id="class"
              className="w-full px-4 py-3 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
              {...register("class", { required: "Class is required" })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Your Class
              </option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            {errors.class && (
              <p className="text-xs text-red-500 mt-1">
                {errors.class.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Write a simple tuition description here..."
              className="w-full h-40 px-4 py-3 rounded-md border border-lime-300 focus:outline-lime-500 resize-y"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-xs text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}

            <div className="space-y-2 mt-4">
              <label
                htmlFor="budget"
                className="block text-gray-600 font-medium mb-1"
              >
                Budget
              </label>
              <input
                id="budget"
                type="text"
                placeholder="Enter Your Budget"
                className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                {...register("budget", {
                  required: "Budget is required",
                  min: { value: 0, message: "Budget must be positive" },
                })}
              />
              {errors.budget && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.budget.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="location"
              className="block text-gray-600 font-medium mb-1"
            >
              Location
            </label>
            <textarea
              id="location"
              placeholder="Write about your location here..."
              className="w-full h-40 px-4 py-3 rounded-md border border-lime-300 focus:outline-lime-500 resize-y"
              {...register("location", { required: "Location is required" })}
            />
            {errors.location && (
              <p className="text-xs text-red-500 mt-1">
                {errors.location.message}
              </p>
            )}

            <div className="space-y-2 mt-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 font-medium mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 11,
                    message: "Phone number cannot less than 11 digits",
                  },
                  maxLength: {
                    value: 11,
                    message: "Phone number cannot more than 11 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Budget Condition */}
        <div className="space-y-2 mt-8">
          <label
            htmlFor="budgetCondition"
            className="block text-gray-600 font-medium mb-1"
          >
            Budget Condition
          </label>
          <select
            id="class"
            className="w-full px-4 py-3 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
            {...register("budgetCondition", {
              required: "Budget condition is required",
            })}
            defaultValue=""
          >
            <option value="" disabled>
              Select Budget Condition
            </option>

            <option value="Negotiable">Negotiable</option>
            <option value="Non-Negotiable">Non-Negotiable</option>
          </select>
          {errors.budgetCondition && (
            <p className="text-xs text-red-500 mt-1">
              {errors.budgetCondition.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-8 py-3 text-white font-medium bg-lime-500 rounded-md shadow hover:bg-lime-600 transition"
        >
          Post Tuition
        </button>
      </form>
    </div>
  );
};

export default CreateTuition;
