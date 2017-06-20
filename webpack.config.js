//vue SPA 生产环境
const path = require('path')
const webpack = require('webpack')
//产出地址
const release = 'dist'

module.exports = {
	entry: {
		build: './src/index.js',
	},
	output: {
		//path.resolve获得 集体文件地址 加快打包
		path: path.resolve(__dirname, release),
		//path: __dirname + "/" + release, //__dirname当前文件夹
		publicPath: release+'/', //server
		filename: 'js/[name].js?[hash]'//entry 对应生成js
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
			use: ["style-loader", "css-loader", 'postcss-loader', "sass-loader"]
		}, {
			//加载css 到页面上
			test: /\.css$/,
			use: ["style-loader", "css-loader", 'postcss-loader']
		},//images  
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			loaders: [
				'url-loader?limit=8192&outputPath=assets/img/&name=[name].[ext]?[hash]',
				{
					loader: 'image-webpack-loader',
					query: {
						progressive: true,
						optimizationLevel: 7,
						interlaced: false,
						pngquant: {
							quality: '65-90',
							speed: 4
						}
					}
				}
			]
		},
		{
			//fonts链接处理
			test: /\.(eot|ttf|woff|woff2)(\?.+)?$/,
			use: [{
				loader: 'url-loader',
				//小于limit to base64
				options: {
					limit: 8192,
					//产出地址 
					outputPath: "assets/fonts/",
					//域名地址
					//publicPath: release + "assets/fonts/",
					name: "[name].[ext]?[hash]"
				}
			}]
		},]
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

if (process.env.NODE_ENV === 'production') {
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