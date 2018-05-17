var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]


// The browser configuration is going to take the code that lives at /src/browser/index.js, run it through the babel-loader (which will run it through the env and react presets), then spit out the modified, bundled code at /public/bundle.js. The __isBrowser__ line is going to add a property (__isBrowser__) to the global namespace so we know we’re rendering on the browser.
//
// The server configuration is similar. It’s going to take the code that lives at /src/server/index.js, run it through the same babel-loader, then it’s going to split it out at ./server.js. The externals line makes it so the servers node_modules aren’t bundled with it. target tells webpack to compile for usage in a “Node.js like environment” and also helps externals know what to ignore (built in node modules like path, fs, etc).
//
// tl;dr.

// The final client code is going to be put at public/bundle.js and the final server code will be put at at the root server.js.

// When we run npm run start in the command line, that will run webpack -w and nodemon server.js. webpack -w will watch our code and recompile when it when it changes and nodemon server.js will re-start our server whenever our server code changes.



//dirname: current directory, build: folder (you can call it whatever you wish, as dist, output, etc)
// el filename is our boundle: all the modules are boundled (recogidos) in just one file. Also in this case, you can call it whatever you wish

//Ricapitulating:
//Input: everything is ES6 or ES7 we wish to tranformate in ES5. In general your reference is only a js file where you can import elements from other js file (as in React)
//Output: as a bundle.js file. That's the file we wish to include in our html
//Module: is our babel-loader
