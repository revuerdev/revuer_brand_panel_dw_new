module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        allowedHosts: 'all'
    }    
}