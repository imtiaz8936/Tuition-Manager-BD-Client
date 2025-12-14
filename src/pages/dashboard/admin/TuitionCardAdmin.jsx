import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TuitionCardAdmin = ({ tuition, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleStatus = (id, status) => {
    if (status === "Approved") {
      axiosSecure
        .patch(`/update-tuition-status/admin/${id}`, { status })
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Approved!",
              text: "Tuition approved.",
              icon: "success",
            });
          }
        });
    } else {
      axiosSecure
        .patch(`/update-tuition-status/admin/${id}`, { status })
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Rejected!",
              text: "Tuition rejected.",
              icon: "success",
            });
          }
        });
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {tuition.subject}
        </h2>
        <p className="text-sm text-gray-500">
          Class {tuition.class} • Posted on{" "}
          {new Date(tuition.created_at).toLocaleString("en-BD", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-semibold">Student:</span> {tuition.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {tuition.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {tuition.phone}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {tuition.location}
        </p>
        <p>
          <span className="font-semibold">Budget:</span> ৳ {tuition.budget} (
          {tuition.budgetCondition})
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Description:</span>{" "}
          {tuition.description}
        </p>
      </div>

      {/* Status */}
      <div className="mt-4">
        <span
          className={`inline-block px-3 py-1 text-sm rounded-md font-medium ${
            tuition.status === "Approved"
              ? "bg-green-100 text-green-600"
              : tuition.status === "Rejected"
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {tuition.status}
        </span>
      </div>

      {/* Actions */}
      {tuition.status === "Pending" && (
        <div className="flex gap-3 mt-5">
          <button
            onClick={() => handleStatus(tuition._id, "Approved")}
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            <FaCheckCircle />
            Approve
          </button>

          <button
            onClick={() => handleStatus(tuition._id, "Rejected")}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            <FaTimesCircle />
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default TuitionCardAdmin;
