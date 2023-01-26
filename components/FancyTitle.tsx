import { ReactNode } from "react";

export default function FancyTitle({
	as,
	extraClass,
	children,
}: {
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	extraClass?: string;
	children: ReactNode;
}) {
	const Header = as;
	return (
		<Header
			className={`hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:duration-500 ${extraClass}`}
		>
			{children}
		</Header>
	);
}
