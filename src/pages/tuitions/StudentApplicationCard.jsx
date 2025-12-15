import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const StudentApplicationCard = ({ application, refetch }) => {
  console.log(application);
  const axiosSecure = useAxiosSecure();
  const handlePayment = async () => {
    const paymentInfo = {
      salary: application.salary,
      email: application.email,
      student_email: application.student_email,
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

  const handleRejectApplication = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/reject-application/${application._id}`)
          .then((res) => {
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                title: "Rejected!",
                text: "Application rejected.",
                icon: "success",
              });
            }
          });
      }
    });
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
        {application.status === "Approved" ? (
          <button className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Approved & Paid
          </button>
        ) : application.status === "Rejected" ? (
          <button className="bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Rejected
          </button>
        ) : (
          <button
            onClick={handlePayment}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
          >
            Approve & Pay
          </button>
        )}

        {application.status === "Rejected" ||
          (application.status !== "Approved" && (
            <button
              onClick={handleRejectApplication}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Reject
            </button>
          ))}
      </div>
    </div>
  );
};

export default StudentApplicationCard;
