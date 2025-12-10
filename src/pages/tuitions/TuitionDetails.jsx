import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router";
import useRole from "../../hooks/useRole";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const TuitionDetails = () => {
  const result = useLoaderData();
  const data = result;
  const { role } = useRole();
  const modalRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const openModal = () => {
    modalRef.current.showModal();
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Tuition Details
        </h2>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Detail label="Name" value={data.name} />
          <Detail label="Email" value={data.email} />
          <Detail label="Subject" value={data.subject} />
          <Detail label="Class" value={data.class} />
          <Detail label="Budget" value={data.budget + " BDT"} />
          <Detail label="Budget Condition" value={data.budgetCondition} />
          <Detail label="Phone" value={data.phone} />
          <Detail label="Status" value={data.status} />
        </div>

        {/* Full Row Description */}
        <div className="mt-4 space-y-4">
          <Detail label="Location" value={data.location} full />
          <Detail label="Description" value={data.description} full />
        </div>

        {/* Role Based Update, Delete & Apply Buttons */}
        {role === "Tutor" ? (
          <div className="mt-5">
            <Link onClick={openModal}>
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
                Apply
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
              Update
            </button>

            <button
              // onClick={handleDeleteTuition}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
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
                    htmlFor="qualifications"
                    className="block text-gray-600 font-medium mb-1"
                  >
                    Qualifications
                  </label>
                  <input
                    id="qualifications"
                    type="text"
                    placeholder="Write Your Qualifications"
                    className="w-full px-4 py-3 text-gray-800 border border-lime-300 rounded-md focus:outline-lime-500"
                    {...register("qualifications", {
                      required: "Qualifications is required",
                      maxLength: {
                        value: 30,
                        message: "Qualifications cannot exceed 30 characters",
                      },
                    })}
                  />
                  {errors.qualifications && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.qualifications.message}
                    </p>
                  )}
                </div>

                {/* Row 2: Description (L) / Location (R) -> both same height */}
                <div className="space-y-2">
                  <label
                    htmlFor="experience"
                    experienceName="block text-gray-600 font-medium mb-1"
                  >
                    Experience
                  </label>
                  <select
                    id="experience"
                    className="w-full px-4 py-3 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                    {...register("experience", {
                      required: "Experience is required",
                    })}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Your Experience
                    </option>
                    <option value="Less Than 1 Year">Less Than 1 Year</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3 Years">3 Years</option>
                    <option value="4 Years">4 Years</option>
                    <option value="5 Years">5 Years</option>
                    <option value="More Than 5 Years">More Than 5 Years</option>
                  </select>
                  {errors.experience && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.experience.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="space-y-2 mt-4">
                    <label
                      htmlFor="salary"
                      className="block text-gray-600 font-medium mb-1"
                    >
                      Expected Salary
                    </label>
                    <input
                      id="salary"
                      type="text"
                      placeholder="Enter Your Expected Salary"
                      className="w-full px-4 py-3 border border-lime-300 rounded-md focus:outline-lime-500"
                      {...register("salary", {
                        required: "Salary is required",
                        min: { value: 0, message: "Salary must be positive" },
                      })}
                    />
                    {errors.salary && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.salary.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
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
                        required: "Phone is required",
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
                  htmlFor="weeklyTuitionDay"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Weekly Tuition Day
                </label>
                <select
                  id="class"
                  className="w-full px-4 py-3 border border-lime-300 rounded-md bg-white focus:outline-lime-500"
                  {...register("weeklyTuitionDay", {
                    required: "Weekly tuition day condition is required",
                  })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Weekly Tuition Day
                  </option>
                  <option value="1 Day">1 Day</option>
                  <option value="2 Days">2 Days</option>
                  <option value="3 Days">3 Days</option>
                  <option value="4 Days">4 Days</option>
                  <option value="5 Days">5 Days</option>
                  <option value="6 Days">6 Days</option>
                  <option value="7 Days">7 Days</option>
                </select>
                {errors.weeklyTuitionDay && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.weeklyTuitionDay.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-8 py-3 text-white font-medium bg-lime-500 rounded-md shadow hover:bg-lime-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

const Detail = ({ label, value, full }) => (
  <div className={`${full ? "col-span-2" : ""}`}>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-medium text-gray-800">{value}</p>
  </div>
);

export default TuitionDetails;
