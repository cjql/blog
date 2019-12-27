---
title: self-dividing-numbers
tags: [leetcode]
date: 2020-01-07
---
## 简述
求两个整数之间能被自身所有十进制位上的数字整除的数。
self-dividing-numbers [英文](https://leetcode.com/problems/self-dividing-numbers/) [中文](https://leetcode-cn.com/problems/self-dividing-numbers/)
## 收获
1.先单个判断，再进行范围遍历。
2.`str`和`int`的妙用。
3.好好体会`return`的位置和用法。
<!-- more -->

## 代码
```py
class Solution(object):
    def selfDividingNumbers(self, left, right):
        def self_dividing(n):
            for d in str(n):
                if d == '0' or n % int(d) > 0:
                    return False
            return True

        ans = []
        for n in range(left, right + 1):
            if self_dividing(n):
                ans.append(n)
        return ans 

```
