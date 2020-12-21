const { override, addLessLoader } = require('customize-cra');

module.exports = override( //function override(config, env) {
  addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': 'pink' },
    // lessOptions: {
    // },
  })


  //config = rewireLess.withLoaderOptions({
  //        javascriptEnabled: true,
  //})(config, env);

  //return config;
);