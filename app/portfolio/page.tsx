import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "DJ Booking Website",
    image: "/images/Dj.png",
  },
  {
    id: 2,
    title: "Business Website",
    image: "/images/Buisness.webp",
  },
  {
    id: 3,
    title: "Chimney Booking Website",
    image: "/images/Chimney.webp",
  },
  {
    id: 4,
    title: "Restaurant Website",
    image: "/images/restaurant.webp",
  },
  {
    id: 5,
    title: "Portfolio Website",
    image: "/images/portfolio.png",
  },
  {
    id: 6,
    title: "Travel Booking App",
    image: "/images/travel.webp",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-5 shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">
          CreativeStudio
        </h1>

        <div className="flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio" className="text-blue-600">
            Portfolio
          </Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* Portfolio */}

      <section className="py-20 px-10 bg-gray-100 min-h-screen">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold text-gray-800">
            Our Portfolio
          </h2>

          <p className="text-gray-600 mt-4">
            Explore some of our latest creative projects.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Project
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white text-center py-6">
        © 2026 CreativeStudio. All Rights Reserved.
      </footer>
    </>
  );
}