import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" />

			<body>
				<div className="min-h-screen bg-[#313338]">
					<Navigation />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
