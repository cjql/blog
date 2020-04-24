---
title: Hexo
date: 2018-12-25
categories: [计算机,Web,Hexo]
---
## 0.1. 说明
记录本站所采用的主题的改动历史。学习和记录hexo的相关配置和操作。
## 0.2. 小记
主博客用的是Yelee主题，修改了UI，使其比较符合自己的口味。[子博客](https://cjql.github.io/en)用的是landscape主题，修改了bannar、浮悬导航及部分其他UI，增加了目录和到顶部按钮。抽离出自定义子博客模块。自此，每个新子博客用一条命令，三五个动作就可以部署成功了，扩展性大幅度增强。
<!-- more -->
# 1. todo
https://github.com/howiefh/hexo-theme-landscape-f/blob/master/layout/_partial/after-footer.ejs#L33
https://github.com/howiefh/hexo-theme-landscape-f/blob/master/layout/_partial/sidebar.ejs
https://github.com/howiefh/hexo-theme-landscape-f/blob/master/layout/_partial/article.ejs
https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/css/_variables.styl
https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/css/style.styl
https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/css/_partial/bottom-btn.styl
https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/css/_partial/toc.styl
http://howiefh.github.io/archives/
https://hexo.io/docs/asset-folders.html#Post-Asset-Folder
https://zalando-incubator.github.io/hexo-theme-doc/
https://chorer.github.io/ 暂时不用
https://raytaylorlin.github.io/
https://github.com/MOxFIVE/Markdown-Archives-Backup/blame/master/_posts/2015-08-20.blog-building.md
https://zhuqingguang.github.io/2017/08/16/adapting-two-layout/
toc：
https://orianna-zzo.github.io/sci-tech/2018-08/blog%E5%85%BB%E6%88%90%E8%AE%B013-%E5%A2%9E%E5%8A%A0%E4%B8%80%E4%B8%AAtoc%E4%BE%A7%E8%BE%B9%E6%A0%8F/
https://www.runoob.com/bootstrap/bootstrap-scrollspy-plugin.html
https://unnamed42.github.io/2016-09-10-Hexo%E6%8A%98%E8%85%BE%E7%AC%94%E8%AE%B0.html
# 2. 历次修改
## 2.1. 扩展自定义主题及子目录博客快速部署
1. 打开git，在git中输入以下命令
```bash
hexo init eg&& cd eg &&(git clone https://github.com/cjql/hexosub;npm install hexo-deployer-git --save)
```
2. 将`hexosub文件夹里的_config.yml文件、themes文件夹、scaffolds文件夹`复制到`eg文件夹`并替换
3. 删除hexosub文件夹
4. 打开eg/_config.yml，在里面找到下面几行：
```yml
url: http://yoursite.com/eg
root: /eg/

deploy:
  type: 'git'
  repository: https://github.com/cjql/eg
  branch: master
```
将eg替换为你的子目录对应的GitHub上的仓库的名称。
## 2.2. 全局添加到顶部按钮
http://howiefh.github.io/2014/02/07/hexo-note/
https://www.iconfont.cn/search/index?q=%E7%AE%AD%E5%A4%B4%20%E4%B8%8A
## 2.3. 在子目录里部署GitHub博客
https://hexo.io/docs/github-pages#Project-page
>Step1 在GitHub中准备仓库。
1. Create a new repository `<reponame>`
2. settings of reponame 
3. GitHub Pages.Source.master branch

>step2 获取博客环境文件夹
* 方案一 直接复制已部署的博客文件夹，删除_post里面的所有文件。
* 方案二 重头再来。在bash里依次输入下面几行命令：
```bash
hexo init my-blog
cd my-blog
npm install hexo-deployer-git --save
```
>step3 修改子目录配置
![](https://upload-images.jianshu.io/upload_images/7691672-10c91cc7e9e1f42c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)
![](https://upload-images.jianshu.io/upload_images/7691672-6de8aa1b0c8c5989.png?imageMogr2/auto-orient/strip|imageView2/2/w/1044/format/webp)

参考连接：
1. https://www.jianshu.com/p/18356b0a7494
## 2.4. 迁移
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
8. `hexo s`
# 3. 参考资料

主体|网址
--|--
hexo|[Hexo](https://hexo.io/) [Documentation](https://hexo.io/docs/) [Writing](https://hexo.io/docs/writing.html) [Server](https://hexo.io/docs/server.html) [Generating](https://hexo.io/docs/generating.html) [Deployment](https://hexo.io/docs/deployment.html)<br> [常见问题](https://xuanwo.io/2014/08/14/hexo-usual-problem/)  [Troubleshooting](https://hexo.io/docs/troubleshooting.html)  [GitHub](https://github.com/hexojs/hexo/issues) 
moxfive|[建站日志](http://moxfive.xyz/2015/08/20/blog-building/) [个人网站](http://moxfive.xyz/) [github](https://github.com/MOxFIVE)
颜色|[一览](http://www.w3school.com.cn/cssref/css_colorsfull.asp) [转换](https://www.sioe.cn/yingyong/yanse-rgb-16/)
花案|[特殊符号](http://www.haowangming.cc/teshufuhao/)

# 4. 遗留
## 4.1. 加油
看配色方案：准备冷暖两套六级渐变色
首页如何列表显示
文章宽度如何调宽
如何调整文章显示顺序
top和按更新时间显示
如何加入分类
## 4.2. 思考
如何为姐姐快速部署一个呢？
>所需素材：六张背景图，一张图标，日志文件

# 5. 年12月12日
## 5.1. 查看文章更新
[themes\iyelee\layout\_partial\post\copyright.ejs](https://github.com/cjql/blog/edit/master/themes/iyelee/layout/_partial/post/copyright.ejs)
非常值得细看，参考[moxfive](http://moxfive.xyz/2016/01/10/hexo-post-version-control/)
## 5.2. 头像和ico
[themes\iyelee\source\resources](https://github.com/cjql/blog/tree/master/themes/iyelee/source/resources)
## 5.3. 设置背景图案
[themes\iyelee\source\background](https://github.com/cjql/blog/tree/master/themes/iyelee/source/background)
## 5.4. 社区链接图标
[themes\iyelee\source\img](https://github.com/cjql/blog/tree/master/themes/iyelee/source/img)
## 5.5. 修改头像背景
[themes\iyelee\source\css\_partial\main.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_partial/main.styl)
## 5.6. 标题字体颜色
[themes\iyelee\source\css\_partial\customise\heading.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_partial/customise/heading.styl)
似乎会覆盖themes\iyelee\source\css\_extend.styl文件
## 5.7. 标题字体大小
[themes\iyelee\source\css\_extend.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_extend.styl)
## 5.8. 主题配置文件
[blog\themes\iyelee\_config.yml](https://github.com/cjql/blog/edit/master/themes/iyelee/_config.yml)
## 5.9. 站点配置文件
[blog\_config.yml](https://github.com/cjql/blog/edit/master/_config.yml)
2018年12月10日
发现一个 bug ，hexo 的 post 里面不能建立一个名为 tags 的文章。
# 6. 排错
> - 检查_config.yml的空格
## 6.1. Template render error
https://hexo.io/docs/troubleshooting#Escape-Contents

# 7. 设计相关书单
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
# 8. 官方指引
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## 8.1. Quick Start

### 8.1.1. Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### 8.1.2. Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### 8.1.3. Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### 8.1.4. Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)
