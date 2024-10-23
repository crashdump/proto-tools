import { run } from "../testkit.js";

run({
	name: "mockery",
	afterInstall: async ($) => {
		await $`mockery --version`;
	},
});