import { run } from "../testkit.js";

run({
	name: "atlas",
	afterInstall: async ($) => {
		await $`atlas version`;
	},
});