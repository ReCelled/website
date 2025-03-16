type Author = {
  name: string
  discordID: string
  github: string
}

type Contributor = {
	_id: string
	avatar: string
	discriminator: string
	username: string
	role: string
}

type PluginOrTheme = {
	id: string;
	name: string;
	description: string;
	image?: string | string[];
	source: string;
	author: Author | Author[];
}
