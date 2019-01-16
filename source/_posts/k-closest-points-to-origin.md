---
title: k-closest-points-to-origin
tags: [leetcode,排序]
---
## 简述
一系列二维坐标值放入列表中，求出K个离原点最近的坐标值。
k-closest-points-to-origin [英文](https://leetcode.com/problems/k-closest-points-to-origin/) [中文](https://leetcode-cn.com/problems/k-closest-points-to-origin/)
## 收获
1.多维下的sort
2.lambda的用法
3.列表的切片
<!-- more -->

## 代码
```py
class Solution:
    def kClosest(self, points, K):
        """
        :type points: List[List[int]]
        :type K: int
        :rtype: List[List[int]]
        """
        points.sort(key = lambda P:P[0]**2 + P[1]**2)
        return points[:K]
```
