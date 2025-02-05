// src/components/ui/NavBar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

const NavBar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const theme = localStorage.getItem("theme");
			setIsDarkMode(theme === "dark");
		}
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 top-0">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/">
							<span className="text-xl font-bold text-blue-600 dark:text-white cursor-pointer">HyperV Maker</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-6">
						<NavItem href="/dashboard" label="Dashboard" />
						<NavItem href="/services" label="Services" />
						<NavItem href="/vm-config" label="VM Config" />
					</div>

					{/* Boutons mode sombre et menu mobile */}
					<div className="flex items-center space-x-4">
						{/* Bouton mode sombre */}
						<button
							onClick={() => setIsDarkMode(!isDarkMode)}
							className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
							{isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />}
						</button>

						{/* Bouton Menu Burger */}
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
							{isMenuOpen ? <X className="w-6 h-6 text-gray-800 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-white" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white dark:bg-gray-800 p-4 space-y-2">
					<NavItem href="/dashboard" label="Dashboard" />
					<NavItem href="/services" label="Services" />
					<NavItem href="/vm-config" label="VM Config" />
				</div>
			)}
		</nav>
	);
};

const NavItem: React.FC<{ href: string; label: string }> = ({ href, label }) => (
	<Link href={href} className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition">
		{label}
	</Link>
);

export default NavBar;
