module.exports = {
	plugins : [
		require("babel-plugin-transform-es2015-block-scoped-functions"),
		require("babel-plugin-transform-es2015-unicode-regex"),
		require("babel-plugin-transform-es2015-parameters"),
		require("babel-plugin-transform-es2015-destructuring"),
		require("babel-plugin-transform-es2015-modules-commonjs"),
		[require("babel-plugin-transform-regenerator"), { generators: false, asyncGenerators: false }],
		require("babel-plugin-transform-exponentiation-operator")
	]
};
