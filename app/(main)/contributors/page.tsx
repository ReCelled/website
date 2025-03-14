"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContributorsPage() {
	const [contributors, setContributors] = useState<Contributor[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchPlugins = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					"https://corsproxy.io/?url=https://recelled.dev/api/v1/stats/contributors",
				);
				const data = await response.json();

				// if no results, stop loading
				if (data.length === 0) {
					setLoading(false);
					return;
				}

				const c = [
					...data.developers.map((d: Contributor) => ({
						...d,
						role: "Developer",
					})),
					...data.staff.map((s: Contributor) => ({
						...s,
						role: "Staff",
					})),
					...data.contributors.map((c: Contributor) => ({
						...c,
						role: "Contributor",
					})),
				];

				setContributors(
					c
						.sort((a, b) => {
							if (a.username < b.username) return -1;
							if (a.username > b.username) return 1;
							return 0;
						})
						.sort((a, b) => b.contributions - a.contributions),
				);
			} catch (error) {
				console.error("Error fetching contributors:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPlugins();
	}, []);

	return (
		<>
			<title>Recelled - Contributors</title>
			<div className="min-h-screen bg-[#313338] text-white">
				<div className="bg-[#404EED] py-20">
					<div className="container mx-auto px-6">
						<h1 className="text-4xl font-bold mb-4">Contributors</h1>
						<p className="text-lg opacity-90">
							Meet the amazing people behind Recelled
						</p>
					</div>
				</div>
				<div className="container mx-auto px-6 py-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{contributors.map((contributor) => {
							const username =
								contributor.discriminator === "0"
									? contributor.username
									: `${contributor.username}#${contributor.discriminator}`;
							return (
								<Card
									key={contributor._id}
									className="bg-[#2B2D31] border-none p-6 text-center"
								>
									<img
										src={`https://recelled.dev/api/v1/avatars/${contributor._id}.png`}
										alt={username}
										className="w-32 h-32 rounded-full mx-auto mb-4"
									/>
									<h3 className="text-xl font-semibold mb-1">{username}</h3>
									<p className="text-sm text-gray-400">{contributor.role}</p>
								</Card>
							);
						})}
					</div>
					{loading && (
						<p className="text-center mt-4">Loading more plugins...</p>
					)}
				</div>
			</div>
		</>
	);
}
