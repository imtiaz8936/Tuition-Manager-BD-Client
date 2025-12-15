const WhyChooseUs = () => {
  const features = [
    "Verified Tutors",
    "Secure Payments",
    "Easy Communication",
    "Admin Approved Tuitions",
  ];

  return (
    <section className="py-16">
      <div className="middle px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-lime-50 border border-lime-200 p-6 rounded-xl text-center"
            >
              <h3 className="font-semibold text-lg">{f}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
