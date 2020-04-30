---
title: hamming-distance
date: 1998-01-01
tags: [leetcode,进制]
---
汉明距离：两个整数转化为二进制后，求进制位上数字不同的个数。
hamming-distance [英文](https://leetcode.com/problems/hamming-distance/) [中文](https://leetcode-cn.com/problems/hamming-distance/)
## 收获
`bin` , `^` , `count`
<!-- more -->
## 简述
汉明距离：两个整数转化为二进制后，求进制位上数字不同的个数。
## 代码
```py
class Solution:
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        return bin(x^y).count('1')

```
## 收获
`bin` , `^` , `count`