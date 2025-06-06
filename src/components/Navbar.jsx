import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
	}, [menuOpen]);
	return (
		<nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo/left justified content */}
					<a href="#home" className="font-mono text-xl font-bold text-white">
						{" "}
						Desmond<span className="text-yellow-500"> Nixon</span>{" "}
					</a>

					{/* Hamburger menu icon for mobile*/}
					<div
						className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						&#9776;
					</div>

					{/* Desktop navigation links */}
					{/* These links are hidden on mobile and only shown on larger screens */}
					<div className="hidden md:flex items-center space-x-8">
						<a href="#home" className="text-gray-300 hove:text-white transition-colors">
							{" "}
							Home
						</a>
						<a href="#about" className="text-gray-300 hove:text-white transition-colors">
							{" "}
							About{" "}
						</a>
						<a href="#testimonials" className="text-gray-300 hove:text-white transition-colors">
							{" "}
							Testimonials{" "}
						</a>
						<a href="#experience" className="text-gray-300 hove:text-white transition-colors">
							{" "}
							Experience{" "}
						</a>
						<a href="#contact" className="text-gray-300 hove:text-white transition-colors">
							{" "}
							Contact{" "}
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
