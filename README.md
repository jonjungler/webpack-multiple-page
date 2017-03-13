# webpack多页面工程化demo
# webpack-multiple-page
========

## 安装：
  <pre>npm install</pre>
## 运行：
  <pre>npm run dev</pre>
## 发布：
  <pre>npm run build</pre>
## 地址:
###index页
  <pre>http://localhost:8080/index/index.html</pre>
###category页
  <pre>http://localhost:8080/category/index.html</pre>
## 目录结构
<pre>
├─  .gitignore                 # 忽略无需git控制的文件  
├─  .gitattributes             # git描述
├─  package.json               # 项目配置
├─  README.md                  # 项目说明
├─  webpack.build.config.js    # build打包配置
├─  webpack.config.js          # webpack基本配置
├─  webpack.dev.config.js      # dev模式wenpack配置
|
├─  assets                     # 图片资源文件
│
├─  config                     # 配置文件目录
|       |
│       |_app.js                    # 页面html生成js文件
|       |
|       |_app-entry.js              # 页面chunk管理文件
|       |
|       |_config.js                 # build和dev环境基本配置
|       |
|       |_output-config.js          # chunks输出设置
|       |
|       |_path-config.js            # 文件相关目录设置
|       |
|       |_plugins-config.js         # wepack插件设置
|
│
├─  build                       # webpack dev 热更新 配置文件目录
|       |
│       |_dev-client.js             # 热更新本地设置
|       |
|       |_dev-server.js             # 热更新node相关配置
|       |
|       |_util.js                   # dev环境loader等配置
|       
│
│
├─  dist                        # 输出目录
|       |
│       |_assets                    # 图片
|       |
|       |_commons                   # 公共js+css
|       |
|       |_****                      # 目标页面
│
│
├─  psd                         # psd设计文档
|  
│
└─src                  # 开发目录
    │
    │_  apps              # 页面根目录
    |      |
    |      |_***              # 页面目录
    |           |
    |           |_ ***.ejs || ***.html  # 页面模版
    |           |
    |           |_ entry.js             # 页面chunk
    |           |
    |           |_ page.js              # 页面html模板配置
    |           |
    |           |_ style.less           # 页面less
    |      
    │_  components         # 组件根目录
    |      |
    |      |_***              # 组件目录（与页面目录一致）
    |  
    │_  js                 # js公共部分    
    |  
    │_  style              # CSS公共部分
    
</pre>


## 技术栈

webpack,
ejs,
express.Router,
webpack


## IE测试兼容版本

>= IE 7
