---
title: Python文件读写
tags: [python基础, wiki,fix]
---
文件读写。
<!-- more -->
# f=open() and f.read()

```python
f= open("file1.txt",encoding='utf-8')#不写encoding，默认为操作系统编码
file_data=f.read() #完全读取
print(file_data)
f.close() #需要执行关闭操作
# 1111
# 222
# 333
# 44
# 5555
# 666
# 你好!
# hello
```
# with open() as if:
```python
with open("file.txt",encoding='utf-8')as f:
    file_data=f.read()
    print(file_data)  #不需要执行close(),系统会自动关闭。
# 1111
# 222
# 333
# 44
# 5555
# 666
# 你好!
# hello
```
# readline()
```python
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
# True
# False
# 1 1111
#
# 2 222
#
# 3 333
#
# 4 44
#
# 5 5555
#
# 6 666
#
# 7 你好!
#
# 8 hello
```
# readlines()
将文件内容读取到列表中
```python
with open("file.txt",encoding='utf-8')as f:
   print(f.readlines()) 
#['1111\n', '222\n', '333\n', '44\n', '5555\n', '666\n', '你好!\n', 'hello']
    for i in f.readlines():
        print(i)
#         1111
#
#         222
#
#         333
#
#         44
#
#         5555
#
#         666
#
#         你好!
#
#         hello
```
# 不打印换行符 print(,end='')
```python
with open('file.txt','r',encoding='utf-8',newline='') as f:
    print(f.readlines())
# #     ['1111\r\n', '222\r\n', '333\r\n', '44\r\n', '5555\r\n', '666\r\n', '你好!\r\n', 'hello']
    for i in f.readlines():
        print(i,end='') #不打印换行符
#         1111
#         222
#         333
#         44
#         5555
#         666
#         你好!
#         hello
```
# write(args),writelines(args)和seek(args)

```python
with open('file.txt','w+',encoding='utf-8') as f: #原文件被清空后重新写入
    f.write('a\n')
    f.write('b\nc\n')
    f.writelines(['d\n', 'e\n'])
    f.seek(0) #将指针seek到0位置，否则读不出数据
    print(f.read())
#     # a
#     # b
#     # c
#     # d
#     # e
```
# 从指针位置所在处写入

```python
with open('file.txt','r+',encoding='utf-8') as f: #从指针位置所在处写入
    print(f.readline())
    f.write('a\n')
    f.write('b\nc\n')
    f.writelines(['d\n', 'e\n'])
    f.seek(0) #将指针seek到0位置，否则读不出数据
    print(f.read())
#     # 1111
#     #
#     # 1111
#     # 222
#     # 333
#     # 44
#     # 5555
#     # 666
#     # 你好!
#     # helloa
#     # b
#     # c
#     # d
#     # e
```
# 写到文件最后

```python
with open('file.txt','a+',encoding='utf-8') as f:
    f.write('写到文件最后')
    f.seek(0)
    print(f.read())
#     # 1111
#     # 222
#     # 333
#     # 44
#     # 5555
#     # 666
#     # 你好!
#     # hello写到文件最后
```
# 查看文件编码

```python
with open('file.txt','a+',encoding='utf-8') as f:
    print(f.encoding) #查看文件编码
#     #utf - 8
# #'字符串'---------encode---------》bytes
# #bytes---------decode---------》'字符串'
```
 # b模式不能指定编码
```python
with open('file.txt','rb') as f:
    file_data=f.read()
    print(file_data)
    print(file_data.decode('utf-8'))
#     # b'1111\r\n222\r\n333\r\n44\r\n5555\r\n666\r\n\xe4\xbd\xa0\xe5\xa5\xbd!\r\nhello'
#     # 1111
#     # 222
#     # 333
#     # 44
#     # 5555
#     # 666
#     # 你好!
#     # hello
```
# 边写边读

```python
with open('file.txt','wb+') as f:
    file_data = 'test wb'
    f.write(file_data.encode('utf-8'))
    f.seek(0)
    print(f.read())
#     # b'test wb'
```
#  flush(),tell(),seek(),truncate()

```python
flush() 文件内容从内存刷到硬盘
tell()  查看文件当前光标位置
seek(3) #从开头开始算，将光标移动到第三个字节
        #   seek 有三种工作方式，seek(offset[, whence])
        #   seek(2,0)=seek(2),0是默认方式，相当于从0字节位置开始
        #   seek(2,1)   1 相对当前位置
        #   seek(-2,2)  2 从文件末尾开始
truncate(10) #从开头开始算，将文件只保留从0-10个字节的内容，文件打开方式必须包含"写"，
               #但是w和w+除外，因为这两种方式会首先把文件清空。
with open('file.txt','ab') as f:
    f.truncate(1)
```
# 打印文件最后一行

```python
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