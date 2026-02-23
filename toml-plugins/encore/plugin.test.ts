import { run } from "../testkit.js";

run({
	name: "encore",
	afterInstall: async ($) => {
		await $`encore version`;
	},
});
