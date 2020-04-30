---
title: twoSum
date: 8100-01-01
tags: [计算机,算法,LeetCode]
---
integer、indices、input、assume、类的方法传参、enumerate、random(5)
<!-- more -->
Given an array of `integers`, return `indices` of the two numbers such that they add up to a specific target.
`You may assume that each input would have exactly one solution, and you may not use the same element twice.`
# 1. enumerate
http://www.runoob.com/python/python-func-enumerate.html
```py
seq = ['one', 'two', 'three']
seq_enumerated=enumerate(seq) 
#组合为一个索引序列，同时列出数据和数据下标
print(seq_enumerated) 
#<enumerate object at 0x0000021026476828> 返回枚举对象
print(type(seq_enumerated)) 
#<class 'enumerate'> 
#print(seq_enumerated[0])    #TypeError  'enumerate' object is not subscriptable
for i, element in enumerate(seq):
    print(i,element)
```
# 2. 参考
## 2.1. O(n<sub>2</sub>)-1
```py
class Solution(object):
    def twoSum(self, nums, target):
        d = {}
        for i, n in enumerate(nums):
            m = target - n
            if m in d:
                return [d[m], i]
            else:
                d[n] = i
a=Solution()
m=a.twoSum([2, 7, 11, 15],9)
print(m)
```
### 2.1.1. 去掉class
```py
def twoSum(nums, target):
    d = {}
    for i, n in enumerate(nums):
        m = target - n
        if m in d:
            return [d[m], i]
        else:
            d[n] = i
print(twoSum([2, 7, 11, 15],9))
```
```py
class Solution(object):
    def twoSum(self, nums, target):
        if len(nums) <= 1:
            return False
        buff_dict = {}
        for i in range(len(nums)):
            if nums[i] in buff_dict:
                return [buff_dict[nums[i]], i]
            else:
                buff_dict[target - nums[i]] = i
```