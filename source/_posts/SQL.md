---
title: SQL
date: 2040-12-26
---
SQL知识概览。
<!-- more -->
# 1. 刷题
UPDATE salary
SET sex = char(ASCII(SEX)^ASCII('m')^ASCII('f'))

SELECT *
FROM cinema
WHERE id %2 = 1 and description != 'boring' SQL里判断相等用的是一个等号
ORDER BY rating DESC 默认的排序为升序

https://leetcode.com/problems/classes-more-than-5-students/submissions/
SELECT
    class
FROM
    courses
GROUP BY
    class
HAVING
    COUNT(DISTINCT student)>=5;

https://leetcode.com/problems/duplicate-emails/

SELECT
    Email
FROM
    Person
GROUP BY
    Email
HAVING
 COUNT(*) > 1 

https://leetcode.com/problems/combine-two-tables/
SELECT FirstName, LastName, City, State 
FROM Person LEFT JOIN Address USING(PersonId)


https://leetcode.com/problems/employees-earning-more-than-their-managers/
SELECT E1.Name AS Employee 
FROM Employee AS E1, Employee AS E2 
WHERE E1.ManagerId = E2.Id AND E1.Salary > E2.Salary

https://leetcode.com/problems/customers-who-never-order/description/
连接和子查询两种方法(子查询更快leetcode上)
到底是哪个ID，不同表中同一名称的列代表了不同的内容

SELECT Name AS Customers 
FROM Customers
WHERE Id NOT IN (SELECT CustomerId FROM Orders)


SELECT C1.Name AS Customers 
FROM Customers C1 LEFT JOIN Orders O1 ON C1.Id=O1.CustomerId
WHERE O1.CustomerId IS NULL

# 2. 概述
## 2.1. 模式
模式定义了数据如何存储、存储什么样的数据以及数据如何分解等信息，数据库和表都有模式。
## 2.2. 主键
主键的值不允许修改，也不允许复用（不能将已经删除的主键值赋给新数据行的主键）。
## 2.3. SQL
SQL（Structured Query Language)，标准 SQL 由 ANSI 标准委员会管理，从而称为 ANSI SQL。各个 DBMS 都有自己的实现，如 PL/SQL、Transact-SQL 等。
## 2.4. 大小写
SQL 语句不区分大小写，但是数据库表名、列名和值是否区分依赖于具体的 DBMS 以及配置。

SQL 支持以下三种注释：
# 3. 语法
## 3.1. 注释
```sql
SELECT *
FROM mytable; -- 注释
/* 注释1
   注释2 */
```
## 3.2. 创建数据库与使用数据库
```sql
CREATE DATABASE test;
USE test;
```
## 3.3. 创建表
```sql
CREATE TABLE mytable (
  # int 类型，不为空，自增
  id INT NOT NULL AUTO_INCREMENT,
  # int 类型，不可为空，默认值为 1，不为空
  col1 INT NOT NULL DEFAULT 1,
  # 变长字符串类型，最长为 45 个字符，可以为空
  col2 VARCHAR(45) NULL,
  # 日期类型，可为空
  col3 DATE NULL,
  # 设置主键为 id
  PRIMARY KEY (`id`));
```
## 3.4. 创建新子表
```sql
CREATE TABLE newtable AS
SELECT * FROM mytable;
```
## 3.5. 增加列
```sql
ALTER TABLE mytable
ADD col CHAR(20);
```
## 3.6. 删除行
```sql
DELETE FROM mytable
WHERE id = 1;
-- 使用更新和删除操作时一定要用 WHERE 子句，不然会把整张表的数据都破坏。可以先用 SELECT 语句进行测试，防止错误删除。
```
## 3.7. 删除列
```sql
ALTER TABLE mytable
DROP COLUMN col;
```
## 3.8. 删除表
```sql
DROP TABLE mytable;
```
## 3.9. 清空表
-- TRUNCATE TABLE 可以清空表，也就是删除所有行。
```sql
TRUNCATE TABLE mytable;
```
## 3.10. 增加行
```sql
INSERT INTO mytable(col1, col2)
VALUES(val1, val2);
```
## 3.11. 跨表增加行
```sql
INSERT INTO mytable1(col1, col2)
SELECT col1, col2
FROM mytable2;
```

