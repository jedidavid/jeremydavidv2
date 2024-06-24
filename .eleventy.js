const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  /* copies assets to output dir */
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/files");
  eleventyConfig.addPassthroughCopy({ static: "/" });

  eleventyConfig.addCollection("featuredWork", function (collectionApi) {
    return collectionApi.getFilteredByTags("works", "featured");
  });

  // Eleventy Image shortcode
  // https://www.11ty.dev/docs/plugins/image/
  eleventyConfig.addShortcode(
    "image",
    async function (src, alt, cls, widths, sizes) {
      let inputFilePath = path.join(eleventyConfig.dir.input, src);

      let metadata = await Image(inputFilePath, {
        widths: widths || ["auto"],
        formats: ["avif", "webp", "auto"],
        outputDir: "./_site/optimized/",
        urlPath: "/optimized/",
      });

      let imageAttributes = {
        alt,
        class: cls,
        sizes,
        loading: "lazy",
        decoding: "async",
      };
      return Image.generateHTML(metadata, imageAttributes);
    }
  );

  /* Options */
  return {
    dir: {
      input: "src",
      includes: "_includes",
    },
  };
};
