import Button from "../components/Button";
import dots from "../assets/images/three dots.png";
import { motion } from "framer-motion";

const Home = () => {
	const features = [
		{ id: 1, label: "1+ year building digital products" },
		{ id: 2, label: "cloud-native approach" },
		{ id: 3, label: "Global collaboration" },
	];
	const stacks = [
		{ id: 1, label: "AWS · GCP · Azure" },
		{ id: 2, label: "Kubernetes" },
		{ id: 3, label: "Docker" },
		{ id: 4, label: "React · Node.js" },
		{ id: 5, label: "TypeScript" },
		{ id: 6, label: "PostgreSQL" },
	];
	const metrics = [
		{ id: 1, number: "6+", label: "Core Services" },
		{ id: 2, number: "100%", label: "Cloud-Native" },
	];
	return (
		<div id="home" className="px-[21px] md:px-8">
			<div className="max-w-[1400px] mx-auto pt-28 lg:pt-34">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-12 xl:gap-17">
					{/* -----------Left Portion------------ */}
					<div className="order-2 lg:order-1 mt-">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.2,
							}}
							viewport={{ once: true }}
							className="min-h-100vh border bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.3)] text-[#10b981] rounded-full w-74 text-center text-sm py-2 font-medium"
						>
							● Kathmandu · Accepting 2026 Projects
						</motion.div>
						<motion.h1
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.3,
							}}
							viewport={{ once: true }}
							className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-black my-8 leading-[1.05]"
						>
							<span className="block mb-2 dark:text-white">
								Powering your
							</span>
							<span className="block bg-linear-to-tr from-[#00d9ff] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent whitespace-nowrap">
								next digital leap
							</span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.4,
							}}
							viewport={{ once: true }}
							className="text-[clamp(1.05rem,1.5vw,1.25rem)] mr-14 mb-8 text-[#475569] dark:text-[#94a3b8] max-w-[600px]"
						>
							Lorem ipsum dolor sit amet consectetur adisicing
							elit. llen quidrtest acsamus delen magni dolor
							debitis cumque nisi dolore dsafj asdf aque, sapiente
							nam sed id ex alias facere. Qui quia, eveniet
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.4,
							}}
							viewport={{ once: true }}
							className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-4 mt-10"
						>
							<Button text="Get Started" href="#contact" />
							<a
								href="#services"
								className="inline-flex items-center justify-center border-[1.5px] border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[10px] px-7 py-3 font-bold text-base text-[#0f172a] dark:text-[#ffffff] hover:border-[#00d9ff] hover:bg-[rgba(198,241,248,0.3)] dark:hover:bg-[rgba(198,241,248,0.08)] cursor-pointer transition-all duration-300"
							>
								Explore Services
							</a>
						</motion.div>
					</div>

					{/* -----------Right Portion------------ */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.9,
							delay: 0.2,
						}}
						viewport={{ once: true }}
						className="order-1 lg:order-2 border border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] hover:border-[rgba(15,23,42,0.15)] dark:hover:border-[rgba(255,255,255,0.12)] rounded-3xl backdrop-blur-[20px] bg-white dark:bg-[#141829] p-8 -mt-10 md:mt-1 lg:mt-16 shadow-[0_24px_64px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
					>
						<div class="absolute top-0 left-0 w-full h-[1.5px] bg-[linear-gradient(90deg,transparent,#00d9ff,transparent)]" />
						<div className="flex items-center text-sm font-semibold text-[#64748b] dark:text-[#94a3b8] justify-between mb-8">
							<h3>ENGINEERING METRICS</h3>
							<img src={dots} className="h-2" />
						</div>
						<ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
							{metrics.map((metric) => (
								<li
									key={metric.id}
									className="bg-[rgba(99,102,241,0.03)] dark:bg-[rgba(99,102,241,0.05)] border border-[rgba(99,102,241,0.15)] dark:border-[rgba(99,102,241,0.2)] hover:border-[#00d9ff] hover:-translate-y-2 rounded-xl p-8 text-center hover:shadow-[0_12px_24px_rgba(0,217,255,0.3)] transition-all duration-300"
								>
									<h2 className="text-[1.75rem] font-extrabold bg-clip-text text-transparent bg-linear-to-tr from-[#00d9ff] to-[#6366f1] bg-[rgba(99,102,241,0.05)]">
										{metric.number}
									</h2>
									<p className="text-[0.75rem] font-medium text-[#64748b]">
										{metric.label}
									</p>
								</li>
							))}
						</ul>
						<div className=" border border-[rgba(15,23,42,0.08)] hover:border-[rgba(12,23,42,0.15)] dark:border-[rgba(255,255,255,0.06)] dark:hover:border-[rgba(255,255,255,0.12)] shadow-[0_0_0_0_rgba(0,217,255,0.3)] my-8" />
						<div className="text-sm">
							<h2 className="text-[#64748b] text-xs font-semibold">
								TECH STACK
							</h2>
							<ul className="flex flex-wrap gap-2 mt-4">
								{stacks.map((stack) => (
									<li
										key={stack.id}
										className="whitespace-nowrap border dark:border-[rgba(255,255,255,0.06)] dark:hover:border-[rgba(255,255,255,0.12)] shadow-[0_0_0_0_rgba(0,217,255,0.3)] text-center rounded-md text-[#475569] dark:text-[#94a3b8] py-1.5 px-3.5 text-[0.8125rem] font-medium bg-[rgba(15,23,42,0.03)] dark:bg-[rgba(255,255,255,0.04)] border-[rgba(15,23,42,0.08)] hover:border-[rgba(15,23,42,0.15)]"
									>
										{stack.label}
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				</div>

				{/* -----------Bottom Portion------------ */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.6,
						delay: 0.5,
					}}
					viewport={{ once: true }}
				>
					<ol className="flex flex-wrap gap-8 my-8 text-sm text-[#00d9ff] dark:text-[#00a8cc] whitespace-nowrap">
						{features.map((feature) => (
							<li key={feature.id}>
								✓{" "}
								<span className="text-[#64748b]">
									{feature.label}
								</span>
							</li>
						))}
					</ol>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
