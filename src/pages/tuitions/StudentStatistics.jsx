import { FaChalkboardTeacher, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PaymentHistory from "../dashboard/payment/PaymentHistory";
import useAuth from "../../hooks/useAuth";

const StudentStatistics = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: totalPayments = {} } = useQuery({
    queryKey: ["totalPayments"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/total-payments/student?email=${user?.email}`
      );
      return res.data;
    },
  });
  const { data: stats = {} } = useQuery({
    queryKey: ["totalStatsStudent"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard-stats/student?email=${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <div>
      <div className="middle mt-12">
        {/* small cards */}
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grow">
          {/* Sales Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
            >
              <HiOutlineCurrencyBangladeshi size={40} className="text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Payments
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">
                ৳{totalPayments.totalRevenue}
              </h4>
            </div>
          </div>
          {/* Total Orders */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
            >
              <FaChalkboardTeacher size={40} className="text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Created Tuitions
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">
                {stats.createdTuitions}
              </h4>
            </div>
          </div>
          {/* Total Plants */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
            >
              <FaCheckCircle size={40} className="text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Approved Tutors
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">
                {stats.approvedTutors}
              </h4>
            </div>
          </div>
          {/* Users Card */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-linear-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
            >
              <FaFileAlt size={40} className="text-white" />
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                Total Applications
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-blue-gray-900">
                {stats.totalApplications}
              </h4>
            </div>
          </div>
        </div>

        <PaymentHistory></PaymentHistory>

        <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/*Sales Bar Chart */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            {/* Chart goes here.. */}
          </div>
          {/* Calender */}
          <div className=" relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
            {/* Calender */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStatistics;
