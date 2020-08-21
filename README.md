# Vuejs_up_and_running_code
《Vue.js快跑：构建触手可及的高性能Web应用》示例代码
1. 从《Vue.js快跑：构建触手可及的高性能Web应用》书中抄录的代码，仅做本人学习练习使用，不对项目的完整性负责。
2. 代码均从原书中抄录，仅添加必要的html容器部分，尽量使代码片段可独立运行。
3. 
# 引用项目
1. Drozerah/VueJS-up-and-running  https://github.com/Drozerah/VueJS-up-and-running
2. freebz/Vue.js-Up-and-Running  https://github.com/freebz/Vue.js-Up-and-Running

# mock使用
1. 搭建json-server
    全局安装  `$ npm install -g json-server`

2. 运行服务
`$ npm run mock `

# 填坑记录
1. 原本想直接做单独完整的html文件，点开就可运行。第一个例子从后台获取数据加载到页面上就遇到了问题。先想直接从某个可以访问的网站抓点数据，实现效果就行。但遇到了跨域问题。最后使用搭建mock server的方式实现访问。 