const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      path.resolve(__dirname, './src/app.jsx')
	]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: false
  },
  plugins: [],
  module: {
    rules: [
      {
        test: (m) => { return /\.(js|jsx)$/.test(m) },
        exclude: (m) => { return /node_modules/.test(m) },
        use: {
          loader: path.resolve(__dirname, './node_modules/babel-loader'),
          options: {
            presets: [
              path.resolve(__dirname, './node_modules/@babel/preset-env'),
              path.resolve(__dirname, './node_modules/@babel/preset-react')
            ]
          }
        }
      },
      {
        test: (m) => { return /\.css$/.test(m) },
        use: [
          path.resolve(__dirname, './node_modules/style-loader'),
          path.resolve(__dirname, './node_modules/css-loader')
        ]
      },
      {
        test: (m) => { return /\.(png|jp(e*)g|svg)$/.test(m) },
        use: [{
            loader: path.resolve(__dirname, './node_modules/url-loader'),
            options: { 
                limit: 8000,
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  }
};
