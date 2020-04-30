---
title: Python知识结构
date: 2040-12-12 01:23:47
tags: [计算机,编程语言]
---
Python知识大全。
https://github.com/daacheng/PythonBasic 平时工作中常用的Python零碎知识总结，爬虫学习总结与练习，Python数据分析学习总结
https://github.com/looly/python-basic 老齐（qiwsir）的Python基础教程
https://github.com/MiracleYoung/You-are-Pythonista
https://github.com/Prodesire/Python-Guide-CN Python最佳实践指南
基础语法、控制流、函数、模块、文件操作、异常处理、面向对象编程
<!-- more -->
# 1. 程序交互
input():带提示语的input。name=input('Please enter your name:') 把输入以字符串的形式保存在name里
print():print`多项`、print的`%`格式化占位符、print的`format`形式 #可以接收多参
三引号：原样输出
转意符号
学习，思考，应用，校正。人做事情，都需要有个反馈，反馈的周期越久，感觉上就越困难。很多大事情，都是由一个个小事务重复或迭代而成，每个小事务中，包含了反馈和校正。学了什么，启示是什么，和其它知识的联系是什么
<!-- more -->
r:优先级最高
\:把字母转义为特殊字符。防止引号表示字符串。

\n:制表符
\t:换行符
```PY
print('a\nb')
print(r'a\nb')
print('I\'m OK')

# a
# b
# a\nb
# I'm OK
```
# 2. 文件读写
[官方文档](https://docs.python.org/3/tutorial/inputoutput.html)

## 2.1. 无with
```py
f= open("file1.txt",encoding='utf-8')#不写encoding，默认为操作系统编码
file_data=f.read() #完全读取
print(file_data)
f.close() #需要执行关闭操作
```
## 2.2. 有with
```py
with open("file.txt",encoding='utf-8')as f:
    file_data=f.read()
    print(file_data)  #不需要执行close(),系统会自动关闭。
```
## 2.3. readline()
默认从文件左上角开始，读取一行，指针下移。通过f.seek()可改变指针位置和要开始读的内容。
```py
with open("file.txt",encoding='utf-8')as f:
    print(f.readable()) #判断是否可读
    print(f.writable()) #判断是否可写
    print(1, f.readline()) #一次只读一行
    print(2, f.readline())
    print(3, f.readline())
    print(4, f.readline())
    print(5, f.readline())
    print(6, f.readline())
    print(7, f.readline())
    print(8, f.readline())
```
## 2.4. readlines()
从文件左上角开始，将文件内容读取到列表中。
```py
with open("file.txt",encoding='utf-8')as f:
   print(f.readlines()) 
# ['1111\n', '222\n', '333\n', '44\n', '5555\n', '666\n', '你好!\n', 'hello']
    for i in f.readlines():
        print(i)
# 1
#
# 2
#
# 3
#
# 4
#
# 5
#
# 6
#
# 你好!
#
# hello
```
## 2.5. 不打印换行符 
print(,end='')
```py
with open('file.txt','r',encoding='utf-8',newline='') as f:
    print(f.readlines())
# #     ['1111\r\n', '222\r\n', '333\r\n', '44\r\n', '5555\r\n', '666\r\n', '你好!\r\n', 'hello']
    for i in f.readlines():
        print(i,end='') #不打印换行符
# 1
# 2
# 3
# 4
# 5
# 6
# 你好!
# hello
```

## 2.6. r+
按读的内容和指针位置逐行覆盖原来的内容
```py
with open('file.txt','r+',encoding='utf-8') as f: #从指针位置所在处写入
    m = f.read()
    m = m.replace('a','h')
    f.seek(0)
    f.write(m)
    f.write('a1\n')
    f.write('b1\nc1\n')
    # f.writelines(['d1\n', 'e1\n'])
    f.seek(0) #将指针seek到0位置，否则读不出数据
    print(f.read())
```
## 2.7. a+ 
写到文件最后
```py
with open('file.txt','a+',encoding='utf-8') as f:
    f.write('写到文件最后')
    f.seek(0)
    print(f.read())
# 1
# 2
# 3
# 4
# 5
# 6
# 你好!
# hello写到文件最后
```

## 2.8. w+
在with那行语句结束时，整个文件原来的内容被清空，无法读取原文件的数据。但后面的内容可以边读边写。
```py
with open('file.txt','wb+') as f:
    file_data = 'test wb'
    f.write(file_data.encode('utf-8'))
    f.seek(0)
    print(f.read())
# b'test wb'
```

## 2.9. 查看文件编码
待查证
```py
with open('file.txt','a+',encoding='utf-8') as f:
    print(f.encoding) #查看文件编码
# utf - 8
# #'字符串'---------encode---------》bytes
# #bytes---------decode---------》'字符串'
```
## 2.10. b模式不能指定编码
```py
with open('file.txt','rb') as f:
    file_data=f.read()
    print(file_data)
    print(file_data.decode('utf-8'))
# b'1111\r\n222\r\n333\r\n44\r\n5555\r\n666\r\n\xe4\xbd\xa0\xe5\xa5\xbd!\r\nhello'
# 1
# 2
# 3
# 4
# 5
# 6
# 你好!
# hello
```
## 2.11. flush(),tell(),seek(),truncate()

```py
flush() #文件内容从内存刷到硬盘
tell()  #查看文件当前指针位置
seek(3) #从开头开始算，将指针移动到第三个字节
        #   seek 有三种工作方式，seek(offset[, whence])
        #   seek(2,0)=seek(2),0是默认方式，相当于从0字节位置开始
        #   seek(2,1)   1 相对当前位置
        #   seek(-2,2)  2 从文件末尾开始
truncate(10) #从开头开始算，将文件只保留从0-10个字节的内容，文件打开方式必须包含"写"，
               #但是w和w+除外，因为这两种方式会首先把文件清空。
with open('file.txt','ab') as f:
    f.truncate(1)
```
## 2.12. 打印文件最后一行

```py
with open("file.txt",'rb') as f:
    for i in f:   #这种方式不会读取整个文件，需要从哪里读取才从哪里开始读取，循环文件的推荐方式
        offs=-5         #偏移量，根据一行大小确定
        while True:
            f.seek(offs,2)
            data=f.readlines()
            if len(data) > 1:
                print('这是最后一行：',data[-1].decode('utf-8'))
                break
            offs*=2
# 这是最后一行： hello你好!hello你好!hello你好!hello你好!
```

# 3. 字符串 
https://docs.python.org/3/library/string.html
## 3.1. dir(str)
```py
>>> dir(str)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```
upper()/lower()：改变字符串中字母的大小写。  
strip()：删除字符串首尾空白符（如'\n'、'\n\r'）或指定字符。  
lstrip()：删除字符串左边空白符或指定字符。  
rstrip()：删除字符串右边空白符或指定字符。  

去空格及特殊符号:
```py
s.strip().lstrip().rstrip(',')
```
## 3.2. *
```py
str1 = 'Ab'
print(str1*5)  ## AbAbAbAbAb
print(5*str1)  ## AbAbAbAbAb
```
[python字符串连接的三种方法及其效率、适用场景详解](https://www.pythontab.com/html/2015/pythonhexinbiancheng_1112/981.html)
## 3.3. + 
```py
str1='a'
str2='b'
print str1+str2  ## ab
```
## 3.4. join

```py
# S.join(seq) #把seq代表的字符串序列，用S连接起来
delimiter = ','
mylist = ['Brazil', 'Russia', 'India', 'China']  #Brazil,Russia,India,China
print delimiter.join(mylist)
```
## 3.5. format及百分号操作符
默认：顺序传递
标准格式：{位置:值}
https://docs.python.org/3/library/string.html#format-string-syntax
```py
'{1} is better than {0}'.format('a','b')  
# 'b is better than a'
'{:10.2f}'.format(1.23456) # 长度为10，保留两位小数，前面空格填补
```
百分号操作符
%操作符：格式化符号。更高级别的控制。
* %和字母间加数字，点前为总长，点后为小数位数。
eg：%S%d%4.2f:占位符（格式化符号）
* %s:字符串
* %d:整数
* %f:浮点数
* %5d:前面添加空格，总长度为5
* %4.2f:总长4，2个小数位的浮点数
print("I'm %s. I'm %d year old" % ('Vamei', 99))


## 3.6. split()
分割字符串
split()：按指定分隔符来切割字符串，返回列表。无分隔符时，默认分隔符是空格。
```py
# S.rsplit([sep, [maxsplit]])
# 以sep为分隔符，把S分成一个list。maxsplit表示分割的次数。默认的分割符为空白字符
s = 'ab,cde,fgh,ijk'
print(s.split(',')) #返回列表 ['ab', 'cde', 'fgh', 'ijk']
```
## 3.7. splitlines()
按行分割字符串
```py
S.splitlines([keepends])
# 把S按照行分割符分为一个list，keepends是一个bool值，如果为真每行后而会保留行分割符。
```
## 3.8. replace()
replace()：替换目标字符串中的子串。 
```py
S.replace(oldstr, newstr, [count])
# 把S中的oldstar替换为newstr，count为替换次数。这是替换的通用形式，还有一些函数进行特殊字符的替换
S.strip([chars])
# 把S中前后chars中有的字符全部去掉，可以理解为把S前后chars替换为None
S.lstrip([chars])
S.rstrip([chars])
S.expandtabs([tabsize])#把S中的tab字符替换没空格，每个tab替换为tabsize个空格，默认是8个
```
## 3.9. translate()
批量替换
```py
# S.translate(table[,deletechars])
## 49.1. 使用上面的函数产后的翻译表，把S进行翻译，并把deletechars中有的字符删掉。需要注意的是，如果S为unicode字符串，那么就不支持 deletechars参数，可以使用把某个字符翻译为None的方式实现相同的功能。此外还可以使用codecs模块的功能来创建更加功能强大的翻译表。
from string import maketrans   # 引用 maketrans 函数。
intab = "aeiou"
outtab = "12345"
trantab = maketrans(intab, outtab)  #这里注意一下
str = "this is string example....wow!!!";
print str.translate(trantab);
```
## 3.10. index()
查找字符，返回第一个字符出现的位置。< 0 为未找到
```py
str = 'strchr'
substr = 'ch'
n = str.index(substr)
print n  ## 3 非子字符串时报错，其余返回子字符串第一个字符的下标。中文报错
```
## 3.11. find() 
查找字符串
```py
sStr1 = 'abcdefg'
sStr2 = 'cde'
print sStr1.find(sStr2) #非子字符串时返回-1。否则返回子字符串第一个字符的下标。中文报错。
```
## 3.12. index、rfind、rindex、count
```py
# 返回S中出现substr的第一个字母的标号，如果S中没有substr则返回-1。start和end作用就相当于在S[start:end]中搜索
S.index(substr, [start, [end]])
# 与find()相同，只是在S中没有substr时，会返回一个运行时错误
S.rfind(substr, [start, [end]])
# 返回S中最后出现的substr的第一个字母的标号，如果S中没有substr则返回-1，也就是说从右边算起的第一次出现的substr的首字母标号
S.rindex(substr, [start, [end]])
S.count(substr, [start, [end]]) #计算substr在S中出现的次数
```
## 3.13. ljust、rjust、center、zfill
字符串在输出时的对齐
```py
str = "this is string example wow!!!"
print(str.ljust(40,'a'))   
print(str.ljust(41,'a'))   
print(str.rjust(40,'a'))  
print(str.center(40,))
print(str.zfill(40))
## 52.1. this is string example wow!!!aaaaaaaaaaa
## 52.2. this is string example wow!!!aaaaaaaaaaaa
## 52.3. aaaaaaaaaaathis is string example wow!!!
## 52.4. this is string example wow!!!
## 52.5. this is string example wow!!!
```
## 3.14. cmp(str1,str2)
比较字符串。http://www.runoob.com/python/func-number-cmp.html

## 3.15. len(str)
```py
sStr1 = 'strlen'
print len(sStr1)
```
## 3.16. [:]
字符串切片
```py
tr1 = '1234567890'
print(tr1[0:3]) #截取第一位到第三位的字符 123
print(tr1[:]) #截取字符串的全部字符 1234567890
print(tr1[6:]) #截取第七个字符到结尾 7890
print(tr1[:-3]) #截取从头开始到倒数第三个字符之前 1234567
print(tr1[2]) #截取第三个字符 3
print(tr1[-1]) #截取倒数第一个字符 0
print(tr1[:-1]) #123456789 
print(tr1[::-1]) #创造一个与原字符串顺序相反的字符串 0987654321 翻转字符串
print(tr1[-3:-1]) #截取倒数第三位与倒数第一位之前的字符 89
print(tr1[-3:]) #截取倒数第三位到结尾 890
print(tr1[:-5:-3]) #逆序截取，具体啥意思没搞明白？ 07
```
## 3.17. lower()、upper()、swapcase()、capitalize()
```py
S='abEfeDg'
print(S.lower()) #小写 abefedg
print(S.upper()) #大写 ABEFEDG
print(S.swapcase()) #大小写互换 ABeFEdG
print(S.capitalize()) #首字母大写 Abefedg
```

## 3.18. encode、decode
字符串还有一对编码和解码的函数
```py
# S.encode([encoding,[errors]])
## 53.1. 其中encoding可以有多种值，
## 53.2. 比如gb2312 gbk gb18030 bz2 zlib big5 bzse64等都支持。
## 53.3. errors默认值为"strict"，意思是UnicodeError。
## 53.4. 可能的值还有'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' 和所有的通过codecs.register_error注册的值。
## 53.5. 这一部分内容涉及codecs模块
S.decode([encoding,[errors]])
```
## 3.19. startswith、endswith、is
字符串的测试、判断函数
这一类函数在string模块中没有，这些函数返回的都是bool值
```py
S.startswith(prefix[,start[,end]])
# 是否以prefix开头
S.endswith(suffix[,start[,end]])
# 以suffix结尾
S.islower() #S中的字母是否全是小写
S.isupper() #S中的字母是否全是大写
S.istitle() #S是否是首字母大写的
S.isspace() #是否全是空白字符，并至少有一个字符
S.isalpha() #是否全是字母，并至少有一个字符
S.isalnum() #是否全是字母和数字，并至少有一个字符
S.isdigit() #是否全是数字，并至少有一个字符
```
## 3.20. atoi、atol、atof
字符串类型转换函数，这几个函数只在string模块中有
```py
string.atoi(s[,base])
# base默认为10，如果为0,那么s就可以是012或0x23这种形式的字符串，如果是16那么s就只能是0x23或0X12这种形式的字符串
string.atol(s[,base]) #转成long
string.atof(s[,base]) #转成float
```
## 3.21. and
如果为真，则返回左边第一个真值。
```py
sStr1 = '12345678'
sStr2 = 'ab'
print (sStr2 and sStr1) ## 12345678
print (sStr1 and sStr2) ## ab
print len(sStr2 and sStr1) ## 8
print len(sStr1 and sStr2) ## 2
```
## 3.22. for in, if in
扫描字符串
```py
# strpbrk(sStr1,sStr2)
sStr1 = 'cekjgdklab'
sStr2 = 'gka'
nPos = -1
for c in sStr1:
    print(c)
    if c in sStr2:
        nPos = sStr1.index(c)
        print(nPos)
## 57.1. c
## 57.2. e
## 57.3. k
## 57.4. 2
## 57.5. j
## 57.6. g
## 57.7. 4
## 57.8. d
## 57.9. k 
## 57.10. index这里永远都是第一次出现的位置
## 57.11. l
## 57.12. a
## 57.13. 8
## 57.14. b
```

## 3.23. addslashes 的实现
```py
def addslashes(s):
    d = {'"':'\\"', "'":"\\'", "\0":"\\\0", "\\":"\\\\"}
    return ''.join(d.get(c, c) for c in s)

s = "John 'Johny' Doe (a.k.a. \"Super Joe\")\\\0"
print(s)
print(addslashes(s))
```
## 3.24. 取字母与数字

``` python
def OnlyCharNum(s):
    s2 = s.lower()
    fomart = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for c in s2:
        if not c in fomart:
            s = s.replace(c,'')
    return s
print(OnlyCharNum("a000 	Aaa-b")) ## a000Aaab
```

## 3.25. 说明
### 3.25.1. 字符串对象是不可改变的
也就是说在python创建一个字符串后，你不能把这个字符中的某一部分改变。
任何上面的函数改变了字符串后，都会返回一个新的字符串，原字串并没有变。
### 3.25.2. 也有变通的办法的
可以用S=list(S)这个函数把S变为由单个字符为成员的list.
这样的话就可以使用S[3]='a'的方式改变值，然后再使用S=" ".join(S)还原成字符串

# 4. 特殊方法
面向对象编程的类中具有特殊意义的方法
方法名|含义
--|--
__init__()|初始化，进行初始化操作
__del__()|在对象消失前一刻用的
__len__()|对对象执行len()函数调用时，自动触发。一般用于设置对象长度。'''def __len__(self): return''' 一个类的预设的长度
__str__()|对对象使用print()或str()时被自动调用，返回字符串



# 5. 数据库
## 5.1. pymysql 
> - [xampp](https://www.apachefriends.org/zh_cn/index.html)
- ```pip install pymysql --user```
- /xampp/phpMyadmin，打开config.inc.php文件，查看MySQL配置的用户和密码

参考教程：
> - 菜鸟教程：[mysql](http://www.runoob.com/python3/python3-mysql.html) 、[mysql-connector](http://www.runoob.com/python3/python-mysql-connector.html)
- [MySQL官方文档](https://dev.mysql.com/doc/refman/8.0/en/mysql-internals.html)


## 5.2. 错误处理

DB API中定义了一些数据库操作的错误及异常，下表列出了这些错误和异常:

异常|描述
--|--
Warning|当有严重警告时触发，例如插入数据是被截断等等。必须是 StandardError 的子类。
Error|警告以外所有其他错误类。必须是 StandardError 的子类。
InterfaceError|当有数据库接口模块本身的错误（而不是数据库的错误）发生时触发。 必须是Error的子类。
DatabaseError|和数据库有关的错误发生时触发。 必须是Error的子类。
DataError|当有数据处理时的错误发生时触发，例如：除零错误，数据超范围等等。 必须是DatabaseError的子类。
OperationalError|指非用户控制的，而是操作数据库时发生的错误。例如：连接意外断开、 数据库名未找到、事务处理失败、内存分配错误等等操作数据库是发生的错误。 必须是DatabaseError的子类。
IntegrityError|完整性相关的错误，例如外键检查失败等。必须是DatabaseError子类。
InternalError|数据库的内部错误，例如游标（cursor）失效了、事务同步失败等等。 必须是DatabaseError子类。
ProgrammingError|程序错误，例如数据表（table）没找到或已存在、SQL语句语法错误、 参数数量错误等等。必须是DatabaseError的子类。
NotSupportedError|不支持错误，指使用了数据库不支持的函数或API等。例如在连接对象上 使用.rollback()函数，然而数据库并不支持事务或者事务已关闭。 必须是DatabaseError的子类。

## 5.3. OperationalError: (1045, "Access denied for user 'testuser'@'localhost' (using password: YES)")
数据库连接错误，如何添加密码

# 6. 样式
```py
# Python代码块：
>>>import nltk
>>>import numpy

# 一般性的代码块：

add FILE vectorizer.pkl;
add FILE classifier.pkl;

# Scrapy shell中的IPython 记法，其样式如下：

In [1] : sel.xpath('//title/text()')
Out[1]: [<Selector xpath='//title/text()' data=u' Google News'>]

# 所有命令行输入或输出信息的样式：

# cp /usr/src/asterisk-addons/configs/cdr_mysql.conf.sample
# /etc/asterisk/cdr_mysql.conf
```
# 7. 列表
Python列表

定义：相关数据的集合。数据的一种保存形式（相对于变量）。
索引:`list[0]`、`list[-1]`
申明：`[]`,英文逗号隔开。
空列表（初始化）：`list1=[]`
增：`list1.append('a')`
删：del list1[i]
改: 直接list[i]=newdata
切片: list[m:n:i] 左闭右开,i为步距。m省略的话，默认为0。n:-1。i:1

```py
myList=[1,2,3,4,5,'hello']
print(myList)
print(myList[2])
print(myList[-1])
myList[1]=20
print(myList)
myList.append(6)
print(myList)
del myList[5]
print(myList)
# [1, 2, 3, 4, 5, 'hello']
# 3
# hello
# [1, 20, 3, 4, 5, 'hello']
# [1, 20, 3, 4, 5, 'hello', 6]
# [1, 20, 3, 4, 5, 6]
```
# 8. 字典
列表和元组是数据集合。字典是键值对集合。
字典键重合的问题。字典的改和增。
列表和元组的索引对应字典的键。
键为数字的字典。
字典除了用{}申明外，还可以用dict()申明，用`dict()`时，键不能带引号。否则报错 `SyntaxError: keyword can't be an expression`
学习，思考，应用，校正。人做事情，都需要有个反馈，反馈的周期越久，感觉上就越困难。很多大事情，都是由一个个小事务重复或迭代而成，每个小事务中，包含了反馈和校正
列表和元组形式上是[]、()的区别。元组的值不能修改。
定义：数据对集合。
申明：字典的关键字必须是唯一的。不能重复。但申明时不会报错。后面的键值对会自动覆盖前面的同名键值对。
        `{}`没写而且没调用`dict`函数会报错`SyntaxError: invalid syntax`
```py
# 重复的键
myDic={'one':1,'two':2,'two':3} #重复的键自动覆盖，和字典改数据一个理
print(len(myDic)) # 2
print(myDic) # {'one': 1, 'two': 3}
# {}申明
myDic1={'one':1,'two':2,'three':3} #键也可以是数字
print(myDic1)  # {'one': 1, 'two': 2, 'three': 3}
# dict()申明
myDic2=dict(one=1,two=2,three=3) #dict函数申明时建不能带引号，否则报错 SyntaxError: keyword can't be an expression
print(myDic2) #{'one': 1, 'two': 2, 'three': 3}
```
## 8.1. 查
dicName['keyName']
## 8.2. 改
dicName['keyName']=newData
## 8.3. 增
dicName['keyName']=newData
## 8.4. 删
del dicName['keyName']
## 8.5. 排序
用字典的值对字典进行排序，将{1: 2, 3: 4, 4:3, 2:1, 0:0}按照字典的值从大到小进行排序。
```py
import operator
x = {1: 2, 3: 4, 4:3, 2:1, 0:0}
sorted_x = sorted(x.items(), key=operator.itemgetter(1))
print (sorted_x)
```
[(0, 0), (2, 1), (1, 2), (4, 3), (3, 4)]
对字典进行排序是【不可能】的，只有把字典【转换】成另一种方式才能排序。字典本身是无序的，但是如列表元组等其他类型是有序的，所以需要用一个元组列表来表示排序的字典。
# 9. 类型转换
int(number)
float(number)
for key,value in dict.items()
Python 100例 https://www.w3cschool.cn/python/python-100-examples.html
# 10. 类
```py
class Person:   # 创建类
    def _init_(self,name,age):
        # _init_()方法称为类的构造方法。会自动执行。初始化以及规定传递的参数。self后面的参数列表。实例则传给self
        # self 仅在类的定义中使用。表示对整个传递来的对象进行操作。
        # 运行时类中self.会自动转为传进来obInstance.进行运算，即self = obInstance【自我理解】
        self.name = name
        self.age = age
    def detail(self): #通过self调用被封装的内容
        print (self.name)
        print (self.age)
obj1 = Person('santos',18)
obj1.detail()
# Python将obj1传给self参数，'santos'和18传给类的构造方法_init_中的name和age
# 猫可以：喵喵叫、吃、喝、拉、撒
# 狗可以：汪汪叫、吃、喝、拉、撒
# 如果用继承的思想，就可以写成：
# 动物：吃喝拉撒
# 猫：喵喵叫（猫继承动物的功能）
# 狗：汪汪叫（狗继承动物的功能）
class Animal:
    def eat(self):
        print ("%s吃 " %self.name)
    def drink(self):
        print ("%s喝 " %self.name)
    def shit(self):
        print ("%s拉 " %self.name)
    def pee(self):
        print ("%s撒 " %self.name)
class Cat(Animal):
    def __init__(self,name):
        self.name = name
    def cry(self):
        print ('喵喵叫')
class Dog(Animal):
    def __init__(self,name):
        self.name = name
    def cry(self):
        print ('汪汪叫')
c1 = Cat('小白家的小黑猫')
c1.eat()
c1.cry()
d1 = Dog('胖子家的小瘦狗')
d1.eat()
# 小白家的小黑猫吃
# 喵喵叫
# 胖子家的小瘦狗吃
```
# 11. 函数、类，可变与不可变
```py
a = 1
def fun(a):
    a = 2
fun(a)
print (a)
>>>1
a为数字int，函数改变不了函数以外a的值。当一个引用传递给函数时，函数自动复制一份引用。函数里和函数外的引用是不一样的。
a = []
def fun(a):
    a.append(1)
fun(a)
print (a)
>>>[1]
a为列表，函数将函数以外的a值改变了。函数内的引用指向的是可变对象列表a，函数内的列表a和函数外的列表a是同一个。
class Person:
    name="aaa"
p1=Person()
p2=Person()
p1.name="bbb"
print (p1.name)
print (p2.name)
print (Person.name)
>>>bbb
>>>aaa
>>>aaa
p1.name="bbb"表示实例调用了类变量，其实就是函数传参的问题。p1.name一开始指向类变量name="aaa"，但是在实例的作用域里把类变量的引用改变了，就变成了一个实例变量，self.name不再引用Person的类变量name了。
class Person:
    name=[]
p1=Person()
p2=Person()
p1.name.append(1)
print (p1.name)
print (p2.name)
print (Person.name)
>>>[1]
>>>[1]
>>>[1]
!类中的可变量的慎重使用！！！！！！！！！！！！！！！ist、dict等是可更改对象，因此修改一个指向的对象时会把类变量也改变了。
```
# 12. 安装
Python3 in Ubuntu：

apt list --installed | grep python
sudo apt-get update
sudo apt-get upgrade python3
sudo apt install python3-pip
sudo apt-get install build-essential libssl-dev libffi-dev python-dev
pip3 -V
sudo apt install -y python3-venv
mkdir wx
cd wx
python3 -m venv wx
ls wx
source wx/bin/activate
vim hello.py
i(Escape)
zz
:wq

pip3 install flask
python3 hello.py

https://stackoverflow.com/questions/38298652/permissionerror-errno-13-permission-denied-flask-run  change port to 5000(tencent denies port 80)
https://vitux.com/install-python3-on-ubuntu-and-set-up-a-virtual-programming-environment/



# 13. Python第三方库
基本格式：（安装时，把name替换为要安装的第三方库）
- `pip install name`
- `pip install -i https://pypi.tuna.tsinghua.edu.cn/simple name`
 
* 科学计算的包，如Numpy、Scipy、Pandas和Matplotlib。
* 机器学习、生物医学和天体物理学计算，如Scikit-Learn、BioPython。
* 获取网页：requests、urllib、selenium
* 解析数据：lxml、bs4的BeautifulSoup、re(标准库)
* 存储数据：MySQL、MongoDB
# 14. 基础算法
## 14.1. 循环打印输出从1到100的所有奇数
```py
for i in range(1,101):
    if i % 2 == 1:
        print (i)
```
## 14.2. 字符串批量替换
请将字符串“你好$$$我正在学Python@#@#现在需要&*&*&修改字符串”中的符号变成一个空格，需要输出的格式为：“你好 我正在学Python现在需要 修改字符串”。
```py
# 方法1
str1 = '你好$$$我正在学Python@#@#现在需要&%&%&修改字符串'
str2 = str1.replace('$$$', ' ').replace('@#@#', ' ').replace('&%&%&', ' ')
print (str2)
# 方法2
import re
str1 = '你好$$$我正在学Python@#@#现在需要&%&%&修改字符串'
str2 = re.sub('[$@#&%]+', ' ' ,str1)
print (str2)
```
## 14.3. 输出9×9乘法口诀表
```py
# 此法会有多余的换行和末尾对于的空格
for i in range(1,10):
    for j in range(1,i+1):
        print('{}×{}={}'.format(j,i,j*i),end=' ')
    print('\n')
# 更好的方法，没有对齐
for i in range(1,10):
    for j in range(1,i+1):
        print('{}×{}={} '.format(j,i,j*i),end='')
    print('')
# 最好的方法 这里是对齐的。由此可见，'\t'是用来【显示】对齐的，但似乎len就是1
for i in range(1,10):
    for j in range(1,i+1):
        print('{}×{}={}\t'.format(j,i,j*i),end='')
    print('')
# 最好的方法 这里是对齐的
for i in range(1, 10):
    for j in range(1, i+1):
        print ("%dx%d=%d\t" % (j, i, i*j), end="")
    print("")
# 1×1=1
# 1×2=2 2×2=4
# 1×3=3 2×3=6 3×3=9
# 1×4=4 2×4=8 3×4=12 4×4=16
# 1×5=5 2×5=10 3×5=15 4×5=20 5×5=25 
# 1×6=6 2×6=12 3×6=18 4×6=24 5×6=30 6×6=36
# 1×7=7 2×7=14 3×7=21 4×7=28 5×7=35 6×7=42 7×7=49
# 1×8=8 2×8=16 3×8=24 4×8=32 5×8=40 6×8=48 7×8=56 8×8=64
# 1×9=9 2×9=18 3×9=27 4×9=36 5×9=45 6×9=54 7×9=63 8×9=72 9×9=81
# 1×1=1
# 1×2=2 2×2=4
# 1×3=3 2×3=6 3×3=9
# 1×4=4 2×4=8 3×4=12 4×4=16
# 1×5=5 2×5=10 3×5=15 4×5=20 5×5=25
# 1×6=6 2×6=12 3×6=18 4×6=24 5×6=30 6×6=36
# 1×7=7 2×7=14 3×7=21 4×7=28 5×7=35 6×7=42 7×7=49
# 1×8=8 2×8=16 3×8=24 4×8=32 5×8=40 6×8=48 7×8=56 8×8=64
# 1×9=9 2×9=18 3×9=27 4×9=36 5×9=45 6×9=54 7×9=63 8×9=72 9×9=81
# 1×1=1
# 1×2=2   2×2=4
# 1×3=3   2×3=6   3×3=9
# 1×4=4   2×4=8   3×4=12  4×4=16
# 1×5=5   2×5=10  3×5=15  4×5=20  5×5=25
# 1×6=6   2×6=12  3×6=18  4×6=24  5×6=30  6×6=36
# 1×7=7   2×7=14  3×7=21  4×7=28  5×7=35  6×7=42  7×7=49
# 1×8=8   2×8=16  3×8=24  4×8=32  5×8=40  6×8=48  7×8=56  8×8=64
# 1×9=9   2×9=18  3×9=27  4×9=36  5×9=45  6×9=54  7×9=63  8×9=72  9×9=81
# 1x1=1
# 1x2=2   2x2=4
# 1x3=3   2x3=6   3x3=9
# 1x4=4   2x4=8   3x4=12  4x4=16
# 1x5=5   2x5=10  3x5=15  4x5=20  5x5=25
# 1x6=6   2x6=12  3x6=18  4x6=24  5x6=30  6x6=36
# 1x7=7   2x7=14  3x7=21  4x7=28  5x7=35  6x7=42  7x7=49
# 1x8=8   2x8=16  3x8=24  4x8=32  5x8=40  6x8=48  7x8=56  8x8=64
# 1x9=9   2x9=18  3x9=27  4x9=36  5x9=45  6x9=54  7x9=63  8x9=72  9x9=81
print(len('{}\t'.format(5*6)))
print(len('{}\t'.format(5*60)))
print(len('{}\t'.format(5*600)))
print(len('{}\t'.format(5*6000)))
# 3
# 4
# 5
# 6
```
## 14.4. 利润分段计算
请写出一个函数，当输入函数变量月利润为I时，能返回应发放奖金的总数。例如，输出“利润为100000元时，应发放奖金总数为10000元”。
其中，企业发放的奖金根据利润提成。
利润（I）低于或等于10万元时，奖金可提10%；
利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；
利润在20万元到40万元之间时，高于20万元的部分可提成5%；
利润在40万元到60万元之间时，高于40万元的部分可提成3%；
利润在60万元到100万元之间时，高于60万元的部分可提成1.5%；
利润高于100万元时，超过100万元的部分按1%提成。
```py
def calcute_profit(I):
    I = I / 10000
    if I <= 10:
        a = I * 0.01
        return a * 10000
    elif I <= 20 and I > 10:
        b =0.25 + I * 0.075
        return b * 10000
    elif I <= 40 and I > 20:
        c = 0.75 + I * 0.05
        return c * 10000
    elif I <= 60 and I > 40:
        d = 0.95 + I * 0.03
        return d * 10000
    elif I <= 60 and I > 100:
        e = 2 + I * 0.015
        return e * 10000
    else:
        f = 2.95 + I * 0.01
        return f * 10000

I = int(input('净利润:'))
profit = calcute_profit(I)
print ('利润为%d元时，应发奖金总数为%d元' % (I, profit))
def calcute_profit(I):
    arr = [1000000,600000,400000,200000,100000,0] #这应该就是各个分界值了，把它们放在列表里方便访问
    rat = [0.01,0.015,0.03,0.05,0.075,0.1] #这是各个分界值所对应的奖金比例值
    r = 0                       #这是总奖金的初始值
    for idx in range(0,6):      #有6个分界值当然要循环6次
        if I > arr[idx]:
            r = r + (I - arr[idx]) * rat[idx]
            I = arr[idx]
    return r
I = int(input('净利润:'))
profit = calcute_profit(I)
print ('利润为%d元时，应发奖金总数为%d元' % (I, profit))
```
