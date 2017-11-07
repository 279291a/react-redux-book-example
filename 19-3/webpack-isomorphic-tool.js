var WebpackIsomophicToolsPlugin = require('webpack-isomorphic-tools/plugin');

var config = {
  assets: {
    images: { extensions: ['png'] },
    style_modules: {
      extensions: ['css'],
      filter: function (module, regex, options, log) {
        return WebpackIsomophicToolsPlugin.style_loader_filter(module, regex, options, log);
      },
      path: function (module, options, log) {
        return WebpackIsomophicToolsPlugin.style_loader_path_extractor(module, options, log);
      },
      parser: function (module, options, log) {
        return WebpackIsomophicToolsPlugin.css_module_loader_parse(module, options, log)；
      }
    }
  }
}

module.exports = config;