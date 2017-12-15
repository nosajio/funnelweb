require('dotenv').config();
const debug = require('debug')('funnelweb:run');

// Some globals
const CONFIGS_DIR = 'configs';

// Setup the pipeline
const { loadConfigs, initSpider } = require('./spider');


// Boot up and plug streams together
const run = () => {
  // 1: Configure the stream
  const mainStream = null;
  
  // 2: Load config files, and start up the spiders
  loadConfigs(CONFIGS_DIR)
    .then(configs => 
      Promise.all( configs.map(conf => initSpider(conf, mainStream)) )
    )
    .then(() => {
      debug('All spiders have finished running.');
    })
}

// Boot the crawler
run();
