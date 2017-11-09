var WebpackIsomorphicToolsPlugin = require('weback-isomorphic-tools/plugin');

var config = {
  assets: {
    images: { extension: ['png'] },
    style_modules: {
      extensions: ['css', 'scss'],
      filter: function (module, regex, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
        }else{
          return regex.test(module.name);
        }
      },
      path: function(module,options,log){
        if(options.development){
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options,log);
        }else{
          return module.source;
        }
      }
    }
  }
};

module.exports = config;