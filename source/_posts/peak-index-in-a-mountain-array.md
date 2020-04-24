---
title: peak-index-in-a-mountain-array
date: 2098-01-01
tags: [leetcode]
---
简述：求山形数组中峰值的下标。
peak-index-in-a-mountain-array [英文](https://leetcode.com/problems/peak-index-in-a-mountain-array/) [中文](https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/)
收获：遍历一下返回就OK。
<!-- more -->

## 代码
```py
class Solution:
    def peakIndexInMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        for i in range(len(A)):
            if A[i] > A[i+1]:
                return i
```