## 3.12. 改
```sql
UPDATE mytable
SET col = val
WHERE id = 1;
```
## 3.13. DISTINCT
相同值只会出现一次。它作用于所有列，也就是说所有列的值都相同才算相同。
```sql
SELECT DISTINCT col1, col2
FROM mytable;
LIMIT
```
## 3.14. LIMIT
限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。

返回前 5 行：
```sql
SELECT *
FROM mytable
LIMIT 5; 
-- 返回前5行
LIMIT 0, 5;
-- 返回前5行
LIMIT 2, 3;
-- 返回第 3 ~ 5 行
```
## 3.15. ORDER BY排序
ASC ：升序（默认）
DESC ：降序
可以按多个列进行排序，并且为每个列指定不同的排序方式：
```sql
SELECT *
FROM mytable
ORDER BY col1 DESC, col2 ASC;
```
## 3.16. WHERE过滤
不进行过滤的数据非常大，导致通过网络传输了多余的数据，从而浪费了网络带宽。因此尽量使用 SQL 语句来过滤不必要的数据，而不是传输所有的数据到客户端中然后由客户端进行过滤。
```sql
SELECT *
FROM mytable
WHERE col IS NULL;
```
下表显示了 WHERE 子句可用的操作符

操作符	说明
=	等于
<	小于
>	大于
<> !=	不等于
<= !>	小于等于
>= !<	大于等于
BETWEEN	在两个值之间
IS NULL	为 NULL 值
应该注意到，NULL 与 0、空字符串都不同。

AND 和 OR 用于连接多个过滤条件。优先处理 AND，当一个过滤表达式涉及到多个 AND 和 OR 时，可以使用 () 来决定优先级，使得优先级关系更清晰。

IN 操作符用于匹配一组值，其后也可以接一个 SELECT 子句，从而匹配子查询得到的一组值。

NOT 操作符用于否定一个条件。

## 3.17. 通配符
通配符也是用在过滤语句中，但它只能用于文本字段。

% 匹配 >=0 个任意字符；

_ 匹配 ==1 个任意字符；

[ ] 可以匹配集合内的字符，例如 [ab] 将匹配字符 a 或者 b。用脱字符 ^ 可以对其进行否定，也就是不匹配集合内的字符。

使用 Like 来进行通配符匹配。
```sql
SELECT *
FROM mytable
WHERE col LIKE '[^AB]%'; -- 不以 A 和 B 开头的任意文本
```
不要滥用通配符，通配符位于开头处匹配会非常慢。

## 3.18. 计算字段
在数据库服务器上完成数据的转换和格式化的工作往往比客户端上快得多，并且转换和格式化后的数据量更少的话可以减少网络通信量。

计算字段通常需要使用 AS 来取别名，否则输出的时候字段名为计算表达式。
```sql
SELECT col1 * col2 AS alias
FROM mytable;
```

```sql
SELECT CONCAT(TRIM(col1), '(', TRIM(col2), ')') AS concat_col
FROM mytable;
-- CONCAT() 用于连接两个字段。
-- TRIM() 可以去除首尾空格。许多数据库会使用空格把值填充为列宽，因此连接的结果会出现一些不必要的空格。
```
## 3.19. 函数
各个 DBMS 的函数都是不相同的，因此不可移植，以下主要是 MySQL 的函数。

汇总
函 数	说 明
AVG()	返回某列的平均值
COUNT()	返回某列的行数
MAX()	返回某列的最大值
MIN()	返回某列的最小值
SUM()	返回某列值之和
AVG() 会忽略 NULL 行。

