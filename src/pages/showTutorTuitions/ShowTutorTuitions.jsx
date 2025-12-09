import React from "react";
// import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TuitionCard from "../tuitions/TuitionCard";

const ShowTutorTuitions = () => {
  //   const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tuitions = [] } = useQuery({
    queryKey: ["tuitionsForTutors"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tuitions`);
      return res.data;
    },
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      tutor tuitions
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tuitions.map((tuition) => (
          <TuitionCard key={tuition._id} tuition={tuition}></TuitionCard>
        ))}
      </div>
    </div>
  );
};

export default ShowTutorTuitions;
