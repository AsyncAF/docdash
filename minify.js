var minify = require('html-minifier').minify;

module.exports = function minify(html) {
  return minify(html, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    maxLineLength: 32 * 1024,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true
  });
};
