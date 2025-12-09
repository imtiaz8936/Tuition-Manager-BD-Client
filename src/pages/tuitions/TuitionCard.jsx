import React from "react";
import { Link } from "react-router";

const TuitionCard = ({ tuition }) => {
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

      {/* Description */}
      <p className="text-gray-700 text-sm mb-3">{tuition.description}</p>

      {/* Negotiable */}
      <div className="flex justify-between items-center">
        <p className="text-green-600 font-semibold text-sm">
          {tuition.budgetCondition}
        </p>
        <p className="text-green-600 font-semibold text-sm">{tuition.status}</p>
      </div>

      {/* View Details Buttons */}
      <div className="mt-5">
        <Link to={`/dashboard/tuition-details/${tuition._id}`}>
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TuitionCard;
