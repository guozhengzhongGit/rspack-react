const { defineConfig } = require('@rspack/cli');

const path = require('path');
console.log(process.env.NODE_ENV);
console.log(process.env.BUILD_TARGET);
const isProduction = process.env.NODE_ENV === 'production';
module.exports = defineConfig({
  context: __dirname,
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: './src/index.jsx',
  },
  builtins: {
    html: [{ template: './src/template.html', inject: 'body' }],
    presetEnv: {
      mode: 'usage',
      targets: ['supports es6-module'],
      coreJs: '3',
    },
    progress: true,
  },
  output: {
    filename: '[contenthash].bundle.js',
    crossOriginLoading: 'anonymous',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
            {
            test: /\.(jpe?g|png|gif|svg)$/i,
            type: 'asset',
          },
          {
            test: /\.jsx$/,
            use: {
              loader: 'builtin:swc-loader',
              options: {
                sourceMap: true,
                jsc: {
                  parser: {
                    syntax: 'ecmascript',
                    jsx: true,
                  },
                  transform: {
                    react: {
                      pragma: 'React.createElement',
                      pragmaFrag: 'React.Fragment',
                      throwIfNamespace: true,
                      development: false,
                      useBuiltins: false,
                    },
                  },
                  "target": "es2022",
                },
              },
            },
            type: 'javascript/auto',
          },
    ],
  },
  resolve: {
    alias: {
      'core-js': require('path').dirname(require.resolve('core-js')),
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    client: {
      logging: 'log',
      overlay: true,
      progress: true,
    },
    port: 7077,
    historyApiFallback: true,
    // 将 /api 代理到 http://localhost:3000
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  target: 'web',
  stats: {
    colors: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 20000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        commonVendors: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)/,
          name: 'commonVendors',
          chunks: 'all',
          priority: -10,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -20,
        },
        default: {
          minChunks: 2,
          priority: -30,
          reuseExistingChunk: true,
        },
      },
    }
  },
});