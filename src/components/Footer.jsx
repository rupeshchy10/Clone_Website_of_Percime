import light_logo from "../assets/images/Light_PercimeLogo.png";
import dark_logo from "../assets/images/Dark_PercimeLogo.png";

const Footer = ({ theme }) => {
	const quickLinks = [
		{ id: 1, menu: "Services", href: "#services" },
		{ id: 2, menu: "Approach", href: "#approach" },
		{ id: 3, menu: "Contact", href: "#contact" },
	];
	const contacts = ["abc@website.com", "+977-9862885899", "Kathmandu, Nepal"];
	return (
		<>
			<div className=" border-t border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] mb-2" />
			<footer className="px-[21px] md:px-8">
				<div className="max-w-[1400px] mx-auto py-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
						{/* -----------Description (Left Portion)---------- */}
						<div className="flex flex-col md:items-start items-center space-y-10">
							<img
								src={theme === "dark" ? light_logo : dark_logo}
								className="h-4 ml-2 w-auto"
							/>
							<p className="text-[#64748b] max-w-100">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Aliquid laboriosam incidunt
								dolor et numquam facere nemo laudantium quod.
							</p>
						</div>

						{/* ------------Quick Links (Middle Portion)----------- */}
						<div className="flex flex-col md:ml-20 lg:ml-40 xl:ml-60 items-center md:items-start space-y-4">
							<h4 className="font-semibold text-sm text-[#475569] dark:text-[#64748b]">
								QUICK LINKS
							</h4>
							<ul className="text-gray-600 space-y-4 text-[0.9375rem]">
								{quickLinks.map((quickLink) => (
									<li key={quickLink.id}>
										<a href={quickLink.href}>
											{quickLink.menu}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* -----------Contact (Right Portion)----------- */}
						<div className="lg:ml-19 xl:ml-30 md:-ml-3 flex flex-col items-center md:items-start space-y-4">
							<h2 className="font-semibold text-sm text-[#475569] dark:text-[#64748b]">
								CONTACT
							</h2>
							<ul className="text-gray-600 space-y-4 text-[0.9375rem]">
								{contacts.map((contact, index) => (
									<li key={index}>{contact}</li>
								))}
							</ul>
						</div>
					</div>
					{/* ------- BOTTOM LINE ---------- */}
					<div className="border-t border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] mt-12 pt-8 flex flex-col items-center sm:flex-row sm:justify-between text-[#64748b] text-sm">
						<div>
							© {new Date().getFullYear()} Percime Technology —
							All Rights Reserved.
						</div>
						<div className="flex gap-8 mt-6 sm:mt-0">
							<p>Privacy</p>
							<p>Terms</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
