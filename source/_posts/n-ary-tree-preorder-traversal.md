---
title: n-ary-tree-preorder-traversal
date: 2098-01-01
tags: [leetcode,N叉树,前序,遍历]
---
## 简述
前序遍历 N 叉树
n-ary-tree-preorder-traversal [英文](https://leetcode.com/problems/n-ary-tree-preorder-traversal/) [中文](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)
## 收获
list [官方文档](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) [菜鸟教程](http://www.runoob.com/python/python-lists.html)
<!-- more -->

## 代码
```py
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        if root is None:
            return []
        
        stack, output = [root, ], []            
        while stack:
            root = stack.pop()
            output.append(root.val)
            stack.extend(root.children[::-1])
                
        return output
        

```
