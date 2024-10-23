import { run } from "../testkit.js";

run({
	name: "openfga",
	afterInstall: async ($) => {
		await $`openfga --version`;
	},
});