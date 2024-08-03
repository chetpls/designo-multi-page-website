
import "./styles/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Service from "./views/Service";
import Locations from "./views/Locations";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./views/Contact";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/locations" element={<Locations />} />
					<Route path="/service" element={<Service />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
