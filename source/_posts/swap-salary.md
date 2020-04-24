---
title: swap-salary
date: 2098-01-01
tags: [leetcode]
---
## 简述
数据库中属性（如男女）互换。
swap-salary [英文](https://leetcode.com/problems/swap-salary/) [中文](https://leetcode-cn.com/problems/swap-salary/)
## 收获
SQL语句，记一下好了。
UPDATE SET CASE END WHEN THEN ELSE
<!-- more -->

## 代码
```SQL
UPDATE salary 
SET
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END;

```
