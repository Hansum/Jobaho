const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const compose = require("next-compose");

const sassConfig = {
  cssModules: false
};

module.exports = compose([
  [withImages],
  [withSass, sassConfig],
  {
    webpack: config => {
      return config;
    }
  }
]);
