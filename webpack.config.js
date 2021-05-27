const path = require('path');
module.exports = {

   mode : "production",
   entry : {
        main : "./src/App.js"
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : "bundle.js"
    },

    module : {
        rules : [
            {
                test: /\.js$|jsx/,

                exclude: "/node_modules/",
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : ['@babel/preset-env']
                        }
                    }
                ]
              },
              {
                  test : /\.css/i,

                  use : ["style-loader", "css-loader"]
              }
           
        ]
    },

    // devServer: {
    //         port : 3000,
    //  }
}