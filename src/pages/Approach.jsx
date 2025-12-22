import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const Approach = () => {
	const approaches = [
		{
			id: 1,
			icon: "🎯",
			label: "Clear Scope, Real Timelines",
			description:
				" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut quos placeat non sint pariatur quaerat.",
		},
		{
			id: 2,
			icon: "🔍",
			label: "Engineering You Can Inspect",
			description:
				" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut quos placeat non sint pariatur quaerat.",
		},
		{
			id: 3,
			icon: "🌍",
			label: "Global Collaboration",
			description:
				" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut quos placeat non sint pariatur quaerat.",
		},
		{
			id: 4,
			icon: "⚡",
			label: "Rapid Iteration",
			description:
				" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ut quos placeat non sint pariatur quaerat.",
		},
	];
	return (
		<div id="approach" className="px-[21px] md:px-8">
			<div className="max-w-[1400px] mx-auto pt-30 lg:pt-35">
				<div className="flex flex-col justify-center items-center ">
					<SectionHeader
						badge="OUR PROCESS"
						title="How We Build Together"
						description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Utnon magni dolorem iure quisquam ab rupu!"
					/>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 my-14 gap-14">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.2,
						}}
						viewport={{ once: true }}
					>
						<h2 className="text-[32px] font-bold mb-6 leading-[1.3] dark:text-white">
							Built for Long-Term Partnership
						</h2>
						<div className="space-y-6 leading-[1.8] text-[#475569] dark:text-[#94a3b8] text-[16px]">
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Aspernatur dolorem saepe
								officiis distinctio atque recusandae animi
								expedita, sapiente libero
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Adipisci iusto commodi
								delectus optio consequatur enim nulla eum. Ipsum
								officiis quaerat assumenda architecto quisquam!
								Vero vitae earum
							</p>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Esse suscipit mollitia
								laudantium alias. Cumque, laboriosam? Quasi sed
								natus vero aspernatur adipisci minima totam dol
							</p>
						</div>
					</motion.div>
					<ul>
						{approaches.map((approach) => (
							<motion.li
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: 0.1,
								}}
								viewport={{ once: true }}
								key={approach.id}
								className="border rounded-2xl px-6 py-8 lg:px-6 lg:py-6 flex items-start mb-6 gap-4 dark:border-[rgba(255,255,255,0.06)] hover:border-[#00d9ff] border-[rgba(15,23,42,0.08)] bg-white dark:bg-[rgba(255,255,255,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,217,255,0.3)]"
							>
								<span className="rounded-xl text-2xl p-2 bg-gray- bg-[linear-gradient(135deg,rgba(0,217,255,0.1))] ">
									{approach.icon}
								</span>
								<div>
									<h2 className="text-lg font-semibold dark:text-white">
										{approach.label}
									</h2>
									<p className="my-1 text-[15px] text-[#64748b]">
										{approach.description}
									</p>
								</div>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Approach;
