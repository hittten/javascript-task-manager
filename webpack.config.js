const path = require('path');

module.exports = {
  mode: 'development', // see https://webpack.js.org/configuration/mode/
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
