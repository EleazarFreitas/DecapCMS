module.exports = function(eleventyConfig) {
  // Copia a pasta admin para o diretório de saída (_site)
  eleventyConfig.addPassthroughCopy("admin");
  
  // Copia a pasta uploads para o diretório de saída (_site)
  eleventyConfig.addPassthroughCopy("uploads");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
