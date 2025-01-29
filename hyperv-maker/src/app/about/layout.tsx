export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<nav>About nav BAR</nav>
			<main>{children}</main>
		</>
	);
}
