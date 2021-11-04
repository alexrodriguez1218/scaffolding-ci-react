const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'app.bundle.js',
    publicPath: 'http://localhost:3000/bundles/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  performance: {
    hints: false
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true
  },
  devtool: 'inline-source-map'
}
