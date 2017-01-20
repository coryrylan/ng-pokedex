// ng new test-project
// npm install --save-dev webpack-bundle-analyzer
// npm install --save-dev webpack-stats-plugin
// ng build --prod --aot --no-sourcemap

// Then replace node_modules/angular-cli/models/webpack.config.js
// with the following altered webpack config:

"use strict";
var webpack_build_typescript_1 = require('./webpack-build-typescript');
var webpackMerge = require('webpack-merge');
var config_1 = require('./config');
var webpack_build_common_1 = require('./webpack-build-common');
var webpack_build_development_1 = require('./webpack-build-development');
var webpack_build_production_1 = require('./webpack-build-production');
var webpack_build_mobile_1 = require('./webpack-build-mobile');
var StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
var NgCliWebpackConfig = (function () {
    function NgCliWebpackConfig(ngCliProject, target, environment, outputDir, baseHref, i18nFile, i18nFormat, locale, isAoT, sourcemap, vendorChunk, verbose, progress, deployUrl, outputHashing, extractCss) {
        if (isAoT === void 0) { isAoT = false; }
        if (sourcemap === void 0) { sourcemap = true; }
        if (vendorChunk === void 0) { vendorChunk = false; }
        if (verbose === void 0) { verbose = false; }
        if (progress === void 0) { progress = true; }
        if (extractCss === void 0) { extractCss = true; }
        this.ngCliProject = ngCliProject;
        this.target = target;
        this.environment = environment;
        var appConfig = config_1.CliConfig.fromProject().config.apps[0];
        var projectRoot = this.ngCliProject.root;
        appConfig.outDir = outputDir || appConfig.outDir;
        appConfig.deployUrl = deployUrl || appConfig.deployUrl;
        var baseConfig = webpack_build_common_1.getWebpackCommonConfig(projectRoot, environment, appConfig, baseHref, sourcemap, vendorChunk, verbose, progress, outputHashing, extractCss);
        var targetConfigPartial = this.getTargetConfig(projectRoot, appConfig, sourcemap, verbose);
        if (appConfig.mobile) {
            var mobileConfigPartial = webpack_build_mobile_1.getWebpackMobileConfigPartial(projectRoot, appConfig);
            var mobileProdConfigPartial = webpack_build_mobile_1.getWebpackMobileProdConfigPartial(projectRoot, appConfig);
            baseConfig = webpackMerge(baseConfig, mobileConfigPartial);
            if (this.target == 'production') {
                targetConfigPartial = webpackMerge(targetConfigPartial, mobileProdConfigPartial);
            }
        }
        var config = webpackMerge(baseConfig, targetConfigPartial);
        if (appConfig.main) {
            var typescriptConfigPartial = isAoT
                ? webpack_build_typescript_1.getWebpackAotConfigPartial(projectRoot, appConfig, i18nFile, i18nFormat, locale)
                : webpack_build_typescript_1.getWebpackNonAotConfigPartial(projectRoot, appConfig);
            config = webpackMerge(config, typescriptConfigPartial);
        }
        this.config = config;
    }
    NgCliWebpackConfig.prototype.getTargetConfig = function (projectRoot, appConfig, sourcemap, verbose) {
        var statWriter = new StatsWriterPlugin({
           fields: null,
		       stats: {chunkModules: true}
        });
		
		switch (this.target) {
            case 'development':
                var data = webpack_build_development_1.getWebpackDevConfigPartial(projectRoot, appConfig);
				if(typeof(data.plugins) === 'undefined') {
                 data['plugins'] = [];
                }
                data.plugins.push(statWriter);
				return data;
            case 'production':
                var data = webpack_build_production_1.getWebpackProdConfigPartial(projectRoot, appConfig, sourcemap, verbose);
				if(typeof(data.plugins) === 'undefined') {
                 data['plugins'] = [];
                }
                data.plugins.push(statWriter);
				return data;
			default:
                throw new Error("Invalid build target. Only 'development' and 'production' are available.");
        }
    };
    return NgCliWebpackConfig;
}());
exports.NgCliWebpackConfig = NgCliWebpackConfig;
//# sourceMappingURL=/Users/hansl/Sources/angular-cli/packages/angular-cli/models/webpack-config.js.map