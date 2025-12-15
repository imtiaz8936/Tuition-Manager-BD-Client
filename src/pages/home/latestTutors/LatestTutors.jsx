import { useQuery } from "@tanstack/react-query";
import { motion as Motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const LatestTutors = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tutors = [] } = useQuery({
    queryKey: ["latestTutors"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/latest-tutors`);
      return res.data;
    },
  });
  return (
    <section className="py-16">
      <div className="middle px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Tutors</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, i) => (
            <Motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow rounded-xl p-6 text-center"
            >
              <img
                src={tutor.photoURL}
                alt=""
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg">{tutor.name}</h3>
              <p className="text-sm text-gray-500">
                Electrical & Electronics Engineer
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestTutors;
