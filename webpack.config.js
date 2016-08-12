const path = require('path');

module.exports={
  entry: './src/main.js',
  output:{
    path: path.resolve(__dirname+'/build'),
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude:['node_modules']
      }
    ]
  }
}
