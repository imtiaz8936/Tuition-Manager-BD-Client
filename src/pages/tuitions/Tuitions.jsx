import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import TuitionCard from "./TuitionCard";

const Tuitions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tuitions = [] } = useQuery({
    queryKey: ["tuitions", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tuitions?email=${user.email}`);
      return res.data;
    },
  });

  console.log(tuitions);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tuitions.map((tuition) => (
          <TuitionCard key={tuition._id} tuition={tuition}></TuitionCard>
        ))}
      </div>
    </div>
  );
};

export default Tuitions;
