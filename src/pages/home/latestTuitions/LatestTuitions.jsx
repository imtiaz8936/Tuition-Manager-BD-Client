import { useQuery } from "@tanstack/react-query";
import { motion as Motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const LatestTuitions = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tuitions = [] } = useQuery({
    queryKey: ["latestTuitions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/latest-tuitions`);
      return res.data;
    },
  });
  return (
    <section className="py-16 bg-gray-50">
      <div className="middle px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Tuition Posts
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tuitions.map((t, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-1">{t.subject}</h3>
              <p className="text-sm text-gray-500">Class {t.class}</p>
              <p className="mt-2 text-gray-700">{t.description}</p>

              <div className="mt-4 flex justify-between text-sm">
                <span className="font-semibold">৳{t.budget}</span>
                <span className="text-green-600">Negotiable</span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestTuitions;
