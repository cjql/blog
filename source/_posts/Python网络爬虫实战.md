---
title: Python网络爬虫实战
ttags: [menu, python, 爬虫]
---
豆瓣书目
<!-- more -->
目 录
第1章 Python环境配置 1
1.1Python简介 1
1.1.1Python的历史由来 1
1.1.2Python的现状 2
1.1.3Python的应用 2
1.2Python开发环境配置 4
1.2.1Windows下安装Python 4
1.2.2Windows下安装配置pip 9
1.2.3Linux下安装Python 10
1.2.4Linux下安装配置pip 12
1.2.5永远的开始：hello world 15
1.3 本章小结 20
第2章 Python基础 21
2.1Python变量类型 21
2.1.1数字 21
2.1.2字符串 24
2.1.3列表 28
2.1.4元组 34
2.1.5字典 36
2.2Python语句 40
2.2.1条件语句——if else 40
2.2.2有限循环——for 41
2.2.3无限循环——while 43
2.2.4中断循环——continue、break 45
2.2.5异常处理——try except 47
2.2.6导入模块——import 49
2.3 函数和类 53
2.3.1函数 53
2.3.2类 59
2.4Python代码格式 65
2.4.1Python代码缩进 65
2.4.2Python命名规则 66
2.4.3Python代码注释 68
2.5Python调试 70
2.5.1Windows下IDLE调试 70
2.5.2Linux下pdb调试 73
2.6 本章小结 77
第3章 简单的Python脚本 78
3.1 九九乘法表 78
3.1.1Project分析 78
3.1.2Project实施 78
3.2 斐波那契数列 80
3.2.1Project分析 80
3.2.2Project实施 80
3.3 概率计算 81
3.3.1Project分析 81
3.3.2Project实施 82
3.4 读写文件 83
3.4.1Project分析 83
3.4.2project实施 84
3.5 本章小结 85
第4章 Python爬虫常用模块 86
4.1Python标准库之urllib2模块 86
4.1.1urllib2请求返回网页 86
4.1.2urllib2使用代理访问网页 88
4.1.3urllib2修改header 91
4.2Python标准库——logging模块 95
4.2.1简述logging模块 95
4.2.2自定义模块myLog 99
4.3 其他有用模块 102
4.3.1re模块（正则表达式操作） 102
4.3.2sys模块（系统参数获取） 105
4.3.3time模块（获取时间信息） 106
4.4 本章小结 110
第5章 Scrapy爬虫框架 111
5.1 安装Scrapy 111
5.1.1Windows下安装Scrapy环境 111
5.1.2Linux下安装Scrapy 112
5.1.3vim编辑器 113
5.2Scrapy选择器XPath和CSS 114
5.2.1XPath选择器 114
5.2.2CSS选择器 117
5.2.3其他选择器 118
5.3Scrapy爬虫实战一：今日影视 118
5.3.1创建Scrapy项目 119
5.3.2Scrapy文件介绍 120
5.3.3Scrapy爬虫编写 123
5.4Scrapy爬虫实战二：天气预报 129
5.4.1项目准备 130
5.4.2创建编辑Scrapy爬虫 131
5.4.3数据存储到json 138
5.4.4数据存储到MySQL 140
5.5Scrapy爬虫实战三：获取代理 146
5.5.1项目准备 146
5.5.2创建编辑Scrapy爬虫 147
5.5.3多个Spider 153
5.5.4处理Spider数据 157
5.6Scrapy爬虫实战四：糗事百科 159
5.6.1目标分析 159
5.6.2创建编辑Scrapy爬虫 160
5.6.3Scrapy项目中间件——添加headers 161
5.6.4Scrapy项目中间件——添加proxy 165
5.7scrapy爬虫实战五：爬虫攻防 167
5.7.1创建一般爬虫 167
5.7.2封锁间隔时间破解 171
5.7.3封锁Cookies破解 171
5.7.4封锁user-agent破解 171
5.7.5封锁IP破解 174
5.8 本章小结 177
第6章 Beautiful Soup爬虫 178
6.1 安装BeautifulSoup环境 178
6.1.1Windows下安装Beautiful Soup 178
6.1.2Linux下安装Beautiful Soup 179
6.1.3最强大的IDE——Eclipse 179
6.2BeautifulSoup解析器 188
6.2.1bs4解析器选择 188
6.2.2lxml解析器安装 189
6.2.3使用bs4过滤器 190
6.3bs4爬虫实战一：获取百度贴吧内容 196
6.3.1目标分析 196
6.3.2项目实施 197
6.3.3代码分析 205
6.3.4Eclipse调试 206
6.4bs4爬虫实战二：获取双色球中奖信息 207
6.4.1目标分析 207
6.4.2项目实施 210
6.4.3保存结果到Excel 214
6.4.4代码分析 221
6.5bs4爬虫实战三：获取起点小说信息 221
6.5.1目标分析 222
6.5.2项目实施 223
6.5.3保存结果到MySQL 226
6.5.4代码分析 230
6.6bs4爬虫实战四：获取电影信息 230
6.6.1目标分析 230
6.6.2项目实施 232
6.6.3bs4反爬虫 235
6.6.4代码分析 237
6.7bs4爬虫实战五：获取音悦台榜单 238
6.7.1目标分析 238
6.7.2项目实施 239
6.7.3代码分析 244
6.8 本章小结 245
第7章 Mechanize模拟浏览器 246
7.1 安装Mechanize模块 246
7.1.1Windows下安装Mechanize 246
7.1.2Linux下安装Mechanize 247
7.2Mechanize 测试 248
7.2.1Mechanize百度 248
7.2.2Mechanize光猫F460 251
7.3Mechanize实站一：获取Modem信息 254
7.3.1获取F460数据 254
7.3.2代码分析 257
7.4Mechanize实战二：获取音悦台公告 258
7.4.1登录原理 258
7.4.2获取Cookie的方法 259
7.4.3获取Cookie 262
7.4.4使用Cookie登录获取数据 266
7.5 本章总结 270
第8章 Selenium模拟浏览器 271
8.1 安装Selenium模块 271
8.1.1Windows下安装Selenium模块 271
8.1.2Linux下安装Selenium模块 272
8.2 浏览器选择 272
8.2.1Webdriver支持列表 272
8.2.2Windows下安装PhantomJS 273
8.2.3Linux下安装PhantomJS 276
8.3Selenium&PhantomJS抓取数据 277
8.3.1获取百度搜索结果 277
8.3.2获取搜索结果 280
8.3.3获取有效数据位置 282
8.3.4从位置中获取有效数据 284
8.4Selenium&PhantomJS实战一：获取代理 285
8.4.1准备环境 285
8.4.2爬虫代码 287
8.4.3代码解释 289
8.5Selenium&PhantomJS实战二：漫画爬虫 289
8.5.1准备环境 290
8.5.2爬虫代码 291
8.5.3代码解释 294
8.6 本章总结 294