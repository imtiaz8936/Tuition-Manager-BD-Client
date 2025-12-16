import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TuitionCard from "./TuitionCard";

const Tuitions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Filter & Sort State
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  const {
    data: tuitions = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: ["tuitions", subject, location, sort],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tuitions?email=${user.email}`, {
        params: {
          subject,
          location,
          sort,
        },
      });
      return res.data;
    },
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* 🔍 Search & Sort Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by subject"
          className="w-full px-4 py-3 border rounded-md focus:outline-lime-500"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search by location"
          className="w-full px-4 py-3 border rounded-md focus:outline-lime-500"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          className="w-full px-4 py-3 border rounded-md bg-white focus:outline-lime-500"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="budget_asc">Budget (Low → High)</option>
          <option value="budget_desc">Budget (High → Low)</option>
          <option value="date_new">Newest First</option>
          <option value="date_old">Oldest First</option>
        </select>

        <button
          onClick={refetch}
          className="w-full py-3 bg-lime-500 text-white font-medium rounded-md hover:bg-lime-600 transition cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* ⏳ Loading State */}
      {isLoading && (
        <div className="text-center py-10 text-gray-500">
          Loading tuitions...
        </div>
      )}

      {/* ❌ Error State */}
      {isError && (
        <div className="text-center py-10 text-red-500">
          Failed to load tuitions
        </div>
      )}

      {/* 📭 Empty State */}
      {!isLoading && tuitions.length === 0 && (
        <div className="text-center py-10 text-gray-500">No tuitions found</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tuitions.map((tuition) => (
          <TuitionCard key={tuition._id} tuition={tuition}></TuitionCard>
        ))}
      </div>
    </div>
  );
};

export default Tuitions;
