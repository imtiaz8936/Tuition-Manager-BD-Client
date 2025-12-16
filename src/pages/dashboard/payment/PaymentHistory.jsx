import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { role } = useRole();

  const { data: payments = [] } = useQuery({
    queryKey: ["paymentHistory", user.email],
    queryFn: async () => {
      if (role !== "Admin") {
        const res = await axiosSecure.get(
          `/payment-history?email=${user.email}&role=${role}`
        );
        return res.data;
      } else {
        const res = await axiosSecure.get("/payment-history");
        return res.data;
      }
    },
  });

  console.log(payments);

  return (
    <div className={`${role !== "Admin" && "middle"} my-10`}>
      <h2 className="text-4xl mb-6">Payment History: {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              {role === "Tutor" ? <th>Payer Email</th> : <th>Payee Name</th>}
              {role === "Admin" && <th>Payer Email</th>}
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                {role === "Tutor" ? (
                  <td>{payment.payer_email}</td>
                ) : (
                  <td>{payment.payee_name}</td>
                )}
                {role === "Admin" && <td>{payment.payer_email}</td>}
                <td>৳ {payment.amount}</td>
                <td>
                  {new Date(payment.paidAt).toLocaleString("en-BD", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
