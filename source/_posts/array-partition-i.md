---
title: array-partition-i
tags: [leetcode]
date: 2020-01-07
---
## 简述
把 2n 个整数平分成 n 份，求每份中最小数之和的最大数。
array-partition-i [英文](https://leetcode.com/problems/array-partition-i/) [中文](https://leetcode-cn.com/problems/array-partition-i/)
## 收获
1.`sorted`的用法
2.步距的妙用
<!-- more -->

## 代码
```py
class Solution:
    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return sum(sorted(nums)[::2])
```
