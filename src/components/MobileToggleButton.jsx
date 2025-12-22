import { useState } from "react";

const MobileToggleButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="relative flex flex-col justify-between w-7 h-6 focus:outline-none"
			>
				<span
					className={`block h-0.5 w-6 bg-[#0f172a] dark:bg-[#ffffff] rounded transform origin-top-left transition-all duration-300 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${
						isOpen
							? "rotate-45 -translate-y-[1px] bg-[#0f172a] dark:bg-[#ffffff]"
							: ""
					}`}
				></span>
				<span
					className={`block h-0.5 w-6 bg-[#0f172a] dark:bg-[#ffffff] rounded transform origin-bottom-left transition-all duration-300 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${
						isOpen
							? "-rotate-45 -translate-y-[1px] bg-[#0f172a] dark:bg-[#ffffff]"
							: ""
					}`}
				></span>
				<span
					className={`block h-0.5 w-6 bg-[#0f172a] dark:bg-[#ffffff] rounded transition-all duration-300 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${
						isOpen ? "opacity-0 scale-20" : ""
					}`}
				></span>
			</button>
		</>
	);
};

export default MobileToggleButton;
