import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UserTable from "./UserTable";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-users");
      return res.data;
    },
  });

  console.log(users);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Management</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-lime-500 text-white">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserTable key={user._id} user={user}></UserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
