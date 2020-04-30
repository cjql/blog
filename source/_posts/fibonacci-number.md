---
title: fibonacci-number
date: 8100-01-01
tags: [计算机,算法,LeetCode]
---
## 简述
求斐波那契的第 N+1 个值。
fibonacci-number [英文](https://leetcode.com/problems/fibonacci-number/) [中文](https://leetcode-cn.com/problems/fibonacci-number/)
## 收获
1.负数下标更方便从右处理列表
2.注意体会边界的使用
<!-- more -->

## 代码
```py
class Solution:
    def fib(self, N):
        """
        :type N: int
        :rtype: int
        """
        if N == 0:
            return 0
        elif N == 1:
            return 1
        else:
            fibs = [0,1]
            for n in range(2,N + 1):
                fibs.append(fibs[-1] + fibs[-2])
            return fibs[-1]
```
