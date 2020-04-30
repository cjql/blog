---
title: Flask语法释义
date: 2050-12-25 01:23:47
tags: [计算机,计算机网络]
---
按官方样例对flask语句进行详解。`参考`是用于查询官方文档。`备忘录`存储命令清单，后续还需添加。`文件结构`有助于速览。`文件依赖`给出各个文件的引用关系。`flaskr文件逐个详解`，对项目内的每条独立命令进行解析。
<!-- more -->
# 参考
https://flask.palletsprojects.com/en/1.1.x/quickstart/#a-minimal-application
https://flask.palletsprojects.com/en/1.1.x/quickstart/#variable-rules
https://dormousehole.readthedocs.io/en/latest/tutorial/factory.html
https://dormousehole.readthedocs.io/en/latest/tutorial/database.html
# 备忘录
```py
from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello, World!'
@app.route('/projects/')
@app.route('/login', methods=['GET', 'POST'])
@app.route('/user/<username>')
@app.route('/post/<int:post_id>')
@app.route('/path/<path:subpath>')
```
# 文件结构概览
```py
flaskr
    static
        style.css
        table.js
    templates √
        base.html  √ 1
        auth √
            login.html √ 5
            register.html √ 6
        blog √
            blog.html √ 2
            blogCreate.html √ 3 
            blogUpdate.html √ 4
    schema.sql √ 7
    __init__.py
    auth.py √ 9
    blog.py
    db.py √ 8
```
# 文件关系依赖
`A⇒B`：表示B要调用A文件里的内容。
schema.sql⇒db.py⇒auth.py
# flaskr文件逐个解析
## templates文件夹
### base.html文件
`<title>{% raw %}{% block title %}{% endblock %}{% endraw %}</title>` 
- 其他文档里，用`{% raw %}{% block title %}{% endblock %}{% endraw %}`括起来的内容都会转化为title。
- `<title></title>`：决定其内容是title。 
- `{% raw %}{% block title %}{% endblock %}{% endraw %}`：起占位作用。title可以是任意的html标签。
- 如果static文件以外的文件里的html元素不用block包裹，则可能无法生效。
`<link rel="stylesheet" href="{% raw %}{{ url_for('static', filename='style.css') }}{% endraw %}">`
- static是flaskr的一级子文件夹。
- style.css是static里的文件。
`<script type=text/javascript src="{% raw %}{{ url_for('static', filename='table.js') }}{% endraw %}"></script>`
- 全局script。
`<nav></nav>`
- 导航栏。
`<a href="{% raw %}{{ url_for('blog.shixi')}}{% endraw %}">图集</a>`
- blog是flaskr里的py文件。
- shixi是blog.py的一个路径装饰器下的函数。
`{% raw %}{{ g.user['username'] }}{% endraw %}`
- 用户名，网页刷新时自动传入。
`{% raw %}{% if g.user %}{% else %}{% endif %}{% endraw %}`
- 条件表达式。**是谁的呢**？
`{% raw %}{% if g.user %}{% endraw %}`
-  如果已登录。
`<ul></ul>`
- **通过css来控制对齐吗？**
`<section class="content"></section>`
- 子html的格式定义。
`{% raw %}{% for message in get_flashed_messages() %}{% endraw %}`
- **全项目只用到了flask.flash(error)。用于程序出错时，在页面显示错误。error可自定义。**
`{% raw %}{{ message }}{% endraw %}`
- **flash错误信息。**
### blog
#### blog.html
`{% raw %}{% extends 'base.html' %}{% endraw %}`
- 继承自base.html。
`<a class="action" href="{% raw %}{{ url_for('blog.create') }}{% endraw %}">New</a>`
- 不传数据，只调用函数。
`<a class="action" href="{% raw %}{{ url_for('blog.update', id=post['id']) }}{% endraw %}">编辑</a>`
- 传数据，且调用函数。`id=post['id']) `用来传参。
`{% raw %}{% for post in posts %}{% endraw %}`
- 自动传post。post的内容在blog.py里面定义。
`{% raw %}{% if g.user['id'] == post['author_id'] %}{% endraw %}`
- 只显示当前登录用户的数据。
`post['created'].`
- 获取post的键created的值。
`{% raw %}{}{% endraw %}`
- html内的逻辑语句或占位符。
`{% raw %}{{}}{% endraw %}`
- 抽取html的元素或属性，括起来用于传递参数。传参用flask的方法，如url_for()、request.form[]。
#### blogCreate.html
`<form method="post"></form>`
- 里面的内容可以传参了。
`<input name="title" id="title" value="{% raw %}{{ request.form['title'] }}{% endraw %}" required>`
`<textarea name="body" id="body">{% raw %}{{ request.form['body'] }}{% endraw %}</textarea>`
`<input type="submit" value="Save">`
- html文件的form表单是通过name属性来传值给py文件的。name删掉会报错，id属性删掉了不会。
- 双大括号外是否有引号取决于原html
#### blogUpdate.html
`<input name="title" id="title" value="{% raw %}{{ request.form['title'] or post['title'] }}{% endraw %}" `
`<textarea name="body" id="body">{% raw %}{{ request.form['body'] or post['body'] }}{% endraw %}</textarea>`
- 已有数据时自动填充或没有数据。
`<form action="{% raw %}{{ url_for('blog.delete', id=post['id']) }}{% endraw %}" method="post">`
- 调用blog里的python函数，并传递参数。
### auth
#### login.html
`<input type="password" name="password" id="password" required>`
- type="password" 会自动加密。加密函数在anth.py中定义。
#### register.html
除了标题和submit按钮的值外，其余的和login.html一模一样。
## schema.sql
存放sql语句。用来初始化数据库。
## db.py
太漂亮了，每个函数就几行。
lib依赖：
click
sqlite3
flask：current_app、g、.cli.with_appcontext
用到的命令：
```py
g.db
g.db.row_factory
g.db.executescript(f.read().decode("utf8"))
g.pop("db", None)
current_app.config["DATABASE"]
with current_app.open_resource("schema.sql") as f
sqlite3.Row
@click.command("init-db")
click.echo("Initialized the database.")
app.teardown_appcontext(close_db)
app.cli.add_command(init_db_command)
get_db()：用于连接数据库
```
## auth.py
lib依赖：
- functools
- flask：Blueprint、flash、g、redirect、render_template、request、session、url_for
- werkzeug.security：
  - 检查密码是否一致：check_password_hash
  - 加密密码：generate_password_hash
