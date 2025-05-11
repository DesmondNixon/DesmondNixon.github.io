import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
	return (
		<section id="experience" className="min-h-screen flex items-center justify-center py-20">
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent text-center">
						Work Experience
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div
							className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-500/30 
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
              transition-all
            "
						>
							<h3 id="ESDC" className="text-xl font-bold mb-2">
								Site Reliability Engineer
							</h3>
							<p className="text-white mb-4">
								Employment and Social Development Canada
								<br></br>January 2025 - May 2025
							</p>
							<p className="text-gray-400 mb-4">
								In early 2025, I interned with Employment and Social Development Canada as a Site
								Reliability Engineer, where I contributed to DevOps, Site Reliability, and Internal
								Platform Tooling efforts within a production-scale environment.
								<br></br>
								<br></br>My work focused on improving developer workflows, enhancing CI/CD pipelines,
								and supporting production operations. Some highlights include:
								<br></br>
								<br></br>
								<li>
									Improved deployment security and velocity by enhancing the secrets encryption
									pipeline and implementing Git tag/version validation and regex enforcement for pull
									requests.
								</li>
								<li>
									Supported production infrastructure and services by deploying services and hotfixes
									to Azure Red Hat OpenShift, managing certificate renewals (Entrust, 1CA), and
									reversioning schema configurations to align with platform standards.
								</li>
								<li>
									Led Grafana dashboard reviews during standups and collaborated with development
									teams to resolve deployment issues and improve system reliability.
								</li>
								<li>
									Streamlined developer onboarding by automating local setup tooling, updating
									internal documentation, and assisting in the training of new team members.
								</li>
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{[
									"Kubernetes",
									"Azure Red Hat OpenShift",
									"Terraform",
									"Ansible",
									"Azure DevOps",
									"ArgoCD",
									"Docker",
									"Grafana",
									"Python",
									"Bash",
									"Solace",
									"Jira",
								].map((tech, key) => (
									<span
										key={key}
										className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="#testimonials"
									className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
								>
									View Testimonial →
								</a>
							</div>
						</div>
						<div
							className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
						>
							<h3 className="text-xl font-bold mb-2">Software Developer</h3>
							<p className="text-white mb-4">
								Environment and Climate Change Canada
								<br></br>January 2024 - April 2024
							</p>
							<p className="text-gray-400 mb-4">
								My internship in early 2024 was with Environment and Climate Change Canada (ECCC) where
								I worked on the CITES permitting team.
								<br></br>
								<br></br>My role within this team was Software Innovation where I was tasked with
								improving, streamlining, and modernernizing several processes for the team. Some
								highlights are as follows:
								<br></br>
								<br></br>
								<li>
									Led a team in the design and implementation of innovative solutions for processing
									permit documents, utilizing advanced image processing techniques and automating
									workflows for government data systems.
								</li>
								<li>
									Spearheaded the development of a Python-based application leveraging OCR (using
									Tesseract), image processing techniques, and web scripting to scan, process, and
									upload permit applications to a centralized database, improving efficiency by 50%.{" "}
								</li>
								<li>
									Advised the CITES Scientific Authority team, providing recommendations on software
									vulnerabilities for depricated systems.{" "}
								</li>
								<li>
									Developed an internal chatbot using Microsoft's Power Automate Suite to streamline
									the tracking of physical paper permits, significantly reducing time spent on manual
									inventory checks.{" "}
								</li>
								<li>
									Drafted a public-facing chatbot prototype for ECCC's permitting website, aimed at
									automating responses to frequently asked questions, improving user engagement, and
									reducing response times for inquiries. •Provided strategic guidance to ECCC's
									internal tech team, advising on the adoption of emergent technologies and tools to
									enhance digital transformation efforts.
								</li>
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{[
									"Python",
									"OpenCV",
									"Tesseract",
									"other OCR libraries",
									"Pandas",
									"Selenium",
									"Microsoft Power Automate",
								].map((tech, key) => (
									<span
										key={key}
										className="
                      bg-yellow-500/10 text-yellow-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-yellow-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="#testimonials"
									className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
									id="jump-for-metricwire-experience"
								>
									View Testimonial →
								</a>
							</div>
						</div>

						<div
							className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
						>
							<h3 className="text-xl font-bold mb-2">Founding Software Engineer</h3>
							<p className="text-white mb-4">HUNGIE</p>
							<p className="text-gray-400 mb-4">
								Founded a startup which helps individuals with dietary restrictions better interact with
								the food in their lives Developed a mobile app consisting of 3 main aspects; An OCR
								scanner which reads and flags a list of ingredients, a community page, and a pool of
								restaurant reviews.
								<br></br>
								<br></br>
								<li>Integrated user authentication through Firebase and Google accounts</li>
								<li>Integrated Google Maps API, Google Places API, Google's ML Kit</li>
								<li>Utilised Firebase and Firestore for backend</li>
								<li>Developed the app using Dart on the Flutter Framework</li>
								<li>Presented startup idea in pitch competitions</li>
								<li>Gathered insight from Waterloo Conrad Entrepreneurs</li>
								<li>Maintained community relations through social media</li>
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{[
									"Flutter",
									"Firebase Authentication",
									"Firestore",
									"OCR libraries",
									"Google Maps API",
									"Google Places API",
								].map((tech) => (
									<span
										key={tech}
										className="
                      bg-yellow-500/10 text-yellow-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-yellow-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="https://hungie.org"
									target="_blank"
									rel="noopener noreferrer"
									className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
								>
									View Project →
								</a>
							</div>
						</div>

						<div
							className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
						>
							<h3 className="text-xl font-bold mb-2">Mobile Developer</h3>
							<p className="text-white mb-4">MetricWire</p>
							<p className="text-gray-400 mb-4">
								My first internship was with MetricWire which is a company that aims to provide a
								powerful researching tool to its clients. Some current and upcoming clients for the
								company include: the National Institute on Drug Abuse (NIDA), the National Cancer
								Institute (NCI), Public Health Ontario (PHO), Brown University, Leipzig University, and
								John Hopkins University. My role within the company was as a Mobile Developer where I:
								<br></br>
								<br></br>
								<li>
									Spearheaded the enhancement of the company's codebase by integrating Flutter in
									Android Studio, enabling seamless cross-platform mobile app development.
								</li>
								<li>
									Drove efficient data handling through JSON parsing, balancing synchronous and
									asynchronous programming methods, ensuring real-time data processing and smooth app
									performance.
								</li>
								<li>
									Owned feature page of app by integrating dynamic text fields, multimedia elements
									such as images and videos, all dynamically populated and optimized using data
									extracted from JSON via the Hive local database to increase usability and
									convenience by 300%.
								</li>
								<li>
									Championed software quality by writing and executing comprehensive unit and
									integration tests, ensuring robust functionality, and a seamless user experience
									across updates and iterations.
								</li>
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{["Flutter", "RESTful APIs", "JSON", "Hive", "Unit Testing", "Postman"].map(
									(tech, key) => (
										<span
											key={key}
											className="
                      bg-yellow-500/10 text-yellow-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-yellow-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
										>
											{tech}
										</span>
									)
								)}
							</div>
							<div className="flex justify-between items-center ">
								<a
									href="#jump-for-metricwire-testimonial"
									className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
								>
									View Testimonial →
								</a>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
