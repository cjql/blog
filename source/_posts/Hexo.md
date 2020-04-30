---
title: Hexo
date: 2050-12-25
tags: [计算机,计算机网络]
---
记录本站所采用的主题的改动历史。学习和记录hexo的相关配置和操作。
主博客用的是Yelee主题，修改了UI，使其比较符合自己的口味。[子博客](https://cjql.github.io/en)用的是landscape主题，修改了bannar、浮悬导航及部分其他UI，增加了目录和到顶部按钮。抽离出自定义子博客模块。自此，每个新子博客用一条命令，三五个动作就可以部署成功了，扩展性大幅度增强。
<!-- more -->
## 累积
看配色方案：准备冷暖两套六级渐变色
首页如何列表显示：不需要了
文章宽度如何调宽：检查
如何调整文章显示顺序：top和按更新时间显示
如何加入分类
## 资源
``` bash
$ hexo new "My New Post"
$ hexo server
$ hexo generate
$ hexo deploy
```
https://hexo.io/
https://hexo.io/docs/
https://hexo.io/docs/troubleshooting.html
https://github.com/hexojs/hexo/issues 
https://xuanwo.io/2014/08/14/hexo-usual-problem/ 常见问题

http://moxfive.xyz/2015/08/20/blog-building/ moxfive的建站日志
http://moxfive.xyz/ moxfive个人网站
https://github.com/MOxFIVE  
http://www.w3school.com.cn/cssref/css_colorsfull.asp 十六进制值排序颜色
https://www.sioe.cn/yingyong/yanse-rgb-16/ 在线颜色转换
## 迁移
1. 检查[安装](https://hexo.io/zh-cn/docs/)
2. `hexo init`
3. 将 https://github.com/cjql/blog 克隆并复制覆盖到仓库目录
4. `npm install hexo-deployer-git --save`
5. `npm install --save hexo-generator-search`
6. 在/source/_posts中新增文章
7. `hexo g`
8. `hexo d`
9. `hexo s`
10. 
## 排错
```
检查_config.yml的空格
Template render error
```
https://hexo.io/docs/troubleshooting#Escape-Contents
https://github.com/hexojs/hexo/issues/2384
https://hexo.io/docs/troubleshooting#Template-render-error

## 历次修改
### 扩展自定义主题及子目录博客快速部署
1. 打开git，在git中输入以下命令
```bash
hexo init <subrepo>&& cd <subrepo> &&(git clone https://github.com/cjql/hexosub;npm install hexo-deployer-git --save)
```
2. 将`hexosub文件夹里的_config.yml文件、themes文件夹、scaffolds文件夹`复制到`<subrepo>文件夹`并替换
3. 删除hexosub文件夹
4. 打开<subrepo>/_config.yml，在里面找到下面几行：
```yml
url: http://yoursite.com/<subrepo>
root: /<subrepo>/

deploy:
  type: 'git'
  repository: https://github.com/cjql/<subrepo>
  branch: master
```
将<subrepo>替换为你的子目录对应的GitHub上的仓库的名称。
### 全局添加到顶部按钮
http://howiefh.github.io/2014/02/07/hexo-note/
https://www.iconfont.cn/search/index?q=%E7%AE%AD%E5%A4%B4%20%E4%B8%8A
### 在子目录里部署GitHub博客
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

参考连接： https://www.jianshu.com/p/18356b0a7494

## 更新日志
### 查看文章更新
[themes\iyelee\layout\_partial\post\copyright.ejs](https://github.com/cjql/blog/edit/master/themes/iyelee/layout/_partial/post/copyright.ejs)
非常值得细看，参考[moxfive](http://moxfive.xyz/2016/01/10/hexo-post-version-control/)
### 头像和icon
[themes\iyelee\source\resources](https://github.com/cjql/blog/tree/master/themes/iyelee/source/resources)
### 设置背景图案
[themes\iyelee\source\background](https://github.com/cjql/blog/tree/master/themes/iyelee/source/background)
### 社区链接图标
[themes\iyelee\source\img](https://github.com/cjql/blog/tree/master/themes/iyelee/source/img)
### 修改头像背景
[themes\iyelee\source\css\_partial\main.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_partial/main.styl)
### 标题字体颜色
[themes\iyelee\source\css\_partial\customise\heading.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_partial/customise/heading.styl)
似乎会覆盖themes\iyelee\source\css\_extend.styl文件
### 标题字体大小
[themes\iyelee\source\css\_extend.styl](https://github.com/cjql/blog/edit/master/themes/iyelee/source/css/_extend.styl)
### 主题配置文件
[blog\themes\iyelee\_config.yml](https://github.com/cjql/blog/edit/master/themes/iyelee/_config.yml)
### 站点配置文件
[blog\_config.yml](https://github.com/cjql/blog/edit/master/_config.yml)
2018年12月10日
发现一个 bug ，hexo 的 post 里面不能建立一个名为 tags 的文章。