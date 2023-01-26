import "./globals.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
import FancyTitle from "@/components/FancyTitle";

const inter = Inter({ subsets: ["latin"] });

function Header() {
	return (
		<header className="text-center my-4 p-8 border-b border-zinc-200">
			<Link href="/">
				<FancyTitle
					as="h1"
					extraClass="text-5xl tracking-widest uppercase font-extrabold"
				>
					My Blog
				</FancyTitle>
			</Link>
			<p className="text-2xl tracking-widest">Welcome to my blog! 👋</p>
		</header>
	);
}

function Footer() {
	return (
		<footer className="border-t border-gray-200 my-4 py-4 text-center">
			<em className="text-sm">
				This is just a dummy app made to try the new app directory from Next 13
			</em>
		</footer>
	);
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head />
			<body className="max-w-fit mx-auto bg-zinc-800 text-gray-200">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
