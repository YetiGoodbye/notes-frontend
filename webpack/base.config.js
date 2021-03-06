const resolve = require('path').resolve;

function createBaseConfig(env){
  return {
    entry: resolve(env.base, 'app/index.js'),
    resolve: {
      alias: {
        Config:           resolve(env.base, 'app/config/'),
        Utils:            resolve(env.base, 'app/utils/'),
        CommonComponents: resolve(env.base, 'app/common-components/'),
        Components:       resolve(env.base, 'app/components/'),
        Actions:          resolve(env.base, 'app/actions/'),
        Reducers:         resolve(env.base, 'app/reducers/'),
        Selectors:        resolve(env.base, 'app/reducers/'),
        Api:              resolve(env.base, 'app/api/'),
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules:[{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        },{
          loader: 'cleanup-debug-loader',
        }],
      }]
    },
  };
}


module.exports = createBaseConfig;
