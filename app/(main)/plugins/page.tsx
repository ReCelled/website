"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/app/components/Search";
import CustomCard from "@/app/components/Card";

type Plugin = {
	id: string;
	name: string;
	description: string;
	image: string;
	source: string;
	author: {
		name: string;
		discordID: string;
		github: string;
	};
	version: string;
	updater: {
		type: string;
		id: string;
	};
	license: string;
	type: string;
	renderer: string;
	plaintextPatches: string;
};

export default function PluginsPage() {
	const [plugins, setPlugins] = useState<Plugin[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState("");
	const [noMore, setNoMore] = useState(false);

	useEffect(() => {
		const fetchPlugins = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					`https://replugged.dev/api/store/list/plugin?page=${page}&items=12&query=${query}`,
				);
				const data = await response.json();

				// Make results unique
				if (data.results.length !== 0) {
					setPlugins((prevPlugins) => [...prevPlugins, ...(data.results.filter((p: Plugin) => !prevPlugins.some((prev) => prev.id === p.id)) as Plugin[])]);
				} else {
					setNoMore(true);
				}
			} catch (error) {
				console.error("Error fetching plugins:", error);
				setNoMore(true);
			} finally {
				setLoading(false);
			}
		};

		fetchPlugins();
	}, [page, query]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setPlugins([]); // Clear previous results
		setPage(1); // Reset to first page
		setNoMore(false); // Reset noMore
	};

	useEffect(() => {
		if (noMore || loading) return

		const handleScroll = () => {
			console.log(window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight);
			if (
				window.innerHeight + document.documentElement.scrollTop >=
				document.documentElement.offsetHeight - 100
			) {
				setPage((prevPage) => prevPage + 1);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [noMore, loading])

	return (
		<div className="min-h-screen bg-[#313338] text-white">
			<div className="bg-[#404EED] py-20">
				<div className="container mx-auto px-6">
					<h1 className="text-4xl font-bold mb-4">Plugins</h1>
					<p className="text-lg opacity-90">
						Enhance your Discord experience with custom plugins
					</p>
				</div>
			</div>
			<div className="container mx-auto px-6 py-8">
				<SearchBar
					placeholder="Search plugins..."
					handleSearch={handleSearch}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{plugins.map((plugin) => (
						<CustomCard key={plugin.id} item={plugin} />
					))}
				</div>
				{!noMore && loading && <p className="text-center mt-4">Loading plugins...</p>}
				{!loading && plugins?.length === 0 && <p className="text-center mt-4">No plugins found</p>}
			</div>
		</div>
	);
}
