# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###修改index.js
下载完成后，需要将public文件夹下的index.js文件改成index.ejs,并且将webpack/bin/webpack.js中添加html: { template: '../public/index.ejs' }。

