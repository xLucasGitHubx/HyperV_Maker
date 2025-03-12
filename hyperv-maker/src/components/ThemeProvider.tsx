// src/app/components/ThemeProvider.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	// Charge le thème stocké dans le localStorage (ou "light" par défaut)
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
		}
	}, []);

	//  À chaque fois que `theme` change, applique ou retire la classe "dark"
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [theme]);

	//  Callback pour basculer
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	//  On fournit `toggleTheme` à NavBar (ou un autre composant) pour déclencher le switch
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Pour l'exemple, on exporte un Context
import { createContext } from "react";

interface ThemeContextValue {
	theme: "light" | "dark";
	toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextValue>({
	theme: "light",
	toggleTheme: () => {},
});
