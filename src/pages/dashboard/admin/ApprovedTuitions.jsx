import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TuitionCardAdmin from "./TuitionCardAdmin";

const ManageTuitions = () => {
  const axiosSecure = useAxiosSecure();
  const { data: tuitions = [] } = useQuery({
    queryKey: ["approvedTuitionsForAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approved-tuitions/admin");
      return res.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <title>Tuition-ManagerBD | Approved Tuitions</title>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Approved Tuitions
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {tuitions.map((tuition) => (
          <TuitionCardAdmin
            key={tuition._id}
            tuition={tuition}
          ></TuitionCardAdmin>
        ))}
      </div>
    </div>
  );
};

export default ManageTuitions;