使用 DISTINCT 可以汇总不同的值。
```sql
SELECT AVG(DISTINCT col1) AS avg_col
FROM mytable;
```
文本处理
函数	说明
LEFT()	左边的字符
RIGHT()	右边的字符
LOWER()	转换为小写字符
UPPER()	转换为大写字符
LTRIM()	去除左边的空格
RTRIM()	去除右边的空格
LENGTH()	长度
SOUNDEX()	转换为语音值
其中， SOUNDEX() 可以将一个字符串转换为描述其语音表示的字母数字模式。
```sql
SELECT *
FROM mytable
WHERE SOUNDEX(col1) = SOUNDEX('apple')
```
日期和时间处理
日期格式：YYYY-MM-DD
时间格式：HH:MM:SS
函 数	说 明
ADDDATE()	增加一个日期（天、周等）
ADDTIME()	增加一个时间（时、分等）
CURDATE()	返回当前日期
CURTIME()	返回当前时间
DATE()	返回日期时间的日期部分
DATEDIFF()	计算两个日期之差
DATE_ADD()	高度灵活的日期运算函数
DATE_FORMAT()	返回一个格式化的日期或时间串
DAY()	返回一个日期的天数部分
DAYOFWEEK()	对于一个日期，返回对应的星期几
HOUR()	返回一个时间的小时部分
MINUTE()	返回一个时间的分钟部分
MONTH()	返回一个日期的月份部分
NOW()	返回当前日期和时间
SECOND()	返回一个时间的秒部分
TIME()	返回一个日期时间的时间部分
YEAR()	返回一个日期的年份部分
mysql> SELECT NOW();
2018-4-14 20:25:11
数值处理
函数	说明
SIN()	正弦
COS()	余弦
TAN()	正切
ABS()	绝对值
SQRT()	平方根
MOD()	余数
EXP()	指数
PI()	圆周率
RAND()	随机数
## 3.20. 分组GROUP BY 
把具有相同的数据值的行放在同一组中。

可以对同一分组数据使用汇总函数进行处理，例如求分组数据的平均值等。

指定的分组字段除了能按该字段进行分组，也会自动按该字段进行排序。
```sql
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col;
```
GROUP BY 自动按分组字段进行排序，ORDER BY 也可以按汇总字段来进行排序。
```sql
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col
ORDER BY num;
```
WHERE 过滤行，HAVING 过滤分组，行过滤应当先于分组过滤。
```sql
SELECT col, COUNT(*) AS num
FROM mytable
WHERE col > 2
GROUP BY col
HAVING num >= 2;
```
分组规定：

GROUP BY 子句出现在 WHERE 子句之后，ORDER BY 子句之前；
除了汇总字段外，SELECT 语句中的每一字段都必须在 GROUP BY 子句中给出；
NULL 的行会单独分为一组；
大多数 SQL 实现不支持 GROUP BY 列具有可变长度的数据类型。
## 3.21. 子查询
子查询中只能返回一个字段的数据。

可以将子查询的结果作为 WHRER 语句的过滤条件：
```sql
SELECT *
FROM mytable1
WHERE col1 IN (SELECT col2
               FROM mytable2);
```
下面的语句可以检索出客户的订单数量，子查询语句会对第一个查询检索出的每个客户执行一次：
```sql
SELECT cust_name, (SELECT COUNT(*)
                   FROM Orders
                   WHERE Orders.cust_id = Customers.cust_id)
                   AS orders_num
FROM Customers
ORDER BY cust_name;
```
## 3.22. 连接
连接用于连接多个表，使用 JOIN 关键字，并且条件语句使用 ON 而不是 WHERE。

连接可以替换子查询，并且比子查询的效率一般会更快。

可以用 AS 给列名、计算字段和表名取别名，给表名取别名是为了简化 SQL 语句以及连接相同表。

内连接
内连接又称等值连接，使用 INNER JOIN 关键字。
```sql
SELECT A.value, B.value
FROM tablea AS A INNER JOIN tableb AS B
ON A.key = B.key;
```
可以不明确使用 INNER JOIN，而使用普通查询并在 WHERE 中将两个表中要连接的列用等值方法连接起来。
```sql
SELECT A.value, B.value
FROM tablea AS A, tableb AS B
WHERE A.key = B.key;
```
自连接
自连接可以看成内连接的一种，只是连接的表是自身而已。

