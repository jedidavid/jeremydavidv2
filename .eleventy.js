module.exports = function (eleventyConfig) {
  /* copies assets to output dir */
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  eleventyConfig.addCollection("featuredWork", function (collectionApi) {
    return collectionApi.getFilteredByTags("works", "featured");
  });

  /* Options */
  return {
    dir: {
      input: "src",
      includes: "_includes",
    },
  };
};
