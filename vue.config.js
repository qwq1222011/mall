// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false,
//   devServer:{
//     host:'localhost',
//     port:8080,
//     proxy:{
//       '/api':{
//         target:'http://mall-pre.springboot.cn',
//         changeOrigin:true,
//         pathRewrite:{
//           '/api':''
//         }
//       }
//     }
//   }
// })
module.exports = {
  devServer:{
    host:'localhost',
    // port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    },
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  },
  lintOnSave:false,
}
