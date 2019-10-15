---
title: hello
tags: [后续学习]
---
个人建站历程留影。
<!-- more -->
# 迁移
1. 检查[安装](https://hexo.io/zh-cn/docs/)
`
git version
node -v
hexo -v
`
若是hexo未安装：建io文件夹，进入io并在其下gitbash'npm install -g hexo-cli'。【io是要部署blog的文件夹，自己随意命名即可，保持一致就好】
1. `hexo init`
2. 将 https://github.com/cjql/blog 克隆并复制覆盖到io文件夹
3. `npm install hexo-deployer-git --save`
4. `npm install --save hexo-generator-search`
5. 在io/source/_posts中新增文章
6. `hexo g`
7. `hexo d`
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
文章宽度如何调宽
如何调整文章显示顺序
top和按更新时间显示
如何加入分类
## 思考
如何为姐姐快速部署一个呢？
>所需素材：六张背景图，一张图标，日志文件

# 2018年12月12日
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

# 排错
> - 检查_config.yml的空格

# 设计相关书单
ISBN|Date|pages|price|author|title
-|-|-|-|-|-
9787533543341|2013-8-1|140|CNY 29.80|理想·宅|[创意家居客厅造价与材料注释系列](https://book.douban.com/subject/30197610/)
9787533543372|2013-8-1|140|CNY 29.80|理想·宅|[创意家居客厅造价与材料注释系列](https://book.douban.com/subject/30197611/)
9787533543358|2013-7-1|140|CNY 29.80|理想·宅|[创意家居客厅造价与材料注释系列](https://book.douban.com/subject/30197612/)
9787533543365|2013-8-1|140|CNY 29.80|理想·宅|[创意家居客厅造价与材料注释系列](https://book.douban.com/subject/30197613/)
9780521128414|||||[reading William Blake](https://book.douban.com/subject/30197614/)
|||||[](https://book.douban.com/subject/30197615/)
9787533543310|2013-9-1|140|CNY 23.00|王双忠|[运动健身丛书](https://book.douban.com/subject/30197616/)
9787533552862|2017-8-1|30|CNY 32.00|哈皮童年|[中华传统经典故事绘本](https://book.douban.com/subject/30197617/)
|||||[](https://book.douban.com/subject/30197618/)
9781442496910|2014|||Jordan Quinn|[The Kindom of Wrenly 1](https://book.douban.com/subject/30197619/)