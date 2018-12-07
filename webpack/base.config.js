const resolve = require('path').resolve;

function createBaseConfig(env){
  return {
    entry: resolve(env.base, 'app/index.js'),
    resolve: {
      alias: {
        Actions:    resolve(env.base, 'app/actions/'),
        Api:        resolve(env.base, 'app/api/'),
        CommonComponents: resolve(env.base, 'app/common-components/'),
        Components: resolve(env.base, 'app/components/'),
        Config:     resolve(env.base, 'app/config/'),
        Reducers:   resolve(env.base, 'app/reducers/'),
        Selectors:  resolve(env.base, 'app/reducers/'),
        Utils:      resolve(env.base, 'app/utils/'),
        //Store:      resolve(env.base, 'app/store/'),
        //Loaders:    resolve(env.base, 'loaders'),
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules:[{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }]
    },
  };
}


module.exports = createBaseConfig;
