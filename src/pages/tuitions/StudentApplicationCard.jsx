import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const StudentApplicationCard = ({ application }) => {
  const axiosSecure = useAxiosSecure();
  const handlePayment = async () => {
    const paymentInfo = {
      salary: application.salary,
      email: application.email,
      name: application.name,
      tuitionId: application.tuitionId,
      applicationId: application._id,
    };

    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    window.location.href = res.data.url;
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 w-full hover:shadow-md transition">
      {/* Name */}
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {application.name}
      </h2>

      {/* Email */}
      <p className="text-sm text-gray-600 mb-3">{application.email}</p>

      {/* Qualifications */}
      <p className="text-gray-700 text-sm mb-2">
        <span className="font-medium">Qualifications:</span>{" "}
        {application.qualifications}
      </p>

      {/* Experience */}
      <p className="text-gray-700 text-sm mb-2">
        <span className="font-medium">Experience:</span>{" "}
        {application.experience}
      </p>

      {/* Weekly Tuition Days */}
      <p className="text-gray-700 text-sm mb-2">
        <span className="font-medium">Weekly Tuition Days:</span>{" "}
        {application.weeklyTuitionDay}
      </p>

      {/* Salary */}
      <p className="text-gray-700 font-semibold text-sm mb-2">
        Expected Salary:{" "}
        <span className="text-lime-600">৳{application.salary}</span>
      </p>

      {/* Phone */}
      <p className="text-gray-700 text-sm mb-2">
        <span className="font-medium">Phone:</span> {application.phone}
      </p>

      {/* Status */}
      <p
        className={`text-sm font-semibold mt-3 
          ${
            application.status === "Pending"
              ? "text-yellow-600"
              : application.status === "Approved"
              ? "text-green-600"
              : "text-red-600"
          }`}
      >
        Status: {application.status}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-5">
        <button
          onClick={handlePayment}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
        >
          Approve & Pay
        </button>

        <button
          // onClick={handleDeleteTuition}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default StudentApplicationCard;
