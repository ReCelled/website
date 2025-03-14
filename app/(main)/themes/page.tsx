"use client";

import CustomCard from "@/app/components/Card";
import ItemsPage from "@/app/components/ItemsPage";
import SearchBar from "@/app/components/Search";
import { useEffect, useState } from "react";

type Theme = {
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

export default function ThemesPage() {
	return (<ItemsPage<Theme> url="/theme?page=${page}&items=12&query=${query}" title="Themes" subtitle="Discover new themes for your Discord server." search="Search for themes" notFoundText="No themes found." loadingText="Loading themes..." />)
}
