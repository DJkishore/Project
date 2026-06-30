import Navbar from "@/Components/Navbar";
import {FaLaptopCode,FaPalette,FaBullhorn,FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPalette className="cards" />,
    title: "UI/UX Design",
    description:
      "We create modern, user-friendly interfaces that provide outstanding user experiences.",
  },
  {
    icon: <FaLaptopCode className="cards" />,
    title: "Web Development",
    description:
      "Responsive and high-performance websites built using the latest technologies.",
  },
  {
    icon: <FaBullhorn className="cards" />,
    title: "Digital Marketing",
    description:
      "Increase your online visibility with SEO, social media, and marketing campaigns.",
  },
  {
    icon: <FaMobileAlt className="cards" />,
    title: "Branding",
    description:
      "Build a memorable brand identity with creative logos, colors, and design strategies.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-gray-800">
              Our Services
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              We provide innovative digital solutions to help businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-center mb-5">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600">
                  {service.description}
                </p>

                <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}