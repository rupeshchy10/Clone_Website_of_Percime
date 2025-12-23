import { useEffect, useRef, useState } from "react";
import light_logo from "../assets/images/Light_PercimeLogo.png";
import dark_logo from "../assets/images/Dark_PercimeLogo.png";
import ThemeToggler from "./ThemeToggler";
import { FaPhone } from "react-icons/fa6";
import { MdStart } from "react-icons/md";
import MobileToggleButton from "./MobileToggleButton";
import Button from "./Button";
const Navbar = ({ theme, setTheme }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);

	const navLists = [
		{ id: 1, menu: "Services", href: "#services" },
		{ id: 2, menu: "Approach", href: "#approach" },
		{ id: 3, menu: "Contact", href: "#contact" },
	];

	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Scroll logic
			if (currentScrollY > lastScrollY.current) {
				setShowNav(false); // scrolling down -> hide
			} else {
				setShowNav(true); // scrolling up -> show
			}

			// shadow logic
			setIsScrolled(currentScrollY > 0);

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="px-[21px] md:px-8">
			<div
				className={`fixed top-0 pt-6 sm:pt-8 md:pt-14 lg:pt-18 left-0 w-full z-50 backdrop-blur-lg bg-blue-100/80 dark:bg-[#0a0e27]/90  transition-all duration-400 ease-in-out ${
					showNav
						? "translate-y-0 pb-3 sm:pb-2"
						: "-translate-y-10 pt-10 sm:pt-11 pb-3 sm:pb-4 md:pb-4 lg:pb-8 shadow-[rgba(0,217,255,0.3)]"
				} ${
					isScrolled
						? "shadow-lg shadow-black/10 dark:shadow-black/40"
						: "shadow-none"
				}
`}
			>
				<div className="flex items-end justify-between max-w-[1400px] mx-auto px-8">
					<a href="#home">
						<img
							src={theme === "dark" ? light_logo : dark_logo}
							className="h-8 md:h-12 ml-6 w-auto block"
						/>
					</a>

					<nav className="flex gap-0 md:gap-4 items-center">
						<ul className="hidden md:flex md:gap-8 gap-10 font-semibold text-[0.95rem] text-[#475569] dark:text-[#94a3b8] md:mr-4 lg:mr-10">
							{navLists.map((list) => (
								<li key={list.id}>
									<a href={list.href}>{list.menu}</a>
								</li>
							))}
						</ul>

						<ThemeToggler
							theme={theme}
							setTheme={setTheme}
							className="hidden md:block"
						/>

						<a href="#contact">
							{/* Button's icon for md devices */}
							<button
								className="hidden md:block lg:hidden text-xl border border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[10px] p-3 bg-white dark:bg-[#141829] dark:text-white  hover:border-[rgba(15, 23, 42, 0.15)] w-11 h-11 cursor-pointer transition-all duration-300"
								onClick={() => setIsOpen(false)}
							>
								<FaPhone />
							</button>
							{/* Button for lg and bigger devices  */}
							<button className="hidden lg:block border-[1.5px] border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[10px] px-4 lg:px-7 py-3 font-semibold text-[0.95rem] text-[#475569] dark:text-[#94a3b8] hover:border-[#00d9ff] hover:bg-[rgba(198,241,248,0.3)] dark:hover:bg-[rgba(198,241,248,0.08)] cursor-pointer transition-all duration-300">
								Talk to Us
							</button>
						</a>

						<a href="#contact">
							{/* Button for md devices */}
							<button
								className="hidden md:block lg:hidden text-xl border border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[10px] p-3 bg-white dark:bg-[#141829] dark:text-white  hover:border-[rgba(15, 23, 42, 0.15)] w-11 h-11 cursor-pointer transition-all duration-300"
								onClick={() => setIsOpen(false)}
							>
								<MdStart />
							</button>

							{/* Button for lg and bigger devices  */}
							<button className="hidden relative overflow-hidden lg:block rounded-[10px] px-7 py-3 border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] hover:border-[rgba(15,23,42,0.15)] dark:hover:border-[rgba(255,255,255,0.12)] bg-linear-to-br from-[#0891b2] to-[#0e7490] shadow-[0_8px_24px_rgba(8,145,178,0.4)] hover:shadow-[0_8px_24px_rgba(8,145,178,0.6)] hover:-translate-y-0.5 text-white font-semibold text-base cursor-pointer group transition-all duration-300">
								{/* Shine layer */}
								<span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[120%] transition-transform duration-700 ease-out" />

								{/* Content */}
								<span className="relative z-10 flex items-center gap-2">
									Get Started <span>→</span>
								</span>
							</button>
						</a>

						{/* Mobile Menu Button */}
						<div className="dark:text-white z-999">
							<button
								className="md:hidden text-xl"
								onClick={() => setIsOpen(!isOpen)}
							>
								{
									<MobileToggleButton
										isOpen={isOpen}
										setIsOpen={setIsOpen}
									/>
								}
							</button>
						</div>
						{/* Mobile Nav Sidepanel for devices below md */}

						<ul
							className={`fixed top-0 right-0 md:hidden flex flex-col w-[280px] font-semibold text-[0.95rem] text-[#475569] dark:text-[#94a3b8] pt-24 px-8 pb-8 gap-6 z-50 bg-[#f8fafc] dark:bg-[#0a0e27] transform transition-all duration-400 ease-in-out ${
								isOpen ? "translate-x-0 shadow-[-8px_0_32px_rgba(0,0,0,0.5)]" : "translate-x-full"
							}`}
						>
							{navLists.map((list) => (
								<li key={list.id}>
									<a
										href={list.href}
										onClick={() => setIsOpen(false)}
										className="hover:text-yellow-500 dark:hover:text-[#60a5fa] cursor-pointer mt-14"
									>
										{list.menu}
									</a>
								</li>
							))}
							<div className="flex flex-col items-center mx-auto space-y-3">
								<ThemeToggler
									theme={theme}
									setTheme={setTheme}
									className="block md:hidden"
								/>
								<a
									href="#contact"
									onClick={() => setIsOpen(false)}
									className="md:hidden inline-flex justify-center items-center border-[1.5px] border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[10px] px-16 py-3 font-semibold text-[0.95rem] text-[#475569] dark:text-[#94a3b8] hover:border-[rgba(15,23,42,0.15)] transition-all duration-300"
								>
									Talk to Us
								</a>
								<Button
									text="Get Started"
									href="#contact"
									className="px-12 mb-60"
									onClick={() => setIsOpen(false)}
								/>
							</div>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
