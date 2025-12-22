import { motion } from "framer-motion";
const SectionHeader = ({ badge, title, description }) => {
	return (
		<>
			<motion.h2
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.6,
					delay: 0.2,
				}}
				viewport={{ once: true }}
				className="inline-block border text-[#818cf8] border-[rgba(99,102,241,0.3)] text-center rounded-full py-2 px-5 text-sm font-semibold bg-[rgba(99,102,241,0.1)]"
			>
				{badge}
			</motion.h2>
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.6,
					delay: 0.2,
				}}
				viewport={{ once: true }}
				className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold my-3 sm:my-1 dark:text-white text-center leading-[1.7] tracking-[-0.03em]
"
			>
				{title}
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.6,
					delay: 0.2,
				}}
				viewport={{ once: true }}
				className="max-w-187.5 mx-auto text-center text-[#475569] dark:text-[#94a3b8] text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.7] "
			>
				{description}
			</motion.p>
		</>
	);
};

export default SectionHeader;