一张员工表，包含员工姓名和员工所属部门，要找出与 Jim 处在同一部门的所有员工姓名。

子查询版本
```sql
SELECT name
FROM employee
WHERE department = (
      SELECT department
      FROM employee
      WHERE name = "Jim");
```
自连接版本
```sql
SELECT e1.name
FROM employee AS e1 INNER JOIN employee AS e2
ON e1.department = e2.department
      AND e2.name = "Jim";
```
自然连接
自然连接是把同名列通过等值测试连接起来的，同名列可以有多个。

内连接和自然连接的区别：内连接提供连接的列，而自然连接自动连接所有同名列。
```sql
SELECT A.value, B.value
FROM tablea AS A NATURAL JOIN tableb AS B;
```
外连接
外连接保留了没有关联的那些行。分为左外连接，右外连接以及全外连接，左外连接就是保留左表没有关联的行。

检索所有顾客的订单信息，包括还没有订单信息的顾客。
```sql
SELECT Customers.cust_id, Orders.order_num
FROM Customers LEFT OUTER JOIN Orders
ON Customers.cust_id = Orders.cust_id;
```
customers 表：

cust_id	cust_name
1	a
2	b
3	c
orders 表：

order_id	cust_id
1	1
2	1
3	3
4	3
结果：

cust_id	cust_name	order_id
1	a	1
1	a	2
3	c	3
3	c	4
2	b	Null
## 3.23. 组合查询
使用 UNION 来组合两个查询，如果第一个查询返回 M 行，第二个查询返回 N 行，那么组合查询的结果一般为 M+N 行。

每个查询必须包含相同的列、表达式和聚集函数。

默认会去除相同行，如果需要保留相同行，使用 UNION ALL。

只能包含一个 ORDER BY 子句，并且必须位于语句的最后。
```sql
SELECT col
FROM mytable
WHERE col = 1
UNION
SELECT col
FROM mytable
WHERE col =2;
```
## 3.24. 视图
视图是虚拟的表，本身不包含数据，也就不能对其进行索引操作。

对视图的操作和对普通表的操作一样。

视图具有如下好处：

简化复杂的 SQL 操作，比如复杂的连接；
只使用实际表的一部分数据；
通过只给用户访问视图的权限，保证数据的安全性；
更改数据格式和表示。
```sql
CREATE VIEW myview AS
SELECT Concat(col1, col2) AS concat_col, col3*col4 AS compute_col
FROM mytable
WHERE col5 = val;
```
## 3.25. 存储过程
存储过程可以看成是对一系列 SQL 操作的批处理。

使用存储过程的好处：

代码封装，保证了一定的安全性；
代码复用；
由于是预先编译，因此具有很高的性能。
命令行中创建存储过程需要自定义分隔符，因为命令行是以 ; 为结束符，而存储过程中也包含了分号，因此会错误把这部分分号当成是结束符，造成语法错误。

包含 in、out 和 inout 三种参数。

给变量赋值都需要用 select into 语句。

每次只能给一个变量赋值，不支持集合的操作。
```sql
delimiter //

create procedure myprocedure( out ret int )
    begin
        declare y int;
        select sum(col1)
        from mytable
        into y;
        select y*y into ret;
    end //

delimiter ;
call myprocedure(@ret);
select @ret;
```
## 3.26. 游标
在存储过程中使用游标可以对一个结果集进行移动遍历。

游标主要用于交互式应用，其中用户需要对数据集中的任意行进行浏览和修改。

使用游标的四个步骤：

声明游标，这个过程没有实际检索出数据；
打开游标；
取出数据；
关闭游标；
```sql
delimiter //
create procedure myprocedure(out ret int)
    begin
        declare done boolean default 0;

        declare mycursor cursor for
        select col1 from mytable;
        # 定义了一个 continue handler，当 sqlstate '02000' 这个条件出现时，会执行 set done = 1
        declare continue handler for sqlstate '02000' set done = 1;

        open mycursor;

        repeat
            fetch mycursor into ret;
            select ret;
        until done end repeat;

        close mycursor;
    end //
 delimiter ;
```
## 3.27. 触发器
触发器会在某个表执行以下语句时而自动执行：DELETE、INSERT、UPDATE。

