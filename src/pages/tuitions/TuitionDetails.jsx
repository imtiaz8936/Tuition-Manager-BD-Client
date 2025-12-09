import React from "react";
import { Link, useLoaderData } from "react-router";
import useRole from "../../hooks/useRole";

const TuitionDetails = () => {
  const result = useLoaderData();
  const data = result;
  const { role } = useRole();
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Tuition Details
        </h2>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Detail label="Name" value={data.name} />
          <Detail label="Email" value={data.email} />
          <Detail label="Subject" value={data.subject} />
          <Detail label="Class" value={data.class} />
          <Detail label="Budget" value={data.budget + " BDT"} />
          <Detail label="Budget Condition" value={data.budgetCondition} />
          <Detail label="Phone" value={data.phone} />
          <Detail label="Status" value={data.status} />
        </div>

        {/* Full Row Description */}
        <div className="mt-4 space-y-4">
          <Detail label="Location" value={data.location} full />
          <Detail label="Description" value={data.description} full />
        </div>

        {/* Role Based Update, Delete & Apply Buttons */}
        {role === "Tutor" ? (
          <div className="mt-5">
            <Link>
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
                Apply
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
              Update
            </button>

            <button
              // onClick={handleDeleteTuition}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Detail = ({ label, value, full }) => (
  <div className={`${full ? "col-span-2" : ""}`}>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-medium text-gray-800">{value}</p>
  </div>
);

export default TuitionDetails;
