const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', //실서비스:production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  //★중요★
  entry: {
    app: ['./client'], //import를 했기 때문에 WordRelay를 넣을 필요 없음
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 10% in KR'], // browserslist
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-refresh/babel',
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],

  output: {
    path: path.join(__dirname, 'dist'), //폴더이름 합치기
    filename: 'app.js',
  }, //출력

  devServer: {
    publicPath: '/dist',
    hot: true,
  },
};
