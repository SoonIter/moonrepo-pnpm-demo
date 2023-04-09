const path = require('node:path');

const env = process.env.NODE_ENV ?? 'development';
const isDev = env === 'development';
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: './src/main.tsx',
	},
	builtins: {
		progress: true,
		devFriendlySplitChunks: true,
		minifyOptions: {
			passes: 0,
			dropConsole: false,
		},
		html: [
			{
				template: './index.html',
			},
		],
		define: {
			'process.env.NODE_ENV': JSON.stringify(env),
		},
		react: {
			development: isDev,
			refresh: isDev,
		},
	},
	module: {
		rules: [
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	resolve: {
		tsConfigPath: path.resolve(__dirname, './tsconfig.json'),
	},
	optimization: {
		minimize: false,
	},
};
