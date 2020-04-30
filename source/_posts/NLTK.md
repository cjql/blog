---
title: NLTK
date: 2035-12-31 01:23:47
categories: [计算机,机器学习]
---
《NLTK基础教程——用NLTK和Python库构建机器学习应用》笔记。
<!-- more -->
维基百科上与NLP相关的页面：https://en.wikipedia.org/wiki/NLP

目前，NLP已被认为是业界最为稀缺的技能之一。
NLTK 库是当前自然语言处理（NLP）领域最为流行、使用最为广泛的库之一。
——Gartner公司新一轮的趋势报告，NLP技术赫然高居榜首。

## 代码段
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

### 清理数据
```py
import requests

def HtmlText(url0):
    html0 = requests.get(url).text
    return html0

url = 'http://python.org/'
html = HtmlText(url)

from bs4 import BeautifulSoup
tokens = [tok for tok in BeautifulSoup(html,'lxml').get_text().split()]

print('Total num of tokens:',str(len(tokens)))
print(tokens[:5])
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

import operator
sorted_freq_dis= sorted(freq_dis.items(), key=operator.itemgetter(1),reverse=True)
# key=operator.itemgetter(1)【按第二列排序】
print('Total num of tokens:',str(len(sorted_freq_dis)))
print(sorted_freq_dis[:5])

```
### nltk+词频+可视化
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
freq_dis_nltk.plot(10)

```
[结果](https://upload-images.jianshu.io/upload_images/6908911-5c1a13d8bdc6e418.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 停用词
```py
>>>stopwords=[word.strip().lower() for word in open("english.stop.txt")]
>>>clean_tokens=[tok for tok in tokens if len(tok.lower())>1 and (tok.lower() not in stopwords)]
>>>Freq_dist_nltk=nltk.FreqDist(clean_tokens)
>>>Freq_dist_nltk.plot(50, cumulative=False)
```

## 技能树
### 里程碑
```
充分整合了自己的技能
在数据科学领域拥有丰富的项目经验
数据分析和商业智能项目相关的软件开发经验
帮助公司改进了不同产品的一些特性并构建了一些新特性
```
### NLP
```
正则表达式
Python编程语言基础
语言学
    NLP无疑是对计算机语言学的具体应用。
    计算机语言学家：专用名词，将计算机科学应用于语言处理领域的人。
        主要研究的是语言处理理论
        足够的语言理解能力
        用计算机技能来模拟出语言的不同方面
NLP
    背景知识
    基本概念
        NLP多数情况下指的是
            计算机上各种大同小异的语言处理应用
            用NLP技术构建实际应用程序
            在实践中，NLP与教孩子学语言的过程非常类似
            大多数任务对于人类而言都是非常自然的能力
                如对单词、语句的理解，形成语法和结构都正确的语句等
        NLP的一些任务必须要转向文本分析
            一大部分还仍是当前计算机领域中非常棘手的挑战
    相关的特性
    NLP任务和机器学习应用
    实践
        自行构建出一个能实际运行的、涉及云词的小型应用程序
        构建基本的单词云实例、顺利地产生出云词
        构建一些NLP应用
        构建出大部分与数据科学相关问题的单点解决方案
        本体开发
NLTK
    与文本挖掘或自然语言处理任务相关的库
    NLTK、scikit-learn、panda和NumPy
```
### NLP工具清单
```
GATE
Mallet
Open NLP
UIMA
Stanford toolkit
Genism
Natural Language Tool Kit (NLTK)
```
上述大多数工具都是用Java编写的，在功能上也都很相似，强大实用。有些是由相关组织在建立自己的NLP应用时开发的，有些是开源项目。
### 挑战
对于我们所生产出来的那些博客、微博、Facebook订阅、聊天信息、E-mail以及网络评论等，各公司都在致力于收集所有不同种类的数据，以便建立更好的客户针对性，形成有意义的见解。
```
大数据的概念问世 ⇒ 主要挑战
    业界需要越来越多不仅能处理结构化数据，同时也能处理半结构化或非结构化数据的人才
        要想处理所有的这些非结构化数据源，就需要掌握一些NLP技能的人员
