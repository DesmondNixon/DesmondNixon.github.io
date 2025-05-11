import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
	const languages = [
		"Bash",
		"C",
		"C++",
		"HTML/CSS",
		"Java",
		"JavaScript",
		"Kotlin",
		"Python",
		"SQL",
		"TailwindCSS",
		"TypeScript",
		"VHDL",
	];
	const tools_technologies = [
		"Ansible",
		"ArgoCD",
		"Azure DevOps",
		"Azure Red Hat OpenShift",
		"Bash",
		"Bitbucket",
		"Docker",
		"Firebase",
		"Git",
		"Google Cloud Platform",
		"Grafana",
		"Kubernetes",
		"Loki",
		"Postman",
		"Selenium",
		"Solace",
		"Terraform",
	];
	const frameworks_libraries = [
		"Flask",
		"Flutter",
		"Matplotlib",
		"MongoDB",
		"MySQL",
		"NLTK",
		"Node.js",
		"NumPy",
		"PostgreSQL",
		"React",
		"pandas",
		"pyTesseract",
		"spaCy",
	];

	return (
		<section id="about" className="min-h-screen flex items-center justify-center py-20">
			<RevealOnScroll>
				<div className="max-w-4xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent text-center">
						{" "}
						About Me
					</h2>

					<div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
						<p className="text-gray-300 mb-6 text-center">
							Over the course of my career, I have developed a strong foundation in the following:
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
							<div className="rounded-xl p-1 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">Languages</h3>
								<div className="flex flex-wrap gap-2">
									{languages.map((tech, key) => (
										<span
											key={key}
											className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="rounded-xl p-1 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
								<div className="flex flex-wrap gap-2">
									{tools_technologies.map((tech, key) => (
										<span
											key={key}
											className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="rounded-xl p-1 hover:-translate-y-1 transition-all">
								<h3 className="text-xl font-bold mb-4">Frameworks & Libraries</h3>
								<div className="flex flex-wrap gap-2">
									{frameworks_libraries.map((tech, key) => (
										<span
											key={key}
											className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
							<div className="space-y-4 text-gray-300">
								<div>
									<h4 className="font-bold">
										Candidate for Bachelor of Applied Science in Computer Engineering
									</h4>
									<p>- University of Waterloo (2021 - 2026)</p>
								</div>

								<div>
									<h4 className="font-bold">Relevant Coursework</h4>
									<p>
										- Software Design and Architecture, Reinforcement Learning, Database Systems,
										Real-Time Operating Systems, Discrete Math & Logic, Algorithms & Data
										Structures, Systems Program & Concurrency, Numerical Methods
									</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
							<div className="space-y-4 text-gray-300">
								<div>
									Just finished up a co-op term at Employment and Social Development Canada (ESDC) as
									a Site Reliability Engineer. To see more about this experience and my other work
									experiences, please check out my <strong>Experiences</strong> section.
								</div>

								<div className="flex justify-between items-center">
									<a
										href="#experience"
										className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
									>
										View Work Experience →
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
