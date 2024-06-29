const path = require('path');

module.exports = {
  mode: 'production', // or 'production'
  entry: {
    index: './index',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].pack.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
