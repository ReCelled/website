import { SearchIcon } from "lucide-react";

export default function SearchBar({ placeholder, handleSearch, ...rest }) {
	return (
		<div className="relative mb-8">
			<SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
			<input
				type="search"
				onChange={handleSearch}
				placeholder={placeholder}
				className="w-full pl-12 pr-4 py-3 bg-[#1E1F22] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#404EED]"
			/>
		</div>
	);
}
