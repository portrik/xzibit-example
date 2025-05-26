import { defineConfig } from "vitest/config";

const configuration = defineConfig({
	test: {
		watch: false,

		coverage: {
			enabled: true,
			reporter: ["cobertura", "text"],
		},

		reporters: ["default", "junit"],

		outputFile: {
			junit: "./test_report/junit.xml",
		},
	},
});

export default configuration;
