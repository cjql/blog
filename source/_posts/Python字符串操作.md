---
title: Python字符串操作
tags: [python基础, wiki,fix]
---
字符串。
<!-- more -->
https://docs.python.org/3/library/string.html
# dir(str)
split()：一个能基于某些分隔符来对字符串进行切割的方法。如果你没有为其提供具体参数，它就会默认空格为其分隔符。
strip()：一个可以从字符串中删除其尾随空白符（如'\n'、'\n\r'）的方法。  
另外，你也可以通过rstrip()和lstrip()来选择是剥离字符串左边还是右边的尾部空白符。upper()/lower()：我们可以用这些方法来改变字符串中字母的大小写。   >>> print 
replace()：该方法可用于替换目标字符串中的某个子串。 
当然，字符串类型的函数可远不止这些。这里只是讨论了其中最常用的一些而已
```python
>>> dir(str)
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
```
## 去空格及特殊符号
```python
s.strip().lstrip().rstrip(',')
```
## 复制字符串
```python
str1 = 'Ab'
print(str1*5)  ## AbAbAbAbAb
print(5*str1)  ## AbAbAbAbAb
```
## 连接字符串

[python字符串连接的三种方法及其效率、适用场景详解](https://www.pythontab.com/html/2015/pythonhexinbiancheng_1112/981.html)

```python
str1='a'
str2='b'
print str1+str2  ## ab
```
## 连接字符串(带连接符)

```python
#S.join(seq) #把seq代表的字符串序列，用S连接起来
delimiter = ','
mylist = ['Brazil', 'Russia', 'India', 'China']  #Brazil,Russia,India,China
print delimiter.join(mylist)
```
## 分割字符串
```python
#S.rsplit([sep, [maxsplit]])
#以sep为分隔符，把S分成一个list。maxsplit表示分割的次数。默认的分割符为空白字符
s = 'ab,cde,fgh,ijk'
print(s.split(',')) #返回列表 ['ab', 'cde', 'fgh', 'ijk']
```
## 按行分割字符串
```python
S.splitlines([keepends])
#把S按照行分割符分为一个list，keepends是一个bool值，如果为真每行后而会保留行分割符。
```
## 替换字符串
```python
S.replace(oldstr, newstr, [count])
#把S中的oldstar替换为newstr，count为替换次数。这是替换的通用形式，还有一些函数进行特殊字符的替换
S.strip([chars])
#把S中前后chars中有的字符全部去掉，可以理解为把S前后chars替换为None
S.lstrip([chars])
S.rstrip([chars])
S.expandtabs([tabsize])#把S中的tab字符替换没空格，每个tab替换为tabsize个空格，默认是8个
```
## 批量替换
```python
#S.translate(table[,deletechars])
## 使用上面的函数产后的翻译表，把S进行翻译，并把deletechars中有的字符删掉。需要注意的是，如果S为unicode字符串，那么就不支持 deletechars参数，可以使用把某个字符翻译为None的方式实现相同的功能。此外还可以使用codecs模块的功能来创建更加功能强大的翻译表。
from string import maketrans   # 引用 maketrans 函数。
intab = "aeiou"
outtab = "12345"
trantab = maketrans(intab, outtab)  #这里注意一下
str = "this is string example....wow!!!";
print str.translate(trantab);
```
## 查找字符
返回第一个字符出现的位置。< 0 为未找到
```python
str = 'strchr'
substr = 'ch'
n = str.index(substr)
print n  ## 3 非子字符串时报错，其余返回子字符串第一个字符的下标。中文报错
```
## 查找字符串
```python
sStr1 = 'abcdefg'
sStr2 = 'cde'
print sStr1.find(sStr2) #非子字符串时返回-1。否则返回子字符串第一个字符的下标。中文报错。
```
## 字符串中的搜索
```python
#返回S中出现substr的第一个字母的标号，如果S中没有substr则返回-1。start和end作用就相当于在S[start:end]中搜索
S.index(substr, [start, [end]])
#与find()相同，只是在S中没有substr时，会返回一个运行时错误
S.rfind(substr, [start, [end]])
#返回S中最后出现的substr的第一个字母的标号，如果S中没有substr则返回-1，也就是说从右边算起的第一次出现的substr的首字母标号
S.rindex(substr, [start, [end]])
S.count(substr, [start, [end]]) #计算substr在S中出现的次数
```
## 比较字符串 cmp(str1,str2)
 http://www.runoob.com/python/func-number-cmp.html
## and
```python
sStr1 = '12345678'
sStr2 = 'ab'
print (sStr2 and sStr1) ## 12345678
print (sStr1 and sStr2) ## ab
print len(sStr2 and sStr1) ## 8
print len(sStr1 and sStr2) ## 2
```
## 字符串长度 len(str)
```python
sStr1 = 'strlen'
print len(sStr1)
```
## 将字符串中的大小写转换 
```python
S='abEfeDg'
print(S.lower()) #小写 abefedg
print(S.upper()) #大写 ABEFEDG
print(S.swapcase()) #大小写互换 ABeFEdG
print(S.capitalize()) #首字母大写 Abefedg
```
## 取子字符串
```python
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
## 扫描字符串
### for c in str1:
### if c in str2:
```python
#strpbrk(sStr1,sStr2)
sStr1 = 'cekjgdklab'
sStr2 = 'gka'
nPos = -1
for c in sStr1:
    print(c)
    if c in sStr2:
        nPos = sStr1.index(c)
        print(nPos)
## c
## e
## k
## 2
## j
## g
## 4
## d
## k
## 2
## l
## a
## 8
## b
```
## PHP 中 addslashes 的实现
```python
def addslashes(s):
    d = {'"':'\\"', "'":"\\'", "\0":"\\\0", "\\":"\\\\"}
    return ''.join(d.get(c, c) for c in s)
    ## s = "John 'Johny' Doe (a.k.a. \"Super Joe\")\\\0"
print s
print addslashes(s)
```
## 只显示字母与数字
### if not c in format:
``` python
def OnlyCharNum(s):
    s2 = s.lower();
    fomart = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for c in s2:
        if not c in fomart:
            s = s.replace(c,'')
    return s;
print(OnlyCharNum("a000 	Aaa-b")) ## a000Aaab
```
## 字符串在输出时的对齐
```python
str = "this is string example wow!!!"
print(str.ljust(40,'a'))   
print(str.ljust(41,'a'))   
print(str.rjust(40,'a'))  
print(str.center(40,))
print(str.zfill(40))
## this is string example wow!!!aaaaaaaaaaa
## this is string example wow!!!aaaaaaaaaaaa
## aaaaaaaaaaathis is string example wow!!!
##      this is string example wow!!!
## 00000000000this is string example wow!!!
```
## 字符串还有一对编码和解码的函数
```python
#S.encode([encoding,[errors]])
## 其中encoding可以有多种值，
## 比如gb2312 gbk gb18030 bz2 zlib big5 bzse64等都支持。
## errors默认值为"strict"，意思是UnicodeError。
## 可能的值还有'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' 和所有的通过codecs.register_error注册的值。
## 这一部分内容涉及codecs模块
S.decode([encoding,[errors]])
```
## 字符串的测试、判断函数
这一类函数在string模块中没有，这些函数返回的都是bool值
```python
S.startswith(prefix[,start[,end]])
#是否以prefix开头
S.endswith(suffix[,start[,end]])
#以suffix结尾
S.isalnum() #是否全是字母和数字，并至少有一个字符
S.isalpha() #是否全是字母，并至少有一个字符
S.isdigit() #是否全是数字，并至少有一个字符
S.isspace() #是否全是空白字符，并至少有一个字符
S.islower() #S中的字母是否全是小写
S.isupper() #S中的字母是否全是大写
S.istitle() #S是否是首字母大写的
```
## 字符串类型转换函数，这几个函数只在string模块中有
```python
string.atoi(s[,base])
#base默认为10，如果为0,那么s就可以是012或0x23这种形式的字符串，如果是16那么s就只能是0x23或0X12这种形式的字符串
string.atol(s[,base]) #转成long
string.atof(s[,base]) #转成float
```
## 说明
这里再强调一次，字符串对象是不可改变的:
也就是说在python创建一个字符串后，你不能把这个字符中的某一部分改变。
任何上面的函数改变了字符串后，都会返回一个新的字符串，原字串并没有变。
也有变通的办法的:
可以用S=list(S)这个函数把S变为由单个字符为成员的list.
这样的话就可以使用S[3]='a'的方式改变值，然后再使用S=" ".join(S)还原成字符串
# 字符串格式化
## %操作符
更高级别的控制
### 括号:元组
### %S%d%4.2f:占位符（格式化符号）
%s:字符串
%d:整数
%5d:前面添加空格，总长度为5
%f:浮点数
%4.2f:总长4，2个小数位的浮点数
### %:格式化符号
print("I'm %s. I'm %d year old" % ('Vamei', 99))
## format
默认：顺序传递
标准格式：{位置:值}
https://docs.python.org/3/library/string.html#format-string-syntax
```py
'{1} is better than {0}'.format('a','b')  
#'b is better than a'
'{:10.2f}'.format(1.23456) # 长度为10，保留两位小数，前面空格填补
```
