import { run } from "../testkit.js";

run({
	name: "staticcheck",
	afterInstall: async ($) => {
		await $`staticcheck --version`;
	},
});