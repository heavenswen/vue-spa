//vue SPA 生产环境
const path = require('path')
const webpack = require('webpack')
	//产出地址
const release = 'dist/'

module.exports = {
	entry: {
		build: './src/index.js',
	},
	output: {
		//path: path.resolve(__dirname, 'dist'),
		path: __dirname + "/" + release, //__dirname当前文件夹
		publicPath: release, //server
		filename: 'js/[name].js?[hash]'
	},
	resolve: {
		modules: [path.resolve(__dirname, release), "node_modules"]
	},
	module: {
		rules: [{
			//编译vue
			test: /\.vue$/,
			use: 'vue-loader'
		}, {
			//es6 编译
			test: /\.js$/,
			use: 'babel-loader',
			//排除
			exclude: /node_modules/
		}, {
			//编译sass
			test: /\.(scss|sass)$/,
			use: ["style-loader", "css-loader", "sass-loader"]
		}, {
			//加载css 到页面上
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		}, {
			//图片链接处理
			test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
			exclude: /favicon\.png$/,
			use: [{
				loader: 'url-loader',
				//小于limit to base64
				options:{
					limit:10000,
					//产出地址 
					outputPath:"/assets/img/",
					//域名地址
					publicPath:release+"assets/img/",
					name:"[name].[ext]?[hash]"
				}
			}]
		}, ]
	},
	devServer: {
		port: 8010,
		//设置为真,如果你想从任意url访问开发服务器。
		historyApiFallback: true,
		noInfo: true,
		//设置这个如果你想启用gzip压缩的资产
		compress: true,
	},
	devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
		// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		//压缩js
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),

	])
}