import React from "react";
import { FaEdit, FaTrash, FaUserShield } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserTable = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDeleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-user-account/${user._id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User account deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      {/* User Image + Name */}
      <td className="flex items-center gap-3 px-4 py-3">
        <img
          src={user.photoURL}
          className="w-10 h-10 rounded-full border"
          alt="user avatar"
        />
        <span className="font-medium text-gray-700">{user.name}</span>
      </td>

      {/* Email */}
      <td className="px-4 py-3 text-gray-600">{user.email}</td>

      {/* Role */}
      <td className="px-4 py-3">
        <span className="px-3 py-1 text-sm rounded-md bg-lime-100 text-lime-600">
          {user.role}
        </span>
      </td>

      {/* Status */}
      <td className="px-4 py-3 text-gray-600">{user.phone}</td>

      {/* Action Buttons */}
      <td className="px-4 py-3 flex justify-center gap-4 text-lg">
        <Link
          to={`/dashboard/update-user-information/${user._id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          <FaEdit />
        </Link>

        <Link
          onClick={handleDeleteUser}
          className="text-red-600 hover:text-red-800"
        >
          <FaTrash />
        </Link>
      </td>
    </tr>
  );
};

export default UserTable;
