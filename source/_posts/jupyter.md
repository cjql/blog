---
title: jupyter
tags: [python,jupyter,学习笔记,后续学习]
---

jupyter命令一览。
<!-- more -->
# 新习
## 2018年12月13日
### jupyter 输出去掉 `\n`
要 `print` 才出效果
https://stackoverflow.com/questions/43835171/print-multiple-line-string-in-jupyter-notebook
# 准备
## 官方网站
[官方网站](http://jupyter.org/install) 
## 安装
`pip install jupyter --user` 安装
`jupyter notebook` 进入笔记本
## 修改默认路径和浏览器
Windows默认在chrome里面打开：
1.命令行：jupyter notebook --generate-config
2.打开文件：jupyter_notebook_config.py
3.在文件头部添加:
```py
import webbrowser
webbrowser.register('chrome', None, webbrowser.GenericBrowser(u'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'))
c.NotebookApp.browser = 'chrome'
```
路径需要酌情调整。
# 在nbviewer中查看
github文件的网址中把`https://github.com` 替换为`https://nbviewer.jupyter.org/github` 。
注意斜线个数。[典型示例](https://nbviewer.jupyter.org/github/cjql/myjupyter/blob/master/MySQL.ipynb)：`https://nbviewer.jupyter.org/github/cjql/myjupyter/blob/master/MySQL.ipynb`
[官方网站](http://nbviewer.jupyter.org/faq)

# 格式转换: html、md、pdf、letex
## 参考链接
[格式转换](https://cloud.tencent.com/developer/article/1008571)
## 后续
[官方文档](https://ipython.org/ipython-doc/3/notebook/nbconvert.html) 
[腾讯云入门教程1](https://cloud.tencent.com/developer/article/1008490) [英文参考文献](https://hub.packtpub.com/getting-started-jupyter-notebook-part-1/)
[腾讯云入门教程2](https://cloud.tencent.com/developer/article/1008493) [英文参考文献](https://hub.packtpub.com/getting-started-jupyter-notebook-part-2/)
## 命令式

命令|功能
--|--
jupyter nbconvert --to html notebook.ipynb|ipynb转为html格式
jupyter nbconvert --to html --template full notebook.ipynb|对生成的html格式进行配置，默认配置，提供完整的静态html格式，交互性更强。
jupyter nbconvert --to html --template basic notebook.ipynb|简化的html，用于嵌入网页、博客等，这不包括html标题。
jupyter nbconvert --to md notebook.ipynb|简单的Markdown格式输出，cell单元不受影响，代码cell缩进4个空格。
jupyter nbconvert --to letex notebook.ipynb|Letex导出格式，生成后缀名为NOTEBOOK_NAME.tex的文件。
jupyter nbconvert --to letex -template article notebook.ipynb|默认配置，Latex文章。
jupyter nbconvert --to letex -template report notebook.ipynb|Latex报告，提供目录和章节。
jupyter nbconvert --to letex -template basic notebook.ipynb|最基本的Latex输出，经常用来自定义配置。
jupyter nbconvert --to pdf notebook.ipynb|转换为pdf格式分模板配置与latex配置是一样的。需要提前安装xelatex。
sudo apt-get install texlive-full|方法是安装texLive套装，texlive-full的安装包有点大，约1G多。

## 面板式
ipynb转换为html、md、pdf等格式，还有另一种更简单的方法：在jupyter notebook中，选择`File->Download as`，直接选择需要转换的格式就可以了。需要注意的是，转换为pdf格式之前，同样要保证已经安装了xelatex。
