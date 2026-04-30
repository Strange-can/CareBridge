require('dotenv').config();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addPassthroughCopy("fonts");
  
  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
      data: "../_data"
    }
  };
};
