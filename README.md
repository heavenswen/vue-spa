vue2+vuex+webpack2
单页程序webpack2配置

config说明：
编译 vue,es6,sass,合并模版js，压缩js文件,base64小图片,

npm 操作
<pre>
//下载依赖
<code>npm i</code>

<i>允许在测试服务器</i>
<p>npm run dev
//局域网地址 192.168.4.30 --host 192.168.4.30(去掉为127.0.0.1)
//webpack-dev-server --inline --hot --host 192.168.4.30

<i>发布版本</i>
<p>npm run build
</pre>
<i>文件说明
<p>src 前端程序
<p>-assets 外部资源
<p>--css css资源
<p>--img 图片资源
<p>-pages 页面文件
<p>-view 视图
<p>-container 主容器
<p>-components 组件
<p>dist 产出入口目录
<p>-js 入口
<p>-assets 外部资源
</pre>
