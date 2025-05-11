import { RevealOnScroll } from "../RevealOnScroll";

export const Testimonials = () => {
	return (
		<section id="testimonials" className="min-h-screen flex items-center justify-center py-20">
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent text-center">
						{" "}
						Testimonials
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
							<h3 className="text-xl font-bold mb-2"> Site Reliability Engineer</h3>
							<p className="text-white mb-4">Employment and Social Development Canada</p>
							<p className="text-gray-400 mb-4">
								" First, an overview of the context into which Desmond was navigating... right at the
								beginning of Desmond's coop term, the ESDC - Interop OPS team was hit by a wave of
								unexpected leaves from senior staff. The situation quickly became critical as the heavy
								workload needed to be shared between just a couple of seasoned technical resources. In a
								stressful work environment, and without the ideal mentoring, Desmond was able to quickly
								step up and fill immediate gaps in the following areas:
								<br></br>
								<br></br>- Learn the overall architecture of the Interoperability platform and how to
								use the various monitoring and visibility tools. Also to analyse and adjust
								performance-related variables based on the Business requirements.
								<br></br>- Learn the review process and take on peer reviews and code approval tasks.
								<br></br>- Learn how to troubleshoot various interfaces issues and provide resolution
								tips to the dev teams.
								<br></br>
								<br></br>His excellent performance provided a much needed relief from the gap that was
								created. His performance was above expectations and very well appreciated from our
								Development partners and Management. Desmond has a bright future in IT, regardless of
								the path he chooses to follow. Good luck and i'm hoping we cross paths again in the
								future. "
							</p>

							<div className="flex justify-between items-center">
								<a
									href="#experience"
									className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
								>
									View Experience →
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
							<p className="text-white mb-4">Environment and Climate Change Canada</p>
							<p className="text-gray-400 mb-4">
								" Desmond has demonstrated that he can identify the root cause of specific issues and
								take necessary steps for his assigned projects. He has been able to work efficiently
								with limited resources and address urgent tasks by finding innovative solutions and
								implementing them. He is a good team player and works well in a collaborative
								environment. His composed approach to problems proves that he can be trusted with
								complex challenges even in stressful situations. "<br></br>
								<br></br>" Desmond has been instrumental in transforming our operational efficiency by
								automating various program aspects. His development of innovative tools and bots has
								significantly reduced manual hours required for routine processes, showcasing his
								technical proficiency. His initiatives have not only benefited our current operations
								but will continue to provide value long term.
								<br></br>Desmond consistently delivered high-quality outcomes, ensuring all projects
								reached completion with exceptional results. His methodical approach to problem-solving
								and keen attention to detail have set a high standard for quality within our team.
								Desmond's outstanding contributions this term have exceeded expectations.
								<br></br>Desmond has exceeded all performance expectations. He has helped the team
								streamline permitting procedures by creating bots to verify essential components
								associated with permit applications. He has successfully updated and fixed bugs in the
								Optical Character Recognition project. He is willing to share his technical expertise
								with his designated team and others requiring his skills. The leadership team is
								pleased, especially with his collaborative spirit. Desmond's innate kindness, calm
								demeanor, creative mindset shine through when he deals with difficult situations. "
								<br></br>
								<br></br>" Desmond has a strong desire to acquire new knowledge and technology and is
								open to any development training that can help him advance in his future career. Since
								enhancing technical and soft skills has no boundaries, he is encouraged to engage in
								networking and get involved with influential experts at the national and international
								levels. "
							</p>

							<div className="flex justify-between items-center ">
								<a
									href="#experience"
									className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
									id="jump-for-metricwire-testimonial"
								>
									View Experience →
								</a>
							</div>
						</div>

						<div
							className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-yellow-500/30 
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
              transition-all
            "
						>
							<h3 className="text-xl font-bold mb-2">Mobile Developer</h3>
							<p className="text-white mb-4">MetricWire</p>
							<p className="text-gray-400 mb-4">
								" Desmond is very good at taking on a task and distilling it down and understanding it
								by himself. He has shown improvement over the work term with learning and applying new
								frameworks. "
							</p>

							<div className="flex justify-between items-center">
								<a
									href="#jump-for-metricwire-experience"
									className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
								>
									View Experience →
								</a>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
