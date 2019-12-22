

==HTTP头部信息==

HTTP头部信息由众多的头域组成，每个头域由一个域名、冒号（:）和域值三部分组成。域名是大小写无关的，域值前可以添加任何数量的空格符，头域可以被扩展为多行，在每行开始处，使用至少一个空格或制表符。

通过浏览器访问博客园首页时，使用F12打开开发者工具，里面可以监控整个HTTP访问的过程。下面就以访问博客园的HTTP请求进行分析，首先是浏览器发出请求，请求头的数据如下：

GET / HTTP/1.1 Host: www.cnblogs.com User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0 Accept: text/html, application/xhtml+xml, application/xml; q=0.9, */*; q=0.8 Accept-Language: zh-CN, zh; q=0.8, en-US; q=0.5, en; q=0.3 Accept-Encoding: gzip, deflate Connection: keep-alive If-Modified-Since: Sun, 30 Oct 2016 10:13:18 GMT

在请求头中包含以下内容：

GET代表的是请求方式，HTTP/1.1表示使用HTTP 1.1协议标准。

Host头域，用于指定请求资源的Intenet主机和端口号，必须表示请求URL的原始服务器或网关的位置。HTTP/1.1请求必须包含主机头域，否则系统会以400状态码返回。

User-Agent头域，里面包含发出请求的用户信息，其中有使用的浏览器型号、版本和操作系统的信息。这个头域经常用来作为反爬虫的措施。

Accept请求报头域，用于指定客户端接受哪些类型的信息。例如：Accept:image/gif，表明客户端希望接受GIF图象格式的资源；Accept:text/html，表明客户端希望接受html文本。

Accept-Language请求报头域，类似于Accept，但是它用于指定一种自然语言。例如：Accept-Language:zh-cn．如果请求消息中没有设置这个报头域，服务器假定客户端对各种语言都可以接受。

Accept-Encoding请求报头域，类似于Accept，但是它用于指定可接受的内容编码。例如：Accept-Encoding:gzip.deflate。如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。

Connection报头域允许发送用于指定连接的选项。例如指定连接的状态是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接。

If-Modified-Since头域用于在发送HTTP请求时，把浏览器端缓存页面的最后修改时间一起发到服务器去，服务器会把这个时间与服务器上实际文件的最后修改时间进行比较。如果时间一致，那么返回HTTP状态码304（不返回文件内容），客户端收到之后，就直接把本地缓存文件显示到浏览器中。如果时间不一致，就返回HTTP状态码200和新的文件内容，客户端收到之后，会丢弃旧文件，把新文件缓存起来，并显示到浏览器中。

请求发送成功后，服务器进行响应，接下来看一下响应的头信息，数据如下：

HTTP/1.1200 OK Date: Sun, 30 Oct 2016 10:13:50 GMT Content-Type: text/html; charset=utf-8 Transfer-Encoding: chunked Connection: keep-alive Vary: Accept-Encoding Cache-Control: public, max-age=3 Expires: Sun, 30 Oct 2016 10:13:54 GMT Last-Modified: Sun, 30 Oct 2016 10:13:24 GMT Content-Encoding: gzip

响应头中包含以下内容：

HTTP/1.1表示使用HTTP 1.1协议标准，200 OK说明请求成功。

Date表示消息产生的日期和时间。

Content-Type实体报头域用于指明发送给接收者的实体正文的媒体类型。text/html;charset=utf-8代表HTML文本文档，UTF-8编码。

Transfer-Encoding:chunked表示输出的内容长度不能确定。

Connection报头域允许发送用于指定连接的选项。例如指定连接的状态是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接。

Vary头域指定了一些请求头域，这些请求头域用来决定当缓存中存在一个响应，并且该缓存没有过期失效时，是否被允许利用此响应去回复后续请求而不需要重复验证。

Cache-Control用于指定缓存指令，缓存指令是单向的，且是独立的。请求时的缓存指令包括：no-cache（用于指示请求或响应消息不能缓存）、no-store、max-age、max-stale、min-fresh、only-if-cached；响应时的缓存指令包括：public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age、s-maxage。

Expires实体报头域给出响应过期的日期和时间。为了让代理服务器或浏览器在一段时间以后更新缓存中（再次访问曾访问过的页面时，直接从缓存中加载，缩短响应时间和降低服务器负载）的页面，我们可以使用Expires实体报头域指定页面过期的时间。

Last-Modified实体报头域用于指示资源的最后修改日期和时间。

Content-Encoding实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。

从上面分析的过程中，大家基本上了解了请求和响应的头信息，最后进行一下总结：

HTTP消息报头主要包括普通报头、请求报头、响应报头、实体报头。具体如下：

1）在普通报头中，有少数报头域用于所有的请求和响应消息，但并不用于被传输的实体，只用于传输的消息。

2）请求报头允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。

3）响应报头允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息。

4）请求和响应消息都可以传送一个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文和请求所标识的资源的元信息。

通过表2-10～表2-13对报文头进行分类列举说明。

表2-10 常见普通报头

表2-11 常见请求报头

表2-12 常见响应报头

表2-13 常见实体报头

2.2.4 Cookie状态管理

Cookie和Session都用来保存状态信息，都是保存客户端状态的机制，它们都是为了解决HTTP无状态的问题所做的努力。对于爬虫开发来说，我们更加关注的是Cookie，因为Cookie将状态保存在客户端，Session将状态保存在服务器端。

Cookie是服务器在本地机器上存储的小段文本并随每一个请求发送至同一个服务器。网络服务器用HTTP头向客户端发送Cookie，浏览器则会解析这些Cookie并将它们保存为一个本地文件，它会自动将同一服务器的任何请求绑定上这些Cookie。

Cookie的工作方式：服务器给每个Session分配一个唯一的JSESSIONID，并通过Cookie发送给客户端。当客户端发起新的请求的时候，将在Cookie头中携带这个JSESSIONID。这样服务器能够找到这个客户端对应的Session，流程如图2-9所示。

图2-9 Cookie工作流程

2.2.5 HTTP请求方式

HTTP的请求方法包括如下几种：

GET

POST

HEAD

PUT

DELETE

OPTIONS

TRACE

CONNECT

其中常用的请求方式是GET和POST：

GET方式：是以实体的方式得到由请求URL所指定资源的信息，如果请求URL只是一个数据产生过程，那么最终要在响应实体中返回的是处理过程的结果所指向的资源，而不是处理过程的描述。

POST方式：用来向目的服务器发出请求，要求它接受被附在请求后的实体，并把它当作请求队列中请求URL所指定资源的附加新子项。

GET与POST方法有以下区别：

在客户端，Get方式通过URL提交数据，数据在URL中可以看到：POST方式，数据放置在实体区内提交。

GET方式提交的数据最多只能有1024字节，而POST则没有此限制。

安全性问题。使用Get的时候，参数会显示在地址栏上，而Post不会。所以，如果这些数据是非敏感数据，那么使用Get；如果用户输入的数据包含敏感数据，那么还是使用Post为好。

在爬虫开发中基本处理的也是GET和POST请求。GET请求在访问网页时很常见，POST请求则是常用在登录框、提交框的位置。下面展示一个完整的POST请求，这是登录知乎社区时捕获的请求，上面一部分是请求头，下面全部加粗的数据是请求实体。请求内容如下：

POST /login/phone_num HTTP/1.1 Host: www.zhihu.com User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0 Accept: */Accept-Language: zh-CN, zh; q=0.8, en-US; q=0.5, en; q=0.3 Accept-Encoding: gzip, deflate, br X-Xsrftoken: ade0896dc13cc3b2204a8f7742ad7f48 Content-Type: application/x-www-form-urlencoded; charset=UTF-8 X-Requested-With: XMLHttpRequest Referer: https://www.zhihu.com/ Content-Length: 117 Cookie:q_c1=7bc53a12dd7942d3b64776441ab69983|1477975324000|1465870098000; d_c0="ACAAa1M-EwqPTgdv2RIP3IIzHO2R7zKBGpw=|1465870098"; __utma=51854390.1118849962.1465870098.1466355392.1477975328.3; __utmz=51854390.1465870098.1.1. utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=51854390.000--|3=entr y_date=20160614=1; _zap=7514ab27-5b42-4c95-a4cc-e31ce5757e14; _za=4ab6eb3b-c 34f-4772-aac2-7182f21894cb; _xsrf=ade0896dc13cc3b2204a8f7742ad7f48; l_cap_id="ZjBkODkyYjdiZWZkNDQ2NWE4YzI1ZTk3Njc0MDZlMWM=|1477975324|95c5032340720551391178c9ee67cd8a3e2849d5"; cap_id="ZjAxNjBmNzU5NzZkNDI2ZTlkYTk3ZDVlNDNhNzgy ZTA=|1477975324|0616dfa45cd15d66fe792484c6ae0af71557cb3c"; n_c=1; __utmb=51854390.2.10.1477975328; __utmc=51854390; __utmt=1; login="ZWU1NTFlM2EzYzg4NDNjNzlhODY wN2ZhYzgyZmExOTE=|1477975348|735a805117328df9e557f0126eb348e7712e310c" Connection: keep-alive _xsrf=ade0896dc13cc3b2204a8f7742ad7f48&password=xxxxxxxx&captcha_type=cn&rememb er_me=true&phone_num=xxxxxxxxx

2.3 小结

本章主要讲解了Web前端中标记语言、脚本语言和HTTP的基本概念，在这些知识中，重点掌握HTML标记语言、XPath路径表达式的书写和HTTP请求流程，这对接下来的Python爬虫开发有着非常直接的作用，有助于爬虫开发的快速入门。本章讲解的只是Web前端的基础知识，希望大家有时间系统地学习Web前端的知识，这样对之后涉及协议分析和反爬虫措施的应对方面有很大帮助。

","title":"第2章 Web前端基础","idx":6,"uid":6,"nextUid":7,"lastUid":5,"price":0}}