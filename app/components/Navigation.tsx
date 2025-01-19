import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="z-50 bg-[#1E1F22]">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-10">
						<Link href="/">
							<Image
								src="/placeholder.svg?height=34&width=124"
								alt="Replugged"
								width={124}
								height={34}
								className="w-auto h-[34px]"
							/>
						</Link>
						<div className="hidden md:flex items-center gap-8">
							<Link href="/" className="text-white hover:underline">
								Home
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
							<a
								href="https://discord.gg/replugged"
								className="text-white hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Discord Server
							</a>
						</div>
					</div>
					<Button
						variant="secondary"
						className="rounded-full bg-[#5865F2] text-white hover:bg-[#4752C4]"
					>
						Login with Discord
					</Button>
				</div>
			</div>
		</nav>
	);
}
