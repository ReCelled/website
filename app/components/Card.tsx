import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CustomCard({
	item,
}: {
	item: {
		id: string;
		name: string;
		description: string;
		image: string | null;
		source: string;
		author: Author | Author[];
	};
}) {
	if (!item) return null;

	if (!item.source) {
		console.error("Item is missing source:", item);
		return null;
	}

	// "AuthorName" or "AuthorName1, AuthorName2 and AuthorName3"
	const author = !Array.isArray(item.author)
		? item.author.name
		: item.author.length === 1
			? item.author[0].name
			: `${item.author
					.slice(0, -1)
					.map((a: Author) => a.name)
					.join(", ")} and ${item.author.slice(-1)[0].name}`;

	// https://github.com/12944qwerty/replugged-plugins/tree/main/plugins/better-codeblocks -> 12944qwerty/replugged-plugins
	const user_slash_repo = item.source.split("/").slice(3, 5).join("/");
	return (
		<Card
			key={item.id}
			className="bg-[#2B2D31] border-none flex flex-col items-stretch"
		>
			<ImageWithFallback
				src={item.image}
				alt={item.name}
				className="w-full h-48 object-cover rounded-t-lg min-h-[192px]"
			/>

			<div className="p-6 flex flex-col justify-between h-full">
				<div>
					<h3 className="text-xl font-semibold mb-2">
						{item.name}
						<span className="text-sm text-gray-400"> by </span>
						<span className="text-sm">{author}</span>
					</h3>
					{/* <p className="text-sm text-gray-400 mb-2">{item.id}</p> */}
					<p className="text-sm mb-4">{item.description}</p>
				</div>

				<div className="flex items-center justify-between">
					<img
						className="h-[75%]"
						alt="GitHub Repo stars"
						src={`https://img.shields.io/github/stars/${user_slash_repo}?style=for-the-badge`}
					/>
					<div>
						<a
							className="mr-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 border-2 border-primary-foreground rounded-md hover:border-primary-foreground hover:text-primary-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-gray-600 hover:bg-primary-foreground focus-visible:ring-primary-foreground"
							href={item.source}
						>
							Source
						</a>
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
