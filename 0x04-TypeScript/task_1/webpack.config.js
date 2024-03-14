const path = require("path"); // Importing Node.js path module to work with file and directory paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importing HtmlWebpackPlugin to generate HTML files
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Importing CleanWebpackPlugin to remove/clean the build folder
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // Importing ForkTsCheckerWebpackPlugin for type checking TypeScript in a separate process

module.exports = {
    entry: "./js/main.ts", // Entry point of the application
    devtool: "inline-source-map", // Generating source maps for easier debugging
    module: {
        rules: [ // Rules for module handling
            {
                test: /\.tsx?$/, // Matching TypeScript files
                loader: 'ts-loader', // Using ts-loader to transpile TypeScript files
                options: {
                    transpileOnly: true // Enabling transpilation without type checking
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"] // Resolving file extensions for imports
    },
    devServer: {
        contentBase: "./dist" // Serving content from the 'dist' directory
    },
    plugins: [ // List of plugins to enhance webpack's functionality
        new ForkTsCheckerWebpackPlugin(), // Running type checking in a separate process
        new CleanWebpackPlugin(), // Cleaning the 'dist' directory before each build
        new HtmlWebpackPlugin({ // Generating HTML files with injected bundles
            title: "Development" // Setting title of the HTML page
        })
    ],
    output: {
        filename: "bundle.js", // Output bundle file name
        path: path.resolve(__dirname, "dist") // Output directory path
    }
};

