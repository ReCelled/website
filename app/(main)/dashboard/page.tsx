import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AlertCircle, BanIcon, LinkIcon, RefreshCcw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DashboardPage() {
	const user = {
		name: "Oggetto",
	};

	return (
		<div className="min-h-screen bg-[#313338] text-white">
			<div className="container mx-auto px-6 py-12">
				<h1 className="text-4xl font-bold mb-12">Welcome back, {user.name}!</h1>

				<div className="space-y-8">
					{/* Linked Accounts Section */}
					<Card className="bg-[#2B2D31] border-none text-white">
						<CardHeader className="pb-4">
							<CardTitle className="flex items-center gap-4">
								<LinkIcon className="w-6 h-6" />
								Linked Accounts
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex items-start gap-4">
								<div className="flex-1">
									<div className="flex items-center justify-between mb-2">
										<h3 className="font-semibold">No account linked</h3>
										<Button
											variant="outline"
											size="sm"
											className="bg-[#4F545C] hover:bg-[#5D6269] border-none"
										>
											<RefreshCcw className="w-4 h-4 mr-2" />
											Refresh
										</Button>
									</div>
									<p className="text-[#B9BBBE]">
										Link your Patreon account to benefit from the Replugged
										Supporter perks, and manage them from here. If you pledged
										but don't see your perks, use the refresh button.
									</p>
									<Button
										asChild
										className="mt-4 bg-[#5865F2] hover:bg-[#4752C4]"
									>
										<a href="https://replugged.dev/api/v1/oauth/patreon">
											Link accounts
										</a>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Delete Account Section */}
					<Card className="bg-[#2B2D31] border-none text-white">
						<CardHeader>
							<CardTitle className="flex items-center gap-4 pb-4">
								<BanIcon className="w-6 h-6" />
								Delete my account
							</CardTitle>
							<CardDescription className="text-[#B9BBBE]">
								You can choose to permanently delete your Replugged account. Be
								careful, this action is irreversible and will take effect
								immediately.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Alert
								variant="destructive"
								className="bg-red-900/20 border-red-900 text-red-400"
							>
								<AlertCircle className="h-4 w-4" />
								<AlertDescription>
									We will drop any data we have about you, and you'll no longer
									be able to benefit from features requiring a Replugged account
									(such as enhanced Spotify plugin, settings sync, and more).
								</AlertDescription>
							</Alert>
							<Button
								variant="destructive"
								className="mt-4 bg-red-500 hover:bg-red-600"
							>
								Delete my account
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
