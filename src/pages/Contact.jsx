import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const Contact = () => {
	const contacts = [
		{ id: 1, icon: "📧", label: "Email", link: "rupevilary1010@gmail.com" },
		{ id: 2, icon: "📞", label: "Phone", link: "+977-9862885899" },
		{ id: 3, icon: "🌐", label: "Website", link: "abc@website.com" },
	];
	return (
		<div id="contact" className="px-[21px] md:px-8">
			<div className="max-w-[1400px] mx-auto pt-30 lg:pt-35">
				<div className="flex flex-col justify-center items-center ">
					<SectionHeader
						badge="LET'S TALK"
						title="Ready to Build Something  Great?"
						description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Utnon magni dolorem iure Utnon magni doi"
					/>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.6,
						delay: 0.2,
					}}
					viewport={{ once: true }}
					className="grid grid-cols-1 border rounded-4xl py-16 px-12 bg-white dark:bg-[#141829] mt-12 mb-24 max-w-5xl mx-auto space-y-10 dark:border-[rgba(255,255,255,0.06)] border-[rgba(15,23,42,0.08)] contact-card"
				>
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{contacts.map((contact) => (
							<li className="border border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-2xl text-center w-full py-8 px-6 bg-[rgba(15,23,42,0.03)] dark:bg-[rgba(255,255,255,0.02)] hover:border-[#00d9ff] hover:bg-[rgba(0,217,255,0.05)] hover:-translate-y-2 transition-all duration-300">
								<span className="rounded-[14px] p-2.5 text-[1.75rem] bg-[linear-gradient(135deg,#00d9ff,#6366f1)]">
									{contact.icon}
								</span>
								<h2 className="mt-8 text-lg font-semibold text-[#00d9ff]">
									{contact.label}
								</h2>
								<p className="mt-4 text-[0.9375rem] text-[#475569] dark:text-[#94a3b8]">
									{contact.link}
								</p>
							</li>
						))}
					</ul>
					<div className="flex justify-center my-2">
						<Button text="Start a Conversation" />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
