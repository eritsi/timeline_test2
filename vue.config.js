// module.exports = {
//   transpileDependencies: [
//     'vuetify'
//   ]
// }
module.exports = {
  "outputDir": "docs",
  "assetsDir": "./",
  "publicPath": "./",
  "transpileDependencies": [
    "vuetify"
  ],
  
  pages: {
    index: {
      entry: 'src/main.js', // 必須パラメータ
      title: "timeline",
      template: 'public/index.html'
    }
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  }
}
