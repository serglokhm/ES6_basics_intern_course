mkdir js6_project
cd js6_project
npm init -y
npm i --save-dev webpack webpack-cli webpack-dev-server
npm i --save-dev babel-loader @babel/core @babel/preset-env

-- index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ES Project</title>
</head>
<body>
    <h4>IT WORKS</h4>
    <script src="bundle.js"></script>
</body>
</html>
--

mkdir app
cd app
-- main.js
console.log('Inside main.js');
--

-- package.json
    "scripts": {
        "build": "webpack-dev-server"
    },
--

-- webpack.config.js
const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
	},
    devServer: {
        port: 8000
    }
};
--

npm run build

open in browser http://127.0.0.1:8000