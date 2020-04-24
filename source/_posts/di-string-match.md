---
title: di-string-match
date: 2098-01-01
tags: [leetcode]
---
## 简述
用只含字母 I 和 D 的字符串生成列表，使 I 对应的列表元素值升序排列， D对应的列表元素值降序排列
di-string-match [英文](https://leetcode.com/problems/di-string-match/) [中文](https://leetcode-cn.com/problems/di-string-match/)
## 收获
1.用 0 和 字符串长度来初始化
<!-- more -->
## 代码
```py
class Solution:
    def diStringMatch(self, S):
        """
        :type S: str
        :rtype: List[int]
        """
        up, down = 0, len(S)
        ans=[]
        for x in S:
            if x == 'I':
                ans.append(up)
                up += 1
            else:
                ans.append(down)
                down -= 1
                
        return ans + [up]
```
