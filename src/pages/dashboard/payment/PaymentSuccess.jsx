import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({ transactionId: res.data.transactionId });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="flex items-center justify-center px-4 mt-20">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Transaction ID */}
        <p className="text-[16px] text-gray-600 font-semibold mb-1">
          Transaction ID
        </p>
        <h2 className="text-lg font-bold text-blue-600 mb-6">
          {paymentInfo.transactionId || "TXN-123456789"}
        </h2>

        {/* Success Icon */}
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you! Your payment has been completed successfully.
        </p>

        {/* History Button */}
        <Link
          to="/dashboard/payment-history"
          className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-200"
        >
          See Your Payment History
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