触发器必须指定在语句执行之前还是之后自动执行，之前执行使用 BEFORE 关键字，之后执行使用 AFTER 关键字。BEFORE 用于数据验证和净化，AFTER 用于审计跟踪，将修改记录到另外一张表中。

INSERT 触发器包含一个名为 NEW 的虚拟表。
```sql
CREATE TRIGGER mytrigger AFTER INSERT ON mytable
FOR EACH ROW SELECT NEW.col into @result;

SELECT @result; -- 获取结果
```
DELETE 触发器包含一个名为 OLD 的虚拟表，并且是只读的。

UPDATE 触发器包含一个名为 NEW 和一个名为 OLD 的虚拟表，其中 NEW 是可以被修改的，而 OLD 是只读的。

MySQL 不允许在触发器中使用 CALL 语句，也就是不能调用存储过程。

## 3.28. 事务管理
基本术语：

事务（transaction）指一组 SQL 语句；
回退（rollback）指撤销指定 SQL 语句的过程；
提交（commit）指将未存储的 SQL 语句结果写入数据库表；
保留点（savepoint）指事务处理中设置的临时占位符（placeholder），你可以对它发布回退（与回退整个事务处理不同）。
不能回退 SELECT 语句，回退 SELECT 语句也没意义；也不能回退 CREATE 和 DROP 语句。

MySQL 的事务提交默认是隐式提交，每执行一条语句就把这条语句当成一个事务然后进行提交。当出现 START TRANSACTION 语句时，会关闭隐式提交；当 COMMIT 或 ROLLBACK 语句执行后，事务会自动关闭，重新恢复隐式提交。

设置 autocommit 为 0 可以取消自动提交；autocommit 标记是针对每个连接而不是针对服务器的。

如果没有设置保留点，ROLLBACK 会回退到 START TRANSACTION 语句处；如果设置了保留点，并且在 ROLLBACK 中指定该保留点，则会回退到该保留点。
```sql
START TRANSACTION
// ...
SAVEPOINT delete1
// ...
ROLLBACK TO delete1
// ...
COMMIT
```
## 3.29. 字符集
基本术语：

字符集为字母和符号的集合；
编码为某个字符集成员的内部表示；
校对字符指定如何比较，主要用于排序和分组。
除了给表指定字符集和校对外，也可以给列指定：
```sql
CREATE TABLE mytable
(col VARCHAR(10) CHARACTER SET latin COLLATE latin1_general_ci )
DEFAULT CHARACTER SET hebrew COLLATE hebrew_general_ci;
```
可以在排序、分组时指定校对：
```sql
SELECT *
FROM mytable
ORDER BY col COLLATE latin1_general_ci;
```
## 3.30. 权限管理
MySQL 的账户信息保存在 mysql 这个数据库中。
```sql
USE mysql;
SELECT user FROM user;
```
### 3.30.1. 创建账户

新创建的账户没有任何权限。
```sql
CREATE USER myuser IDENTIFIED BY 'mypassword';
```
### 3.30.2. 修改账户名
```sql
RENAME USER myuser TO newuser;
```
### 3.30.3. 删除账户
```sql
DROP USER myuser;
```
### 3.30.4. 查看权限
```sql
SHOW GRANTS FOR myuser;
```
### 3.30.5. 授予权限
账户用 username@host 的形式定义，username@% 使用的是默认主机名。
```sql
GRANT SELECT, INSERT ON mydatabase.* TO myuser;
```
### 3.30.6. 删除权限

GRANT 和 REVOKE 可在几个层次上控制访问权限：

整个服务器，使用 GRANT ALL 和 REVOKE ALL；
整个数据库，使用 ON database.*；
特定的表，使用 ON database.table；
特定的列；
特定的存储过程。
REVOKE SELECT, INSERT ON mydatabase.* FROM myuser;
### 3.30.7. 更改密码
必须使用 Password() 函数进行加密。
```sql
SET PASSWROD FOR myuser = Password('new_password');
```

