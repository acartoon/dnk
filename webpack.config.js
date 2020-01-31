const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

const pages = [
  {name: 'aut', adress: 'aut'},
  {name: 'registration', adress: 'registration', },
  {name: 'index', adress: 'main-page/index'},
  {name: 'catalog', adress: 'catalog/catalog'},
  {name: 'card-baby', adress: 'card/card-baby'},
  {name: 'card-junior', adress: 'card/card-junior'},
  {name: 'card-men', adress: 'card/card-men'},
  {name: 'card', adress: 'card/card'},
  {name: 'basket', adress: 'basket'},
  {name: 'payment', adress: 'payment'},

  {name: 'delivery', adress: 'delivery'},
  {name: 'shops', adress: 'shops'},
  {name: 'contacts', adress: 'contacts'},

  {name: 'personal', adress: 'personal'},
  {name: 'order', adress: 'order'},
  {name: 'orders', adress: 'orders'},
  {name: 'club', adress: 'club'},

  // {name: 'about', adress: 'about'},
  {name: 'collaboration', adress: 'collaboration'},
  {name: 'certificates', adress: 'certificates'},
  {name: 'policy', adress: 'policy'},
  {name: 'stock', adress: 'stock'},
  {name: 'payment-info', adress: 'payment-info'},
  {name: 'return', adress: 'return'},
];

// let isProduction = (process.env.NODE_ENV == "production");

module.exports = {
  devtool: 'source-map',
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1,
      minChunks: 2
    }
  },
  entry: {
    // context: path.resolve(__dirname, 'src'),
    app: [
      './src/js/index.js',
      './src/js/owl.carousel.js',
      './src/js/offer-btn.js',
      './src/js/nav.js',
      './src/js/payment.js',
      './src/js/catalog.js',
      './src/js/accordion.js',
      './src/js/modal.js',
      './src/js/card.js',
      './src/js/counter.js',
      './src/style/main.scss',
      // 'owl.carousel/dist/assets/owl.carousel.css',
    ],
    main: './src/js/main-page.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 8083,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loaders: [{
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty": true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ],
        })
      },
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    ...pages.map(page => new HtmlWebpackPlugin({
        filename: `${page.name}.html`,
        template: `./src/pages/${page.adress}.pug`,
    })),
    new HtmlWebpackPlugin({
        filename: `about.html`,
        template: `./src/pages/about.pug`,
        chunks: ["main"],
    }),
    new ExtractTextPlugin(
      './style/style.css'
    ),
    new CopyWebpackPlugin([{
      from: './src/img',
      to: './img'
    }]),
  ]
}
