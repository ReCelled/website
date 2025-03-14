"use client";

import ItemsPage from "@/app/components/ItemsPage";

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
	return (<ItemsPage<Plugin> url="/plugin?page=${page}&items=12&query=${query}" title="Plugins" subtitle="Discover new plugins for your Discord server." search="Search for plugins" notFoundText="No plugins found." loadingText="Loading plugins..." />)
}
