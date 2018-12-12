---
title: 清洗+词频统计+排序+nltk+可视化
tags: [python, NLTK, ML, code]
---
学习笔记：机器学习之NLTK
<!-- more -->
### 词频统计
```python
str1='Hello Python. I like Python.'
word_freq={}
for tok in str1.split():
    if tok in word_freq:
        word_freq[tok]+=1
    else:
        word_freq[tok]=1
print(word_freq)
>>>
{'Hello': 1, 'Python.': 2, 'I': 1, 'like': 1}
```
#### 要点：
`for tok in str1.split():` 注意in 后面接了个返回列表的函数。
`if tok in word_freq:` 键是如何作用于字典的。
`word_freq[tok]+=1` 字典是如何用键操作值的。
### 函数式统计词频
```python
def wordfreq(str1):
    word_freq={}
    for tok in str1.split():
        if tok in word_freq:
            word_freq[tok]+=1
        else:
            word_freq[tok]=1
    print(word_freq)
def main():
    str1='Hello Python. I like Python.'
    wordfreq(str1)
if __name__=='__main__':
    main()
```
等价于
```py
def wordfreq(str1):
    word_freq={}
    for tok in str1.split():
        if tok in word_freq:
            word_freq[tok]+=1
        else:
            word_freq[tok]=1
    print(word_freq)
str1='Hello Python. I like Python.'
wordfreq(str1)
```
### python官网网站源码
```py
import requests
def HtmlText(url0):
    html0 = requests.get(url).text
    return html0
url='http://python.org/'
html = HtmlText(url)
print(html)
```
### 清理数据
```py
import requests
def HtmlText(url0):
    html0 = requests.get(url).text
    return html0
url = 'http://python.org/'
html = HtmlText(url)
# print(html)
# ~~~~~~~~~~数据清理~~~~~~~~~~~
#==================普通分割str.split===============
# tokens = [tok for tok in html.split()]  #可直接运行
#==================正则分割re.split================
#-----------------\W匹配任意非单词性字符---------
# import re
# tokens = [tok for tok in re.split('\W+',html)] #可直接运行
#==================NLTK的clean_html================
#!!!!! 报错
#import nltk 
# clean = nltk.clean_html(html)
# NotImplementedError: To remove HTML markup, use BeautifulSoup’s get_text() function，
# 原因是BeautifulSoup在相同方面做出了更好的成果之后，nltk自己删除了相应的同类函数，
# 可以用BeautifulSoup中的相应函数进行替代，所以上图的代码可以改为
#!!!!!
#==================bs4的get_text================
from bs4 import BeautifulSoup
tokens = [tok for tok in BeautifulSoup(html,'lxml').get_text().split()]
# ~~~~~~~~~~清理完毕~~~~~~~~~~~
print('Total num of tokens:',str(len(tokens)))
print(tokens[:5])
#['Welcome', 'to', 'Python.org', '{', '"@context":']
```
### 清洗+词频统计+排序
注意字典取子集与字典排序。
```py
import requests
def HtmlText(url0):
    html0 = requests.get(url).text
    return html0
url = 'http://python.org/'
html = HtmlText(url)
from bs4 import BeautifulSoup
tokens = [tok for tok in BeautifulSoup(html,'lxml').get_text().split()]
freq_dis = {}
for tok in tokens:
    if tok in freq_dis:
        freq_dis[tok] += 1
    else:
        freq_dis[tok] = 1
#!!!
#freq_dis.sort() #AttributeError:'dict' object has no attribute 'sort'
#!!!
import operator
sorted_freq_dis= sorted(freq_dis.items(), key=operator.itemgetter(1),reverse=True)
#========dict.items(),key=key=operator.itemgetter(1)【按第二列排序】，reverse=True【从大到小】
print('Total num of tokens:',str(len(sorted_freq_dis)))
print(sorted_freq_dis[:5])
#>>>
#[('Python', 54), ('>>>', 24), ('and', 22), ('to', 18), ('the', 15)]
```
### nltk+词频+可视化
nltk.FreqDist 返回class
```py
import requests
def HtmlText(url0):
    html0 = requests.get(url).text
    return html0
url = 'http://python.org/'
html = HtmlText(url)
from bs4 import BeautifulSoup
tokens = [tok for tok in BeautifulSoup(html,'lxml').get_text().split()]
import nltk
freq_dis_nltk = nltk.FreqDist(tokens)
print(freq_dis_nltk)
#<FreqDist with 584 samples and 1069 outcomes>
print(type(freq_dis_nltk)) 
# <class 'nltk.probability.FreqDist'>
for k,v in freq_dis_nltk.items():
    print(k,v)
    #遗留问题：为什么没降序排列
freq_dis_nltk.plot(10)
```
![image.png](https://upload-images.jianshu.io/upload_images/6908911-5c1a13d8bdc6e418.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 停用词（未实现）
```py
>>>stopwords=[word.strip().lower() for word in open("PATH/english.stop.
txt")]
>>>clean_tokens=[tok for tok in tokens if len(tok.lower())>1 and (tok.
lower() not in stopwords)]
>>>Freq_dist_nltk=nltk.FreqDist(clean_tokens)
>>>Freq_dist_nltk.plot(50, cumulative=False
```
