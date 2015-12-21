var compressor = require('node-minify');

new compressor.minify({
  type: 'yui-js',
  fileIn: 'core/jquery.shapeshift.js',
  fileOut: 'core/jquery.shapeshift.min.js',
  callback: function(err, min){
  }
});