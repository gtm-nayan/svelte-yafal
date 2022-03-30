const autoprefixer = require('autoprefixer');
const open_props = require('open-props');
const postcss_jit_props = require('postcss-jit-props');

const config = {
	plugins: [postcss_jit_props(open_props), autoprefixer],
};

module.exports = config;
