const debug = require('debug')('funnelweb:loadConfigs');
const error = require('debug')('funnelweb:error:loadConfigs');
const fs = require('fs');
const path = require('path');


const loadConfigs = configsDir => new Promise(resolve => {
  debug('Loading configs');
  fs.readdir(configsDir, 'utf8', (err, files) => {
    if (err) throw err;
    
    // Only allow .js files for configs
    const jsFiles = files.filter(f => f.includes('.js'));
    if (! jsFiles.length) {
      throw new Error(`No config files found inside of ${configsDir}`);
    }
    
    // Map the config files to a containing object
    const configs = jsFiles.map(f => ({
      file: path.resolve(configsDir, f),
      body: require( path.resolve(configsDir, f) ),
    }));
    
    resolve(configs);
  });
});


module.exports = loadConfigs
