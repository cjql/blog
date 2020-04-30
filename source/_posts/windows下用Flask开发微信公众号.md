---
title: Windows环境下用Flask开发微信公众号
date: 2050-12-25
tags: [计算机,计算机网络]
---
微信公众号是不错的图床。也可以做做微信机器人。无需穿透工具。
目前此项目依托Flask，接入了文本复读机和给图片提供图床的功能。
后面会加入批量图片OCR功能。
<!-- more -->

## 事前准备
一台服务器、一个已开通的公众号。
服务器Python环境下的第三方库：Flask、xmltodict。
## 配置
- 配置服务器的安全组，打开80端口。
- 关闭服务器防火墙。
- 将下面的代码保存为wechat.py放在服务器上。

```py
from flask import Flask, escape, url_for, request, make_response

import hashlib
import xmltodict
import time

app = Flask(__name__)

@app.route('/weixin/', methods=['GET', 'POST'])
def wechat():
    
    args = request.args
    signature = args.get('signature')
    timestamp = args.get('timestamp')
    nonce = args.get('nonce')
    echostr = args.get('echostr')
    token = '2019cj' # 你的token，可自行设置

    # 字典排序
    temp = [token, timestamp, nonce]
    temp.sort()
    # 字符串拼接并进行sha1加密
    temp = "".join(temp)
    sig = hashlib.sha1(temp.encode('utf-8')).hexdigest()

    # 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if sig == signature:
        # 根据请求方式.返回不同的内容 
        # 如果是get方式,代表是验证服务器有效性
        if request.method == "GET":
            return echostr
         # 如果POST方式,代表是微服务器转发给我们的消息
        else:
            resp_data = request.data
            resp_dict = xmltodict.parse(resp_data).get('xml')
            ToUserName = resp_dict.get('ToUserName')
            FromUserName =resp_dict.get('FromUserName')
            MsgType = resp_dict.get('MsgType')
            CreateTime = int(time.time())

            if MsgType == 'text':
                content = resp_dict.get('Content')
            elif resp_dict.get('MsgType')=='image':
                content = resp_dict.get('PicUrl')
            else:
                content = ''
            response = {
                    "ToUserName": FromUserName,
                    "FromUserName": ToUserName,
                    "CreateTime": CreateTime,
                    "MsgType": "text",
                    "Content": content,
                }
            if response:
                response = {"xml": response}
                response = xmltodict.unparse(response)
            else:
                response = ''
            return make_response(response)
    else:
        return 'errno', 403

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return('404 Error') 

@app.route('/')
def hello():
    return('Hello!<br>A world as simple as possible.')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80,debug=True)

```
- 打开服务器的shell，路径移动到wechat.py所在的最小子文件夹，输入'python wechat.py'
- 登录 https://mp.weixin.qq.com/ 。点击左下角开发选项下的`基本配置` 。
- 点击下图中的`查看`，将服务器IP加入其中 。
![](http://mmbiz.qpic.cn/mmbiz_jpg/RpaIDoV1UhZUlJHSk0thxgM2tLenia3M4QrotumGhTuvibFHfRoakGicEheXAia4r7AEcDH2rNXrBG1ib5YsfdZ0nMA/0)
- 点服务器配置的`修改配置`，提交成功后点`启用`最终页面效果如下：
![](http://mmbiz.qpic.cn/mmbiz_jpg/RpaIDoV1UhZUlJHSk0thxgM2tLenia3M4uZDVKHm8icSchDwyguL5kT1mQ6fzpDxhGSzdQnwiaTXzI2ot9NnpZndQ/0)
  
## 消息解析
https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html

不同类型的消息结构对比：

参数|文本|图片|语音|视频|短视频
--|--|--|--|--|--
ToUserName|√|√|√|√|√
FromUserName|√|√|√|√|√
CreateTime|√|√|√|√|√
MsgType|text|image|voice|video|shortvideo
Content|√|×|×|×|×
MsgId|√|√|√|√|√
PicUrl|×|√|×|×|×
MediaId|×|√|√|√|√
Format|×|×|√|×|×
Recognition|×|×|√|×|×
ThumbMediaId|×|×|×|√|√

## 参考链接
1. https://www.jianshu.com/p/29c692811322
2. https://www.cnblogs.com/crazymagic/p/9741459.html
3. https://zhuanlan.zhihu.com/p/50801694
## 错误及修正
Unicode-objects must be encoded before hashing⇒hashlib.sha1(temp.encode('utf-8')).hexdigest()