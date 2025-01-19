"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContributorsPage() {
	// https://replugged.dev/api/v1/stats/contributors

	// const contributors = [
	// 	{
	// 		name: "John Doe",
	// 		role: "Lead Developer",
	// 		github: "johndoe",
	// 		contributions: 156,
	// 		avatar: "/placeholder.svg?height=200&width=200",
	// 	},
	// 	{
	// 		name: "Jane Smith",
	// 		role: "Plugin Developer",
	// 		github: "janesmith",
	// 		contributions: 89,
	// 		avatar: "/placeholder.svg?height=200&width=200",
	// 	},
	// 	{
	// 		name: "Alex Johnson",
	// 		role: "Theme Designer",
	// 		github: "alexj",
	// 		contributions: 67,
	// 		avatar: "/placeholder.svg?height=200&width=200",
	// 	},
	// ];

	// {
	//   "contributors": [],
	//   "developers": [],
	//   "staff": [
	//   {
	//   "_id": "1000992611840049192",
	//   "avatar": "5d1a7c7ec81d636e931e7c120ac2b50f",
	//   "discriminator": "7287",
	//   "username": "Replugged"
	//   }
	//   ],

	const [contributors, setContributors] = useState<Contributor[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchPlugins = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					"https://replugged.dev/api/v1/stats/contributors",
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
						contributions: 0,
					})),
					...data.staff.map((s: Contributor) => ({
						...s,
						role: "Staff",
						contributions: 0,
					})),
					...data.contributors.map((c: Contributor) => ({
						...c,
						role: "Contributor",
						contributions: 0,
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
		<div className="min-h-screen bg-[#313338] text-white">
			<div className="bg-[#404EED] py-20">
				<div className="container mx-auto px-6">
					<h1 className="text-4xl font-bold mb-4">Contributors</h1>
					<p className="text-lg opacity-90">
						Meet the amazing people behind Replugged
					</p>
				</div>
			</div>
			<div className="container mx-auto px-6 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{contributors.map((contributor) => (
						<Card
							key={contributor.username}
							className="bg-[#2B2D31] border-none p-6 text-center"
						>
							<img
								src={
									contributor.avatar
										? `https://replugged.dev/api/v1/avatars/${contributor._id}.png`
										: "/placeholder.svg?height=200&width=200"
								}
								alt={contributor.username}
								className="w-32 h-32 rounded-full mx-auto mb-4"
							/>
							<h3 className="text-xl font-semibold mb-1">
								{contributor.username}
							</h3>
							<p className="text-sm text-gray-400 mb-3">{contributor.role}</p>
							<p className="text-sm text-gray-300 mb-4">{0} contributions</p>
							{/* <Button className="w-full bg-[#404EED] hover:bg-[#4752C4]">
								<GithubIcon className="mr-2 h-4 w-4" />
								View GitHub
							</Button> */}
						</Card>
					))}
				</div>
				{loading && <p className="text-center mt-4">Loading more plugins...</p>}
			</div>
		</div>
	);
}
