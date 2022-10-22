// next.config.js
const withAntdLess = require('next-plugin-antd-less');
const nextTranslate = require('next-translate');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
	nextTranslate(
		withAntdLess({
			i18n: {
				locales: ['en-US', 'id-ID'],
				defaultLocale: 'id-ID',
				localeDetection: false,
			},
			images: {
				domains: ['www.tailwind-kit.com'],
			},
			// modifyVars: {
			// 	'@primary-color': '#477593',
			// 	'@border-radius-base': '5px',
			// 	'@body-background': '#f7f7f7',
			// },
			lessVarsFilePath: './src/shared/styles/antd.less',
			lessVarsFilePathAppendToEndOfContent: true,

			// for Next.js ONLY
			// nextjs: {
			// 	localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
			// },

			// // Other Config Here...

			// webpack(config) {
			// 	return config;
			// },

			// // ONLY for Next.js 10, if you use Next.js 11, delete this block
			// future: {
			// 	webpack5: true,
			// },
		}),
	),
);
