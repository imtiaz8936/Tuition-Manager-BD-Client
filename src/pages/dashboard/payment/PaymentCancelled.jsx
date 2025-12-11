import React from "react";
import { Link } from "react-router";
import { FaTimesCircle } from "react-icons/fa";

const PaymentCancelled = () => {
  return (
    <div className="flex items-center justify-center px-4 mt-20">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Icon */}
        <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4" />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Cancelled
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your payment could not be completed. You may try the process again
          anytime.
        </p>

        {/* Try Again Button */}
        <Link
          to="/dashboard/tutor-applications"
          className="block w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-200"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancelled;