```
### 现实应用
```
拼写校正（MS Word/其他编辑器）
信息检索、网页抓取及检索
搜索引擎（Google、Bing、Yahoo!、WolframAlpha）
语音引擎（Siri、Google Voice）、语音识别
垃圾邮件分类（所有电子邮件服务）、垃圾过滤器来过滤垃圾邮件
新闻订阅（Google、Yahoo!等）
机器翻译（Google翻译与其他类似服务）
IBM Watson
虚拟系统的性能优化
气候变化的预测
人力资源分析
语言处理、文本分析、文本处理、文本分类、社交媒体挖掘、用户输入、Twitter句柄及代码
大规模文本挖掘、大型非结构化数据、分布式处理
语块分解
机器学习
数据科学、数据处理
最基本的事情用到Siri
```

### 文本处理
```
文本的歧义及其清理
    基本、通用的预处理技术、步骤。在任何文本挖掘和NLP任务中所需的所有预处理步骤。
        断词处理、词干处理、停用词去除
        标识化处理（tokenization）
        词干提取（stemming）
        停用词（stop word）去除
        文本清理技术，如何用NLTK来简化实现
    专属于NPL领域的预处理技术
        词性标注（part-of-speech tagging）
        命名实体识别（Named-entity recognition，NER）
            大多数文本相关的NLP任务都会涉及
    更为复杂的NLP任务上，例如语法解析（parsing）以及其他NLP应用
    NLP应用
        如何进行文本分类，可以用NLTK搭配scikit-learn库来进行
        如何从网页和社交媒体中采集数据
        如何用NLTK进行大规模的文本处理
```
### 探索性数据分析
```
探索性数据分析（EDA）。通常对于一段文本域而言，EDA可能包含了多重含义。
文档的主体术语类型是其中的一个简单用例。
主题是什么？
它们的出现频率如何？
整个分析过程还会或多或少地涉及一些预处理层面的步骤。
试着先用纯Python的方式来实现它，然后用NLTK再将其实现一次。
一种可行的做法是只选取其中的标记，包括数字和字符。
```
### NLTK背景相关
NLTK的设计充分体现了简单的魅力。也就是说，对于大多数复杂的NLP任务，它都可以用寥寥几行代码来实现。
NLTK：易用性（NLTK库是一个非常易学的工具包）和其对相关概念的解释度。
这得益于Python本身非常平缓的学习曲线（毕竟NLTK是用它编写的），人们学习起来会非常快。
NLTK库中收纳了NLP领域中的绝大部分任务，它们都被实现得非常优雅，且易于使用。
正是出于上述的这些原因，NLTK如今已成为了NLP社区最流行的库之一。
### 停用词
无用词。由于冠词、代词在大多数文档中都是普遍存在的，因而对信息的识别没有帮助。
a an the
of for =
在大多数NLP及信息检索任务中，人们通常都会先删除掉这些停用词。
## 背景相关
### 浪潮
```
AlphaGo
Master已经对人类顶级高手连胜60局了。
媒体的热度，越来越火了。
Google在汽车驾驶和围棋这两个领域的项目得到了很好的进展和宣传
    而这两个领域在过去被很多人想当然地认为是人类的专属领域。
