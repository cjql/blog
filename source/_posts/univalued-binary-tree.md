---
title: univalued-binary-tree
date: 1998-01-01
---
判断二叉树是否是单值二叉树。
univalued-binary-tree [英文](https://leetcode.com/problems/univalued-binary-tree/) [中文](https://leetcode-cn.com/problems/univalued-binary-tree/)
## 收获
1.层层推进的判断，调用自身
2.唯一性用集合长度来表示
3.`node.val` , `node.left` , `node.right`
<!-- more -->
## 简述
判断二叉树是否是单值二叉树
## 代码
```py
class Solution(object):
    def isUnivalTree(self, root):
        vals = []

        def dfs(node):
            if node:
                vals.append(node.val)
                dfs(node.left)
                dfs(node.right)

        dfs(root)
        return len(set(vals)) == 1
```