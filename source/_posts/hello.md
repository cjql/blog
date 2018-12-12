---
title: hello
---
个人建站历程留影。邂逅了 MOxFIVE ，流连忘返不可收拾。一口气魔改到令自己还算满意。中间修复了 GitHub 的图标不能显示的 bug ，好不高兴。榜样在前，没有理由不好好学习。
<!-- more -->

# 参考资料
主体|网址
--|--
hexo|[Hexo](https://hexo.io/) [Documentation](https://hexo.io/docs/) [Writing](https://hexo.io/docs/writing.html) [Server](https://hexo.io/docs/server.html) [Generating](https://hexo.io/docs/generating.html) [Deployment](https://hexo.io/docs/deployment.html)<br> [常见问题](https://xuanwo.io/2014/08/14/hexo-usual-problem/)  [Troubleshooting](https://hexo.io/docs/troubleshooting.html)  [GitHub](https://github.com/hexojs/hexo/issues) 
moxfive|[建站日志](http://moxfive.xyz/2015/08/20/blog-building/) [个人网站](http://moxfive.xyz/) [github](https://github.com/MOxFIVE)
颜色|[一览](http://www.w3school.com.cn/cssref/css_colorsfull.asp) [转换](https://www.sioe.cn/yingyong/yanse-rgb-16/)
花案|[特殊符号](http://www.haowangming.cc/teshufuhao/)

# 遗留
## 加油
看配色方案：准备冷暖两套六级渐变色
首页如何列表显示
## 思考
如何为姐姐快速部署一个呢？
>所需素材：六张背景图，一张图标，日志文件
```
git config和密钥
```

# 2018年12月12日
## 用到过的命令
```
npm install hexo-deployer-git --save
npm install --save hexo-generator-search
```
## 查看文章更新
[themes\iyelee\layout\_partial\post\copyright.ejs](https://github.com/cjql/blog/edit/master/themes/iyelee/layout/_partial/post/copyright.ejs)
非常值得细看，参考[moxfive](http://moxfive.xyz/2016/01/10/hexo-post-version-control/)
## 头像和ico
[themes\iyelee\source\resources](https://github.com/cjql/blog/tree/master/themes/iyelee/source/resources)
## 设置背景图案
[themes\iyelee\source\background](https://github.com/cjql/blog/tree/master/themes/iyelee/source/background)
## 社区链接图标
[themes\iyelee\source\img](https://github.com/cjql/blog/tree/master/themes/iyelee/source/img)
## 修改头像背景
[themes\iyelee\source\css\_partial\main.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_partial/main.styl)
## 标题字体颜色
[themes\iyelee\source\css\_partial\customise\heading.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_partial/customise/heading.styl)
似乎会覆盖themes\iyelee\source\css\_extend.styl文件
## 标题字体大小
[themes\iyelee\source\css\_extend.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_extend.styl)
## 主题配置文件
[blog\themes\iyelee\_config.yml](https://github.com/cjql/blog/edit/master/themes/iyelee/_config.yml)
## 站点配置文件
[blog\_config.yml](https://github.com/cjql/blog/edit/master/_config.yml)
## 开始搭建
保留以下文件即可。
![image.png](https://upload-images.jianshu.io/upload_images/6908911-fad84d4707cb74aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
# 排错
> - 检查_config.yml的空格
