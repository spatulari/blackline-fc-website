export const AUTHORS = {
	alien: {
		id: "alien",
		name: "Alien",
		github: "https://github.com/just-another-alien",
		avatar: "https://avatars.githubusercontent.com/u/109413186?v=4",
		role: "founder"
	},
	aariion: {
		id: "aariion",
		name: "Aariion",
		github: "https://github.com/aariion",
		avatar: "https://avatars.githubusercontent.com/u/120595340?v=4",
		role: "founder"
	},
	spatulari: {
		id: "spatulari",
		name: "Spatulari",
		github: "https://github.com/spatulari",
		avatar: "https://avatars.githubusercontent.com/u/206748761?v=4",
		role: "helper"
	},
	fikus: {
		id: "fikus",
		name: "Fikus",
		github: "https://github.com/Ficuss02",
		avatar: "https://cdn.discordapp.com/avatars/1300080893297426462/3f2acf8fda2ad83f92c7462b8131c6c8.png?size=1024",
		role: "helper"
	}
} satisfies Record<string, Author>;

export type Author = {
	id: string;
	name: string;
	github?: string;
	avatar?: string;
	role?: string;
	description?: string;
	website?: string;
};