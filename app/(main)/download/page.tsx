import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyButton } from "../../components/copy-button";

export default function DownloadPage() {
	return (
		<>
			<title>Recelled - Download</title>
			<div className="min-h-screen bg-[#313338] text-white">
				<div className="container mx-auto px-6 py-20">
					<h1 className="text-4xl font-bold text-center mb-12">
						Download Recelled
					</h1>

					<div className="max-w-3xl mx-auto">
						<Tabs defaultValue="windows" className="w-full">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="windows">Windows</TabsTrigger>
								<TabsTrigger value="macos">macOS</TabsTrigger>
								<TabsTrigger value="linux">Linux</TabsTrigger>
							</TabsList>

							<TabsContent value="windows" className="space-y-4">
								<div className="text-center py-6">
									<p className="mb-4">
										Click the button below to download the installer, then run
										it!
									</p>
									<Button
										size="lg"
										className="bg-[#5865F2] hover:bg-[#4752C4]"
										asChild
									>
										<a
											href="https://github.com/recelled/receller/releases/latest/download/receller-windows.exe"
											download
										>
											Download for Windows
										</a>
									</Button>
								</div>
								<Alert className="mt-4 bg-[#2B2D31] border-yellow-500">
									<AlertDescription>
										If you get a warning that the app can't be opened, click
										"Run Anyways". You may need to click "more info" to see this
										option.
									</AlertDescription>
								</Alert>
							</TabsContent>

							<TabsContent value="macos" className="space-y-4">
								<div className="text-center py-6">
									<p className="mb-4">
										Click the button below to download the installer, then run
										it!
									</p>
									<Button
										size="lg"
										className="bg-[#5865F2] hover:bg-[#4752C4]"
										asChild
									>
										<a
											href="https://github.com/recelled/receller/releases/latest/download/receller-macos.app.tar.gz"
											download
										>
											Download for macOS
										</a>
									</Button>
								</div>
								<Alert className="mt-4 bg-[#2B2D31] border-yellow-500">
									<AlertDescription>
										If you get a warning that the app can't be opened, right
										click on the app and select "Open". See{" "}
										<a
											href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac"
											className="text-[#5865F2] hover:underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											this article from Apple
										</a>{" "}
										for more information.
									</AlertDescription>
								</Alert>
							</TabsContent>

							<TabsContent value="linux" className="space-y-4">
								<div className="text-center py-6">
									<p className="mb-4">
										Click the button below to download the installer, then run
										it!
									</p>
									<div className="flex justify-center gap-4">
										<Button
											size="lg"
											className="bg-[#5865F2] hover:bg-[#4752C4]"
											asChild
										>
											<a
												href="https://github.com/recelled/receller/releases/latest/download/receller-linux.AppImage"
												download
											>
												Download .AppImage
											</a>
										</Button>
										<Button
											size="lg"
											className="bg-[#5865F2] hover:bg-[#4752C4]"
											asChild
										>
											<a
												href="https://github.com/recelled/receller/releases/latest/download/receller-linux.deb"
												download
											>
												Download .deb
											</a>
										</Button>
									</div>
								</div>
								<Alert className="mt-4 bg-[#2B2D31] border-yellow-500">
									<AlertDescription>
										If the installer is not able to find your installation or
										you are using Flatpak, please follow the{" "}
										<a
											href="#manual"
											className="text-[#5865F2] hover:underline"
										>
											manual installation instructions
										</a>
										.
									</AlertDescription>
								</Alert>
							</TabsContent>
						</Tabs>

						<section id="manual" className="mt-16">
							<h2 className="text-2xl font-bold mb-6">Manual Installation</h2>
							<p className="text-[#B9BBBE] mb-8">
								For most users, we recommend following the automatic
								installation instructions above. If you are unable to use the
								automatic installer or you'd prefer to install via the command
								line, you can follow the instructions below.
							</p>

							<h3 className="text-xl font-bold mb-4">Prerequisites</h3>
							<ul className="list-disc list-inside space-y-2 text-[#B9BBBE] mb-8">
								<li>
									<a
										href="https://git-scm.com"
										className="text-[#5865F2] hover:underline"
									>
										Git
									</a>
								</li>
								<li>
									<a
										href="https://nodejs.org"
										className="text-[#5865F2] hover:underline"
									>
										Node.js
									</a>
								</li>
								<li>
									pnpm:{" "}
									<code className="bg-[#2B2D31] px-2 py-1 rounded">
										npm install -g pnpm
									</code>
									<CopyButton text="npm install -g pnpm" />
								</li>
								<li>
									<a
										href="https://discord.com"
										className="text-[#5865F2] hover:underline"
									>
										Discord
									</a>
								</li>
							</ul>

							<h3 className="text-xl font-bold mb-4">Installation</h3>
							<div className="space-y-4">
								<div className="bg-[#2B2D31] p-4 rounded-lg flex items-center justify-between">
									<code>git clone https://github.com/recelled/recelled</code>
									<CopyButton text="git clone https://github.com/recelled/recelled" />
								</div>
								<div className="bg-[#2B2D31] p-4 rounded-lg flex items-center justify-between">
									<code>cd recelled</code>
									<CopyButton text="cd recelled" />
								</div>
								<div className="bg-[#2B2D31] p-4 rounded-lg flex items-center justify-between">
									<code>pnpm i</code>
									<CopyButton text="pnpm i" />
								</div>
								<div className="bg-[#2B2D31] p-4 rounded-lg flex items-center justify-between">
									<code>pnpm run bundle</code>
									<CopyButton text="pnpm run bundle" />
								</div>
								<div className="bg-[#2B2D31] p-4 rounded-lg flex items-center justify-between">
									<code>pnpm run plug --production</code>
									<CopyButton text="pnpm run plug --production" />
								</div>
							</div>

							<div className="mt-4 text-[#B9BBBE]">
								<p>
									If you want to specify into a specific Discord version, you
									can add the platform as an argument:
								</p>
								<div className="bg-[#2B2D31] p-4 rounded-lg mt-2 flex items-center justify-between">
									<code>
										pnpm run plug --production [stable|ptb|canary|development]
									</code>
									<CopyButton text="pnpm run plug --production stable" />
								</div>
							</div>

							<p className="mt-4 text-[#B9BBBE]">Reopen Discord</p>
							<p className="mt-2 text-[#B9BBBE]">
								You can verify it's installed by going into Discord settings and
								looking for the "Recelled" tab.
							</p>
						</section>

						<section className="mt-16">
							<h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
							<p className="text-[#B9BBBE] mb-4">
								If you're having issues, please reinstall Discord and try steps
								5-7 again.
							</p>
							<p className="text-[#B9BBBE]">
								Still having issues? Please{" "}
								<a
									href="https://discord.gg/recelled"
									className="text-[#5865F2] hover:underline"
								>
									join our Discord
								</a>{" "}
								and create a thread in{" "}
								<a
									href="https://discord.gg/recelled/support"
									className="text-[#5865F2] hover:underline"
								>
									#support
								</a>{" "}
								with any errors you're getting and any other information you
								think might be helpful.
							</p>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
