import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CustomCard({
	item,
}: {
	item: {
		id: string;
		name: string;
		description: string;
		image: string;
		source: string;
		author: Author | Author[];
	};
}) {
	// "AuthorName" or "AuthorName1, AuthorName2 and AuthorName3"
	const author = !Array.isArray(item.author)
		? item.author.name
		: item.author.length === 1
			? item.author[0].name
			: `${item.author
					.slice(0, -1)
					.map((a: Author) => a.name)
					.join(", ")} and ${item.author.slice(-1)[0].name}`;
	return (
		<Card
			key={item.id}
			className="bg-[#2B2D31] border-none flex flex-col items-stretch"
		>
			<img
				src={item.image || "/placeholder.svg"}
				alt={item.name}
				className="w-full h-48 object-cover rounded-t-lg min-h-[192px]"
			/>
			<div className="p-6 flex flex-col justify-between h-full">
				<div>
					<h3 className="text-xl font-semibold mb-2">{item.name}</h3>
					<p className="text-sm text-gray-400 mb-1">by {author}</p>
					<p className="text-sm mb-4">{item.description}</p>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-sm text-gray-400">{0} downloads</span>
					<div>
						<Button
							className="mr-2 hover:text-gray-300"
							variant="outline"
							onClick={() => window.open(item.source, "_blank")}
						>
							Source
						</Button>
						<Button
							className="bg-[#404EED] hover:bg-[#4752C4]"
							onClick={() =>
								window.open(`https://recelled.dev/store/${item.id}`, "_blank")
							}
						>
							Install
						</Button>
					</div>
				</div>
				{/* <p className="text-sm text-gray-400">Downloads: {plugin.downloads || 'N/A'}</p> */}
			</div>
		</Card>
	);
}
