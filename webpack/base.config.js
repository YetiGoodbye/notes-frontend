const resolve = require('path').resolve;

function createBaseConfig(env){
  return {
    entry: resolve(env.base, 'app/index.js'),
    resolve: {
      alias: {
        Components: resolve(env.base, 'app/components/'),
        Actions:    resolve(env.base, 'app/actions/'),
        Reducers:   resolve(env.base, 'app/reducers/'),
        Config:     resolve(env.base, 'app/config/'),
        Utils:      resolve(env.base, 'app/utils/'),
        Store:      resolve(env.base, 'app/store/'),
        Selectors:  resolve(env.base, 'app/selectors/'),
        Loaders:    resolve(env.base, 'loaders'),
      },
      extensions: ['.js', '.jsx'],
    }
  };
}


module.exports = createBaseConfig;
