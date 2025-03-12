// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ServiceConfigProvider from "@/components/ServiceConfigProvider"; // <-- Import du Provider

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "HyperV Maker",
	description: "HyperV Maker : Simplifiez la gestion et le déploiement ...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900`}>
				<ServiceConfigProvider>
					<NavBar />
					{children}
				</ServiceConfigProvider>
			</body>
		</html>
	);
}
