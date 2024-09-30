const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      // Add other loaders/rules as needed
    ],
  },
  mode: 'development', // Change to 'production' for production builds
};
