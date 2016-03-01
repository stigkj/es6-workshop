/*global module */
// Karma configuration
// Generated on Mon Mar 24 2014 14:05:07 GMT+0100 (CET)

require('webpack');

var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.loaders.push({
    test: /\.js$/,
    loader: 'babel-loader?plugins=rewire'
});
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'referee','sinon'],

        files: [
            "node_modules/babel-polyfill/dist/polyfill.min.js",
            "helper/test-helper.js",
            "tests/*Test.js"
        ],

        // list of files to exclude
        exclude: [

        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests/*Test.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true,
            stats: {
                colors: true
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit'],

        junitReporter: {
            outputFile: 'build/test-results/karma-test-results.xml'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-mocha',
            'karma-referee',
            'karma-phantomjs-launcher',
            'karma-sinon',
            'karma-junit-reporter'
        ]
    });
};
