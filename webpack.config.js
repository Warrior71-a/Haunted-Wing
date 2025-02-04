const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'compiled.js',
    path: path.resolve(__dirname, 'out'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
};