const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  // Configura suporte para arquivos YAML
  eleventyConfig.addDataExtension("yml, yaml", contents => yaml.load(contents));

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