# 4. 牛客
常见的sql优化技巧，不正确的是？_乐信笔试题|c5c977fbc9e0453486e244c5a88a8678            
关于SQL优化，哪些是正确的？_唯品会笔试题|be873ae5acd448b18a5045677c87c84c            

写出下面2个PHP操作Mysql函数的作用及区别。_微博笔试题|db95632130dc414e9af675444b04ce87            

现有Mysql数据库，写Spring + Hibernate_|7633c7c52a8447fda1d76e83d77070aa            
mysql数据库，game_order表表结构如下，下面哪些_|7d2af51194e14e708c71c855f5f28a36            
Linux下MySQL数据库安装方式分为[$##$]、[$#_搜狐畅游笔试题|0b2b724678fc408f959e5469a05517d2            
PHP只能跟MySQL数据库进行联合编程说法是否正确()_|33b69ee0d53d4bda8cb28ab8129e117d            
在配置APP连接MySQL数据库的时候，字符串&ldquo;_搜狐畅游笔试题|38b46989ee664be2a91fe0464da47c1d            
MySQL数据库提供了四种级别的事务隔离，其中默认的隔离级别_搜狐畅游笔试题|4bd14ee6743841e29d5c899a00ccdf93            
PHP只能跟MySQL数据库进行联合编程说法是否正确()_|7856c6be6c8c41b4826bcc6ea70ce334            
MySQL数据库中可使用（）语句增加新用户并限制用户访问数据_|827ef567d596425e98ff86cf28ad4b9b            
MySQL数据库查询操作中可使用（）子句指定查询结果的排序规_|98c2182584e0499db2dd2c3e0e7241fd            
如下哪些日志可以记录到MySQL数据库的所有更新操作_搜狐畅游笔试题|a2ce8dcfcc57434bb16b4e9e0ad75701            
假设MySQL数据库_搜狗笔试题|aeff9b71bc4f45b3987a82fab508e852            

Mysql查询时，只有满足联接条件的记录才包含在查询结果，这_第四范式笔试题|6a383d264d1c42029b7d3ffd3fc7bdcd            
Mysql查询时，只有满足联接条件的记录才包含在查询结果，这_摩拜笔试题|ec152f2aa7ce485cb1e9772dfef2b307            
在SQL查询时，如果需要去掉查询结果中的重复组，应使用____|0ff9a20f04a4458eb108af559782bd78            
在SQL查询时，使用WHERE子句指出的_|2af4e50a36894d9f8e4ffadfb5ecbd6a            
PDO通过执行SQL查询与数据库进行交互，可以分为多种不同的_|86cdf39c251149c3ba207219391e76c8            
在SQL查询中使用WHERE子句指出的是（）。_|9a65de6327df4a4288acc151d4e01a2b            
SQL查询语句中where、group by、having _摩拜笔试题|cd7d70aea97b450593f1263defe18a92            
哪种不是SQL查询的联接算法_招商银行信用卡中心笔试题|d7e33038eea04c88bd34ff6d49a4f108            
在SQL查询时，如果需要去掉查询结果中的重复组，应使用（ ）_|d93cdbf234094c619a9259f776817dd5            

Mysql sql注入中使用延时注入时常用的语句是（）_|04139bac8c024c0a970add8504e5e028            
Mysql sql注入中使用延时注入时常用的语句是（）_小米笔试题|1f9d81d3747a43af9ff952584bce3010            
分类列举sql注入常用判断方法?_|c3593d010fa745c88c84a830bfbe7cd8            

使用sql语句查询class列不是NULL的记录，WHERE_快手笔试题|a3140cd056dd4262a539f73396e28765            
写出以下sql语句。_网易笔试题|a9889965d6fd40aebe8f1865b965f072            
写出符合条件的sql语句。_腾讯笔试题|bcd7133020df49eeab0c656718a876d7            
在SQL语句中，与表达式&quot;仓库号&nbsp;NOT_搜狐畅游笔试题|254487b011c64320abeced5d56239201            
已知表T1中有2行数据，T2中有3行数据，执行SQL语句,&_摩拜笔试题|2a35d7a4d6b24d43a3b32a27ef92418c            
SQL语句执行的顺序是_网易笔试题|2bee77aff9c94b2dae43e493cf3df319            
下述SQL语句中，起修改表中数据作用的命令动词是（）_|2e2ddd5123794a8aa27a18f64484dd88            
对于满足SQL92标准的SQL语句：SELECT foo,c_招商银行信用卡中心笔试题|2f0a9189f17847a5af6f17dd7ab62b59            
下面关于SQL语句"SELECT&nbsp;*&nbsp;F_搜狐畅游笔试题|487036093b2248138a1bd57c4e56682c            
&nbsp;SQL语句性能分析的关键字是什么？_腾讯笔试题|5d5b782a1a484af4ac3ab07e437d468f            
ADO.net访问SQL server数据库时，在SQL语句_|5f2c5766357c4d48988d319288f74dc7            
在SQL语句中，用“%”表示任何一个字符 ，这种说法正确吗(_|6243c96f1d034d8cb12033e1b8aab0f9            
下列哪一个Transact-SQL语句能够实现收回user2_|6300f4878d83446db352c9fb46641841            
SQL语句中，删除一个表的命令是()。_猿辅导笔试题|6b1b19602fbe423b82b59d87c7cdfd79            
SQL语句中，可以查看到学生信息表中，学生姓名的SQL语句为_小米笔试题|6fdd1a3594824233aaee3e2909ac5dfb            
对于满足SQL92标准的SQL语句：SELECT foo,c_腾讯笔试题|7abd397a22054bbb99e2b3982ff81d01            
下列SQL语句中，修改表结构的是（）_|7f5a506326c944ef95f6b9b62bd44708            
对于SQL语句select * from t where a_网易笔试题|a9755786616e4049aa3d3041f3a99c41            
下列SQL语句可以将查询结果降序排列的是_|b07884418c3448fd8e91b097eca8a259            
为何SQL语句需要使用大写字母？_|b6b2ce1ae18c48a99047e61a70592a67            
用SQL语句建立表时将属性定义为主关键字，应使用短语( )_第四范式笔试题|ba8e4dfd1d3f4b1bbc0bd74f727195ad            
SQL语句中与Having子句同时使用的语句是？（）_顺丰科技笔试题|d35fee69aefa4ff6af06fe4a74706db7            
下列两条SQL语句的检索结果为何不同？_华为笔试题|d3980009a1094d2a88fc4270820a665b            
使用Transact-SQL语句拒绝user4查询视图MyV_|ddcbfe05f1d0477c9a56d7124759c2f0            

以下hive sql语法正确的是_网易笔试题|185a862dc74e42d49f6937e3cd4fef42            
关于isql语法分析器的常用参数，下面说法正确的有：（&nb_|7895f6e3d3d94dd09b606f2db01ba615            
以下hive sql语法正确的是_网易笔试题|f4476d751a4c41e6ba27730163641faa            
增加数据库一列的SQL语法是什么？_人人网笔试题|91f0508367e34d318bcca2786823dccf            

SQL语言具有的功能是　( )_|047aec571bea474896313c3e7689848e            
在SQL语言中授权的操作是通过_______语句实现的。_|0b73d04ce6e6491d848a950ee6539eec            
在SQL语言的SELECT语句中，能实现选择操作的是：_|1301822371f94a818a44012ad07775cf            
SQL语言是（）的语言，易学习。_|18414cc2a1cf4207a43c14980b4468e0            
SQL语言中，用于授权的语句是()。 &lt;div&gt;_|18d8039d8cd84276b7121129d13a3f76            
在SQL语言中，子查询是&lt;/span&gt;_|217ddfe703754efb909d747bbc378151            
SQL语言的功能包括()、()、()、()。_|58d3e034df4748fdbdd99672a65e0a28            
在SQL语言的SELECT查询中，需要去掉查询结果中的重复记_|6b5dc36d8553441382647b2683262ff3            
SQL语言的关键字包括SELECT、INSERT、UPDAT_百度笔试题|6d7c074de2644e118845dacebd95a042            
在SQL语言的Select语句中实现选择运算的子句是（ ）。_|6fa9dbb6f740449e8d7334a8680d782a            
标准SQL语言集数据查询、数据操作、数据定义和数据控制功能于_|7697bc2262e444aabf3dce7ab4e0ecf7            
SQL语言具有（       ）的功能。_|a3c2b0afb9134f06bfc62b4c8e3118ec            
SQL语言集数据查询、数据操纵、数据定义和数据控制功能于一体_|a6ceec080b7948359a0375efa7ea879e            
标准SQL语言集数据查询、数据操作、数据定义和数据控制功能于_|a8522e7b766c445596ebfb72bf31836a            
SQL语言允许使用通配符进行字符串匹配的操作,其中&lsqu_摩拜笔试题|aca0f342bb9e46c7ae576e90f94db787            
SQL语言中删除一个表的指令是_快手笔试题|b15436e05f354461af026c66f209a2a6            
SQL语言共分为三大类（亦有说法分为四大类），那么不属于数据_顺丰科技笔试题|b2ff34be83de4dc4a81f3902c25ef9f5            
在SQL语言的SELECT语句中，对应关系代数中“投影”运算_|b962888aa0644610bd05c3366aec5ee7            
在数据库的SQL语言开发中，下述关于Union和Union&_唯品会笔试题|bd4453be5de94445916bae4aa8965666            
SQL语言集数据查询、数据操纵、数据定义和数据控制功能于一体_腾讯笔试题|ccecce1c5f1a48b99302dfc58b2c4c66            
在SQL语言中，子查询是（&nbsp;&nbsp;&nbsp_摩拜笔试题|e849c014eeb5449fb4c45578ec3cd2ab            
&nbsp;SQL语言中删除一个表的指令是（）_腾讯笔试题|efb2f754ab9a4601a7dd9fb184809983            

使用SQLServer数据库系统时如何减少事务的死锁_招商银行信用卡中心笔试题|9f9ca757f11d489ebe4af3847f507135            
1&nbsp;[问答]简单介绍SQLite数据库。_|91a9a0a75013423788e1acd8a25c7490            

mysql主从复制？_|85b17fb014eb46ffb653465681af1775                     

现有Mysql数据库，写Spring + Hibernate_|7633c7c52a8447fda1d76e83d77070aa            
Linux下MySQL数据库安装方式分为[$##$]、[$#_搜狐畅游笔试题|0b2b724678fc408f959e5469a05517d2            
PHP只能跟MySQL数据库进行联合编程说法是否正确()_|33b69ee0d53d4bda8cb28ab8129e117d            
在配置APP连接MySQL数据库的时候，字符串&ldquo;_搜狐畅游笔试题|38b46989ee664be2a91fe0464da47c1d            
MySQL数据库提供了四种级别的事务隔离，其中默认的隔离级别_搜狐畅游笔试题|4bd14ee6743841e29d5c899a00ccdf93            
PHP只能跟MySQL数据库进行联合编程说法是否正确()_|7856c6be6c8c41b4826bcc6ea70ce334            
MySQL数据库中可使用（）语句增加新用户并限制用户访问数据_|827ef567d596425e98ff86cf28ad4b9b            
MySQL数据库查询操作中可使用（）子句指定查询结果的排序规_|98c2182584e0499db2dd2c3e0e7241fd            
如下哪些日志可以记录到MySQL数据库的所有更新操作_搜狐畅游笔试题|a2ce8dcfcc57434bb16b4e9e0ad75701            
假设MySQL数据库_搜狗笔试题|aeff9b71bc4f45b3987a82fab508e852            
mysql数据库，game_order表表结构如下，下面哪些_|7d2af51194e14e708c71c855f5f28a36            
