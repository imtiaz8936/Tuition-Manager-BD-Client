import { motion as Motion } from "framer-motion";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-linear-to-r from-lime-500 to-green-500 text-white">
      <div className="middle px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Find the Perfect Tutor <br /> for Your Academic Success
          </h1>
          <p className="text-lg mb-6 opacity-90">
            Connect with qualified tutors or post tuition requests easily.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-lime-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Tuitions
          </Link>
        </Motion.div>

        {/* Image */}
        <Motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          src="https://illustrations.popsy.co/green/studying.svg"
          alt="hero"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
