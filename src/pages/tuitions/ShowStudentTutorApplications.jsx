import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import StudentApplicationCard from "./StudentApplicationCard";

const ShowStudentTutorapplications = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: applications = [] } = useQuery({
    queryKey: ["tuition-applications", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tuition-applications?email=${user.email}`
      );
      return res.data;
    },
  });
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((application) => (
          <StudentApplicationCard
            key={application._id}
            application={application}
          ></StudentApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default ShowStudentTutorapplications;
