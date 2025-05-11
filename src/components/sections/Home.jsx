import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-700 to-yellow-300 bg-clip-text text-transparent leading-right">
            Hi, I'm Desmond
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a fourth-year Computer Engineering student at the University of Waterloo, with a passion for building software that solves real-world problems and creates meaningful impact.
            <br></br>
            <br></br>
            Feel free to explore my experience, skills, and testimonials below. If you'd like to connect, just drop me a message through the contact form—I'd love to hear from you.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#testimonials"
              className="border border-yellow-500/70 bg-yellow-500 text-black py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-yellow-500/10 hover:text-yellow-500"
            >
              Explore Portfolio
            </a>

            <a
              href="#contact"
              className="border border-yellow-500/70 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-yellow-600/90 hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
