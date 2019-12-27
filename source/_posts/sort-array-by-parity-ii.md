---
title: sort-array-by-parity-ii
tags: [leetcode]
date: 2020-01-07
---
## 简述
给定非负整数数组，该数组中奇数的个数和偶数的个数相同。重新排列数组，使元素的奇偶性和元素的索引的奇偶性一致。
sort-array-by-parity-ii [英文](https://leetcode.com/problems/sort-array-by-parity-ii/) [中文](https://leetcode-cn.com/problems/sort-array-by-parity-ii/)
## 收获
1.初始化一个固定长度的数组
<!-- more -->

## 代码
```py

class Solution:
    def sortArrayByParityII(self, A):
        """
        :type A: List[int]
        :rtype: List[int]
        """
        lst = [None] * len(A)
        evenIndex,oddIndex = 0,1
        
        for x in A:
            if x % 2 == 0:
                lst[evenIndex] = x
                evenIndex += 2
            else:
                lst[oddIndex] = x
                oddIndex += 2

        return lst

```
