module.exports = function(eleventyConfig) {
  // Copy static assets directly to _site
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      input: "content",   // where our markdown content will go
      includes: "../_includes", // templates & layouts
      output: "_site"     // final build output
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
