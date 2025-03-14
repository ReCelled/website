"use client";

import CustomCard from "@/app/components/Card";
import SearchBar from "@/app/components/Search";
import { useEffect, useState } from "react";

type ItemPageProps = {
	url: string;
	title: string;
	subtitle: string;
	search: string;
	notFoundText: string;
	loadingText: string;
};

const BASE_URL = "https://recelled.dev/api/store/list";

export default function ItemsPage<
	Item extends {
		id: string;
		name: string;
		description: string;
		image: string;
		source: string;
		author: Author | Author[];
	},
>({ url, title, subtitle, search, notFoundText, loadingText }: ItemPageProps) {
	const [items, setItems] = useState<Item[]>([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState("");
	const [noMore, setNoMore] = useState(false);

	useEffect(() => {
		const fetchItems = async () => {
			setLoading(true);
			try {
				const replacedUrl = url
					.replace("${page}", page.toString())
					.replace("${query}", query);
				const response = await fetch(BASE_URL + replacedUrl);
				const data = await response.json();

				// Make results unique
				if (data.results.length !== 0) {
					setItems((prevItems) => [
						...prevItems,
						...(data.results.filter(
							(p: Item) => !prevItems.some((prev) => prev.id === p.id),
						) as Item[]),
					]);
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

		fetchItems();
	}, [page, query, url]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
		setItems([]); // Clear previous results
		setPage(1); // Reset to first page
		setNoMore(false); // Reset noMore
	};

	useEffect(() => {
		if (noMore || loading) return;

		const handleScroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop >=
				document.documentElement.offsetHeight - 100
			) {
				setPage((prevPage) => prevPage + 1);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [noMore, loading]);

	return (
		<>
			<div className="min-h-screen bg-[#313338] text-white">
				<div className="bg-[#404EED] py-20">
					<div className="container mx-auto px-6">
						<h1 className="text-4xl font-bold mb-4">{title}</h1>
						<p className="text-lg opacity-90">{subtitle}</p>
					</div>
				</div>
				<div className="container mx-auto px-6 py-8">
					<SearchBar placeholder={search} handleSearch={handleSearch} />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{items.map((item) => (
							<CustomCard key={item.id} item={item} />
						))}
					</div>
					{!noMore && loading && (
						<p className="text-center mt-4">{loadingText}</p>
					)}
					{!loading && items?.length === 0 && (
						<p className="text-center mt-4">{notFoundText}</p>
					)}
				</div>
			</div>
		</>
	);
}
