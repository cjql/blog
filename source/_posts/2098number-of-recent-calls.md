---
title: number-of-recent-calls
date: 1998-01-01
tags: [leetcode,collections]
---
## 简述
求3000ms前到现在的ping数。
number-of-recent-calls [英文](https://leetcode.com/problems/number-of-recent-calls/) [中文](https://leetcode-cn.com/problems/number-of-recent-calls/)
## 收获
1.用list来理解collections.deque()
2.https://docs.python.org/3/library/collections.html
3.[廖雪峰collections](https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001411031239400f7181f65f33a4623bc42276a605debf6000)
<!-- more -->

## 代码
```py
class RecentCounter:

    def __init__(self):
        self.q = collections.deque()

    def ping(self, t):
        """
        :type t: int
        :rtype: int
        """
        self.q.append(t)
        while self.q[0] < t-3000:
            self.q.popleft()
        return len(self.q)
        


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)

```
