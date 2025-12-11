import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TutorApplicationCard from "./TutorApplicationCard";
const TutorApplications = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: applications = [] } = useQuery({
    queryKey: ["tutor-applications", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-applications?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((application) => (
          <TutorApplicationCard
            key={application._id}
            application={application}
          ></TutorApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default TutorApplications;
