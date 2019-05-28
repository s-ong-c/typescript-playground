const path = require('path');

const resolve = dir => path.join(__dirname, dir);
module.exports = {
    lintOnSave: false,
    chainWebpack: (config) =>{
        //config.resolve.alias.set('*', resolve('src/styles'));
    },
    // Change build paths to make them Maven compatible
    // see https://cli.vuejs.org/config/
    outputDir: 'target/dist',
    assetsDir: 'static',
    css: {
        modules: false,
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
              //  data: '@import "~@/utils.scss";',
            },
            // pass Less.js Options to less-loader
        },
    },
    // proxy all webpack dev-server requests starting with /api
    // to our Spring Boot backend (localhost:8088) using http-proxy-middleware
    // see https://cli.vuejs.org/config/#devserver-proxy
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:8081',
    //             ws: true,
    //             changeOrigin: true
    //         }
    //     }
    // },
};