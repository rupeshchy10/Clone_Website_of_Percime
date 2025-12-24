import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Approach from "./pages/Approach";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import MobileToggleButton from "./components/MobileToggleButton";

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
	);
	return (
		<div className="bg-[#ffffff]  dark:bg-[#0a0e27] overflow-x-hidden">
			<Navbar theme={theme} setTheme={setTheme} />
			<Home />
			<Services />
			<Approach />
			<Contact />
			<Footer theme={theme} setTheme={setTheme} />
		</div>
	);
};

export default App;
