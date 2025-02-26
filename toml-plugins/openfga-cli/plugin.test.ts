import { run } from "../testkit.js";

run({
	name: "openfga-cli",
	afterInstall: async ($) => {
		await $`fga --version`;
	},
});
