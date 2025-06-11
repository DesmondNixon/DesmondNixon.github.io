import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { TbSquareLetterHFilled } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import MainPic from "../../assets/MainPic.jpg";

export const Home = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative"
		>
			<RevealOnScroll>
				<div className="text-center z-10 px-4">
					<h1 className="text-5xl md:text-7xl pt-sans-regular font-bold mb-6 bg-gradient-to-r from-yellow-700 to-yellow-300 bg-clip-text text-transparent leading-right">
						Hi, I'm Desmond
					</h1>

					<div className="mx-auto w-50 h-70 rounded-full overflow-hidden relative">
						<img
							src={MainPic}
							alt="Profile"
							className="absolute top-[-10%] left-0 w-full h-auto"
						/>
					</div>

					<p className="text-gray-400 text-lg mb-8 max-w-4xl mx-auto">
						I'm a fourth-year Computer Engineering student at the
						University of Waterloo, with a passion for building
						software that solves real-world problems and creates
						meaningful impact.
						<br></br>
						<br></br>
						Feel free to explore my experiences, skills, and
						testimonials below. If you'd like to connect, drop me a
						message through the contact form - I'd love to hear from
						you.
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

				<div className="mt-6 flex justify-center space-x-6 gap-6 text-yellow-400 text-2xl">
					<a
						href="https://linkedin.com/in/desmond-nixon"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-300 transition inline-flex items-center"
					>
						<FaLinkedin /> LinkedIn
					</a>
					<a
						href="https://flowcv.com/resume/hvngiw1vw0"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-300 transition inline-flex items-center"
					>
						<IoDocumentTextOutline /> Resume
					</a>
					<a
						href="https://github.com/DesmondNixon"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-300 transition inline-flex items-center"
					>
						<FaGithub /> Github
					</a>
					<a
						href="https://hungie.org"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-300 transition inline-flex items-center"
					>
						<TbSquareLetterHFilled /> UNGIE
					</a>
				</div>
				<div className="mt-6 flex justify-center space-x-6 gap-6 text-yellow-400 text-2xl">
					<img
						src="https://flagcdn.com/us.svg"
						alt="USA"
						className="w-8 h-5"
					/>
					<img
						src="https://flagcdn.com/ca.svg"
						alt="Canada"
						className="w-8 h-5"
					/>
					<img
						src="https://flagcdn.com/ie.svg"
						alt="Ireland"
						className="w-8 h-5"
					/>
				</div>
			</RevealOnScroll>
		</section>
	);
};
