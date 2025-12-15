const HowItWorks = () => {
  const steps = [
    { title: "Post Tuition", desc: "Students post tuition requirements." },
    { title: "Find Tutor", desc: "Tutors browse & apply for jobs." },
    { title: "Start Learning", desc: "Begin lessons with confidence." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="middle px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          How the Platform Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow">
              <div className="text-3xl font-bold text-lime-500 mb-3">
                {i + 1}
              </div>
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
