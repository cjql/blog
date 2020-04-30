---
title: n-ary-tree-postorder-traversal
date: 1998-01-01
---
## 简述
后序遍历 N 叉树
n-ary-tree-postorder-traversal [英文](https://leetcode.com/problems/n-ary-tree-postorder-traversal/) [中文](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)
## 收获
![二叉树](https://leetcode.com/problems/n-ary-tree-postorder-traversal/Figures/145_transverse.png)
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
    def postorder(self, root):
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
            stack.extend(root.children)
                
        return output[::-1]
```