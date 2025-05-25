// Can upgrade to .ts once vscode ships with node v23
/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	trailingComma: 'es5',
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	printWidth: 100
};

export default config;