- flaskr.db ：get_db（用于链接数据库）
用到的命令:
```py
bp = Blueprint("auth", __name__, url_prefix="/auth")
```
- auth：蓝图名。
- `__name__`。
- url_prefix：bp.route的前缀路径。
```py
@functools.wraps(view)
```
- 复制属性。
  - 《Python 3标准库》，苏金国，201903，P118.
  - *The Python 3 Standard Library by Example.pdf*,DougHellmann,2017,P149.
```py
wrapped_view(**kwargs)
```
- 如果没登录，就重定向到登录页。
- 否则返回view的参数。
```py
@bp.before_app_request
```
- 请求前的装饰器。
```py
session.get("user_id")
```
- 获取用ID。
  - 如果是None，则把None赋值给g.user。
  - 否则从用户user表中取出id与session.get("user_id")相同的那条记录。
```py
get_db().execute("SELECT * FROM user WHERE id = ?", (user_id,)).fetchone()
```
- 连接数据库并查询，取一项。
```py
db = get_db()
db.excute(sql).fetchone()
db.commit()
if request.method == "POST":
    username = request.form["username"]
```
- 解析POST过来的函数。
```py
flash(error)
```
- 检查错误。
```py
return redirect(url_for("auth.login"))
```
- 重定向到auth.py的login函数。form表单数据提交后执行的函数。
```py
return render_template("auth/register.html")
```
- 含form表单的当前路径显示的网页。
https://realpython.com/search?q=flask-by-example
# 事前准备
```py
git clone https://github.com/pallets/flask
cd C:\Users\cj\Documents\GitHub\flask\examples\tutorial\flaskr
py -3 -m venv venv
venv/Scripts/activate
flask init-db # 生成数据库文件
set FLASK_APP=flaskr
set FLASK_ENV=development
flask run
```