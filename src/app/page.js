import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 text-gray-900 flex flex-col">
      {/* HERO SECTION */}
      <header className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-blue-100 via-blue-50 to-transparent">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full shadow-lg mb-6 border-4 border-white"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
          Hi, I'm Your Name 👋
        </h1>
        <p className="text-lg sm:text-xl mt-2 text-gray-700">
          A passionate Web Developer & Designer
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-400 px-5 py-2 rounded-full hover:bg-blue-100 transition shadow-sm"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="max-w-3xl mx-auto py-12 px-6 text-center bg-white/70 backdrop-blur-sm rounded-xl shadow-sm my-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-800">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a web developer who loves building clean, modern, and responsive
          websites. I focus on creating user-friendly experiences using Next.js,
          React, and Tailwind CSS.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 border border-gray-100 flex flex-col"
            >
              <div className="relative h-40 w-full mb-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <Image
                  src="/next.svg"
                  alt={`Project ${project}`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg text-blue-700">
                Project {project}
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-grow">
                A short description of what this project is about and what tech
                stack was used.
              </p>
              <a
                href="#"
                className="mt-4 text-purple-700 hover:underline text-sm"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-3xl mx-auto py-12 px-6 text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md my-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-900">
          Get In Touch
        </h2>
        <p className="text-gray-700 mb-6">
          Have a project in mind or just want to say hello? Feel free to reach
          out!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:your@email.com"
            className="text-blue-700 hover:underline font-medium"
          >
            Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t text-gray-500 text-sm bg-white/80">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
