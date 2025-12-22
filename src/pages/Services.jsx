import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const Services = () => {
	const services = [
		{
			id: 1,
			icon: "☁️",
			title: "Cloud Services",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos praesentium vitae deserunt porro excepturi, quam deleniti molestiae. Dolore error eligendi officia ipsam!",
			features: [
				"Architecture Design",
				"Cloud Migration",
				"Cost Optimization",
				"Multi-Cloud",
			],
		},
		{
			id: 2,
			icon: "⚙️",
			title: "DevOps Engineering",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos praesentium vitae deserunt porro excepturi, quam deleniti molestiae. Dolore error eligendi officia ipsam!",
			features: [
				"CI/CD Pipelines",
				"Kubernetes",
				"Terraform",
				"Monitoring",
			],
		},
		{
			id: 3,
			icon: "💻",
			title: "Software Development",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos praesentium vitae deserunt porro excepturi, quam deleniti molestiae. Dolore error eligendi officia ipsam!",
			features: [
				"React · Next.js",
				"Node.js",
				"TypeScript",
				"Mobile Apps",
			],
		},
		{
			id: 4,
			icon: "🎮",
			title: "Game Development",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos praesentium vitae deserunt porro excepturi, quam deleniti molestiae. Dolore error eligendi officia ipsam!",
			features: ["Unity", "Unreal Engine", "Mobile Gaming", "Live Ops"],
		},
		{
			id: 5,
			icon: "🤝",
			title: "IT Outsourcing",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos praesentium vitae deserunt porro excepturi, quam deleniti molestiae. Dolore error eligendi officia ipsam!",
			features: [
				"Dedicated Teams",
				"Staff Augmentation",
				"Long-term Partnership",
			],
		},
		{
			id: 6,
			icon: "🔧",
			title: "Technical Consulting",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos praesentium vitae deserunt porro excepturi, quam deleniti molestiae. Dolore error eligendi officia ipsam!",
			features: [
				"Architecture Review",
				"Tech Strategy",
				"Performance Audit",
			],
		},
	];
	return (
		<div id="services" className="px-[21px] md:px-8">
			<div className="max-w-[1400px] mx-auto pt-30 lg:pt-35">
				<div className="flex flex-col justify-center items-center">
					<SectionHeader
						badge="WHAT WE DO"
						title="Full-Stack Digital Engineering"
						description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Utnon magni dolorem iure quisquam ab repudiandae blanditiis Utnon magni dolorem"
					/>
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
						{services.map((service) => (
							<motion.li
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: 0.2,
								}}
								viewport={{ once: true }}
								key={service.id}
								className="border dark:border-[rgba(255,255,255,0.06)] hover:border-[#00d9ff] border-[rgba(15,23,42,0.08)] rounded-2xl p-6 bg-white dark:bg-[#141829] transition-all duration-500 hover:bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.08),transparent_60%)] hover:shadow-[0_8px_24px_rgba(0,217,255,0.3)]"
							>
								<span className=" rounded-[14px] text-xl p-2 text-[1.75rem] bg-[linear-gradient(135deg,#00d9ff,#6366f1)]">
									{service.icon}
								</span>
								<h2 className="mt-6 text-2xl font-bold dark:text-white">
									{service.title}
								</h2>
								<p className="my-4 text-[#475569] dark:text-[#94a3b8] text-[14px] md:text-[16px]">
									{service.description}
								</p>
								<ul className="flex flex-wrap gap-1">
									{service.features.map((feature, index) => (
										<li
											key={index}
											className="whitespace-nowrap border dark:border-[rgba(255,255,255,0.06)] dark:hover:border-[rgba(255,255,255,0.12)] shadow-[0_0_0_0_rgba(0,217,255,0.3)] text-center rounded-md text-[#475569] dark:text-[#64748b] py-1.5 px-3.5 text-[0.8125rem] font-medium bg-[rgba(15,23,42,0.03)] dark:bg-[rgba(255,255,255,0.04)] border-[rgba(15,23,42,0.08)] hover:border-[rgba(15,23,42,0.15)]"
										>
											{feature}
										</li>
									))}
								</ul>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Services;
