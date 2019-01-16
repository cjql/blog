---
title: search-in-a-binary-search-tree
tags: [leetcode,二叉树,搜索]
---
## 简述
在BST中找到节点值等于给定值的节点。
search-in-a-binary-search-tree [英文](https://leetcode.com/problems/search-in-a-binary-search-tree/) [中文](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/)
## 收获
1.`while`递归中的`return`
2.`temp = temp.left`的用法
## 后续
1.BST中父节点和子节点的值的大小关系是固定的吗
2.搜索不到则返回`NULL`是如何呈现的
<!-- more -->

## 代码
```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def searchBST(self, root, val):
        """
        :type root: TreeNode
        :type val: int
        :rtype: TreeNode
        """
        temp = root
        while temp:
            if temp.val == val:
                return temp
            elif temp.val > val:
                temp = temp.left
            else:
                temp = temp.right
```
