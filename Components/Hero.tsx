export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Build Amazing
            <br />
            Digital Experiences
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            We help startups and businesses build beautiful websites,
            modern applications and unforgettable brands.
          </p>

          <div className="mt-8 flex gap-5">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get Started
            </button>

            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              View Work
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Creative Agency"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}