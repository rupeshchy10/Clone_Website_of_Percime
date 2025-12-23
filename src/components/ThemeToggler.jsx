import { useEffect } from "react";

const ThemeToggler = ({ theme, setTheme,className="" }) => {
	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			"(prefers-color-scheme:dark)"
		).matches;
		setTheme(theme || (prefersDarkMode ? "dark" : "light"));
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className={`text-xl border border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-[10px] p-1 bg-white dark:bg-[#141829]  hover:border-[rgba(15, 23, 42, 0.15)] hover:scale-[1.05] w-11 h-11 cursor-pointer transition-all ${className}`}
		>
			{theme === "dark" ? "☀️" : "🌙"}
		</button>
	);
};

export default ThemeToggler;
