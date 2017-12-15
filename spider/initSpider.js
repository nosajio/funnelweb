const phantom = require('phantom');

const initSpider = async (config, stream) => {
  const browser = await phantom.create();
  const page = await browser.createPage();
  console.log(page);
  return;
}

module.exports = initSpider
