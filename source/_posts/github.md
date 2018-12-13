---
title: github
tags: [github, wiki]
---
github学习笔记
<!-- more -->
# 学习历程
## Errors
### Updating the Git index failed.
参考：[stackoverflow](https://stackoverflow.com/questions/10573815/why-is-updating-the-git-index-failed-displayed)
> 再试试你这个罪魁祸首。
```
git config --global core.autocrlf false
```

```
Updating the Git index failed.  A rescan will be automatically started to resynchronize git-gui.

warning: LF will be replaced by CRLF in source/categories/index.md.
The file will have its original line endings in your working directory
```
#  watch、star和fork
## watch
该仓库的更新信息都会显示在用户的公开活动中。
## star
做书签用。反应仓库的受关注程度。判断仓库热门程度的指标
## fork
参与这个库开发的人
# code
仓库文件列表。简要说明和URL
## commit 当前分支的提交历史
## branches 分支列表
## releases 标签列表 
可以将标签加入时的文件以归档形势（zip、tar.gz）下载到本地。软件在升级时一般需要打标签。
https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE
像其他版本控制系统（VCS）一样，Git 可以给历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）。 在本节中，你将会学习如何列出已有的标签、如何创建新标签、以及不同类型的标签分别是什么。
## contributors pull requests被采纳的人数+作者
# issue
bug报告
功能添加
方向性讨论
Pull Request时会自动创建Issue
## 数字
**Open**状态的Issue数
# Pull Requests
列表查看并管理Pull Requests
## 数字
Open的Pull Requests数量
# wiki
提供页面描述功能。记录共享信息或软件文档。
# settings
当前仓库的设置。
# Insight
## SSH clone URL
克隆仓库时所需要的URL
## Referring sites
访客来之前访问的网站
## Pulse
显示该仓库最近的活动。issue和Pull Requests
## Graphs。似乎改成了Traffic
以图表形式显示该仓库的各项指标。
## network
以图表行政显示仓库当前的状态及fork出的状态。同时会显示成员列表。
# download zip 与git clone
download zip：单纯下载到本地，无法查看日志和对仓库进行修改
