import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Features from "../components/Features";

export default function Home() {
	return (
		<>
			<title>Recelled - Home</title>
			<meta
				name="description"
				content="Enhance your Discord experience with new features and looks. Recelled makes your Discord truly yours."
			/>

			<main className="min-h-screen bg-[#1E1F22] text-white">
				<div className="container mx-auto px-6">
					<div className="pt-[120px] pb-20 text-center max-w-4xl mx-auto">
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
							Powerful and simple Discord client mod
						</h1>
						<p className="text-lg md:text-xl text-[#F6F6F6] mb-8 max-w-[600px] mx-auto">
							Enhance your Discord experience with new features and looks.
							Recelled makes your Discord truly <em>yours</em>.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button className="h-12 px-8 text-lg rounded-full bg-[#5865F2] text-white hover:bg-[#4752C4]">
								<DownloadIcon className="mr-2 h-5 w-5" />
								Download
							</Button>
							<Button
								variant="secondary"
								className="h-12 px-8 text-lg rounded-full bg-[#23272A] hover:bg-[#2C2F33]"
							>
								Discord Server
							</Button>
						</div>
					</div>
					<Features />
				</div>
			</main>
		</>
	);
}
