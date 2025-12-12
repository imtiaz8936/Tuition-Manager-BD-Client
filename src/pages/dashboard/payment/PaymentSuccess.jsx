import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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
    <div className="text-center mt-10">
      Payment Successful
      <p className="mt-4">Transaction Id: {paymentInfo.transactionId}</p>
    </div>
  );
};

export default PaymentSuccess;
