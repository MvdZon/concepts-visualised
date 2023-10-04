module.exports = function (eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/fonts/");
    eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
    eleventyConfig.addPassthroughCopy('./src/js/');

    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };