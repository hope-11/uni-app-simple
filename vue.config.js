const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'meta']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		]
	},
  transpileDependencies: ['luch-request']
}