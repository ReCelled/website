import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const isLoggedIn = true;

export default function Navigation() {
	return (
		<nav className="z-50 bg-[#1E1F22]">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-10">
						<Link href="/">
							<Image
								src="./logo.jpg"
								alt="Recelled"
								width={124}
								height={34}
								className="w-auto h-[34px] rounded-lg"
							/>
						</Link>
						<div className="hidden md:flex items-center gap-8">
							<Link href="/" className="text-white hover:underline">
								Home
							</Link>
							<Link href="/download" className="text-white hover:underline">
								Download
							</Link>
							<Link href="/plugins" className="text-white hover:underline">
								Plugins
							</Link>
							<Link href="/themes" className="text-white hover:underline">
								Themes
							</Link>
							<Link href="/contributors" className="text-white hover:underline">
								Contributors
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
