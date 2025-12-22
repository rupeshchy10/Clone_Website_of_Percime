const Button = ({ text, href, className, onClick }) => {
	return (
		<a
			href={href}
			onClick={onClick}
			className={`relative overflow-hidden inline-flex items-center justify-center rounded-[10px] px-7 py-3 border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] hover:border-[rgba(15,23,42,0.15)] dark:hover:border-[rgba(255,255,255,0.12)] bg-linear-to-br from-[#0891b2] to-[#0e7490] shadow-[0_8px_24px_rgba(8,145,178,0.4)] hover:shadow-[0_8px_24px_rgba(8,145,178,0.6)] hover:-translate-y-0.5 text-white font-bold text-base cursor-pointer group transition-all duration-300 ${className}`}
		>
			{/* Shine layer */}
			<span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[120%] transition-transform duration-700 ease-out" />

			{/* Content */}
			<span className="relative z-10 flex items-center gap-2">
				{text} <span>→</span>
			</span>
		</a>
	);
};

export default Button;
