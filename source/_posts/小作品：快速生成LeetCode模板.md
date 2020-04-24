---
title: 小作品：快速生成LeetCode模板
date: 2019-12-20
tags: [小作品]
---
想提高刷题效率，重复工作留给计算机吧

小作品：[localhost](http://localhost:8888/notebooks/post/genLeetCode.ipynb) [nbviewer](https://nbviewer.jupyter.org/github/cjql/myjupyter/blob/master/post/genLeetCode.ipynb) [github](https://github.com/cjql/myjupyter/blob/master/post/genLeetCode.ipynb)
<!-- more -->
# 要点
## 
# 点评
# 需求分析
# 清单
## 输入是什么
## 给定常量是什么
## 输出是什么
# 问题
# 源码
```py
title = 'univalued-binary-tree'
tags = '[leetcode]'
abstract = title
dire = 'D:\\blog\\source\\_posts\\'
head = '''---
title: TITLE
tags: TAGS
---
TITLE [英文](https://leetcode.com/problems/TITLE/) [中文](https://leetcode-cn.com/problems/TITLE/)
<!-- more -->
## 简述

## 代码
```py

```
## 收获
'''
head = head.replace('TITLE',title)
head = head.replace('TAGS',tags)
fn = dire + title + '.md'
with open(fn,'a+',encoding='utf8') as f:
    f.write(head)
print('ok')
```