```
[发展轨迹](https://upload-images.jianshu.io/upload_images/6908911-6c01a13213e00401.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 恐惧
在专属领域接连被突破情况下，一些人得了“机器恐惧症”。例如高晓松先生的这段微博：
<blockquote>
@高晓松　
作为自幼学棋，崇拜国手的业余棋手，看了Master50 : 0横扫中日韩顶尖高手的对局，难过极了。为所有的大国手伤心，路已经走完了。多少代大师上下求索，求道求术，全被破解。未来一个八岁少年只要一部手机就可以战胜九段，荣誉信仰灰飞烟灭。等有一天，机器做出了所有的音乐和诗歌，我们的路也会走完。
</blockquote>
对于机器来说，围棋是一种基于统计学概率的决策模型，属于数学领域的问题，它本来就是机器的强项。
```
人们在讨论人工智能的时候容易将机器“人格化” ⇒ 恐惧
很多科幻作品就是这么干的，这看起来很合理，但问题是机器无论如何都不是人。
用围棋对于人类的难度来推导机器智能的进步，其实是很没有逻辑的事情。
```
事实上，今天所流行的这些人工智能方法都是在20世纪70年代前后提出的理论。
今天的辉煌主要是由于硬件的进步为实现提供了基础，但在智能上并没有多大的实质突破。
人们对于鉴定人工智能的主要标准早有定论，那就是图灵测试。

### 图灵测试
```
对于以下两种智能来说，困难的定义是截然不同的
    机器的专长是数学领域
    图灵测试关注的是人机对话能力
        自然语言处理就是首当其冲的一个领域
            目的就是把人类的文本、音频转换成可被分析的数学模型
                这对于机器来说是比围棋困难得多的事情
                这也是人类和机器的根本区别
                机器能通过对话骗到你的一百块钱，也比它下棋下赢世界冠军更智能
```


## 名片
### Nitin Hardeniya
Nitin Hardeniya。数据科学家。本书作者。
拥有IIIT-H的计算语言学硕士学位，并且是5项客户体验专利的作者。
4年以上从业经验，期间分别任职于Fidelity、Groupon等公司，业务横跨各个不同的领域。
至少拥有5年日常使用Python的工作经验。他相信，用Python可以构建出大部分与数据科学相关问题的单点解决方案。
他热衷于研究语言处理及大型非结构化数据。
他将自己写这本书的经历看成是自己职业生涯的众多荣誉之一，希望用一种非常简单的形式为人们介绍与NLP和机器学习相关的、所有的这些复杂工具。在这本书中，他为读者提供了一种变通方法，即使用一些相关特定能力的Python库，如NLTK、scikit-learn、panda和NumPy等。
### Afroz Hussain
Afroz Hussain。数据科学家。本书审阅者。
目前在PredictifyMe公司从事与美国基础数据科学、机器学习起步相关的研究。
他在数据科学领域拥有丰富的项目经验、多年使用Python、scikit-learn，以及基于NLTK进行文本挖掘的工作经历。
10年以上的编程经验以及与数据分析和商业智能项目相关的软件开发经验。
此外，他还通过在线课程以及参加Kaggle比赛等活动，获得了不少数据科学领域的新技能。
### Sujit Pal
Sujit Pal。本书审阅者。
目前就职于`Elsevier实验室`，这是一个包含了`Reed-Elsevier PLC工作组`在内的研发团队。
他的兴趣主要集中在信息检索、分布式处理、本体开发、自然语言处理和机器学习这几个领域。
他很喜欢用Python、Scala和Java来编写自己的代码。
他充分整合了自己在这些方面的技能，帮助公司改进了不同产品的一些特性并构建了一些新特性。
他深信自己需要终身学习，并且也在博客[sujitpal.blogspot.com](http://sujitpal.blogspot.com/)中分享其经验。
### Kumar Raj
Kumar Raj。第二代数据科学家。本书审阅者。
印度理工学院Kharagpur技术分校。
目前就职于惠普软件的研发部门，为其提供相关的解决方案。
主要负责开发以惠普软件产品为核心的分析层。
两年以上各种大数据分析领域的工作经验，涉及文本分析、网页抓取及检索、人力资源分析、虚拟系统的性能优化，以及气候变化的预测等。
## 优质教程
《Google Python class》的参考资料：https://developers.google.com/edu/python
https://wiki.python.org/moin/BeginnersGuide。
## 机器学习工具箱
http://www.wordle.net/advanced  词云。按频率得到词云图。是在大量非结构化文本中进行可视化处理的一种好方法。也是文本分析领域中相当流行的一种运用。
## 官方网站
https://www.python.org/
https://www.anaconda.com/
http://www.nltk.org/
http://www.nltk.org/install.html  安装说明
https://scikit-learn.org/stable/
http://www.numpy.org/
http://www.scipy.org/
https://pandas.pydata.org/
https://matplotlib.org/
https://radimrehurek.com/
https://scrapy.org
https://dev.twitter.com/overview/api/twitter-libraries
https://developers.facebook.com/
