import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TutorApplicationCard = ({ application }) => {
  const axiosSecure = useAxiosSecure();
  const { data: tuition = [] } = useQuery({
    queryKey: ["tuition", application.tuitionId],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tuition-details/${application.tuitionId}`
      );
      return res.data;
    },
  });
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      {/* Subject */}
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {tuition.subject}
      </h2>

      {/* Class */}
      <p className="text-sm text-gray-600 mb-3">
        Class: <span className="font-medium">{tuition.class}</span>
      </p>

      {/* Budget */}
      <p className="text-gray-700 font-medium mb-2">
        Budget:{" "}
        <span className="text-lime-600 font-semibold">৳{tuition.budget}</span>
      </p>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-3">{tuition.description}</p>

      {/* Location */}
      <p className="text-gray-600 text-sm mb-3">
        <span className="font-medium">Location:</span> {tuition.location}
      </p>

      {/* Contact (Static) */}
      <p className="text-gray-700 font-medium mb-1">
        Contact: <span className="text-blue-600">{tuition.phone}</span>
      </p>

      {/* Negotiable */}
      <p className="text-green-600 font-semibold text-sm">
        {application.status}
      </p>

      {/* View Details Buttons */}
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
    </div>
  );
};

export default TutorApplicationCard;
