---
title: Docker
date: 2031-12-23
categories: [计算机,工具]
---
Docker笔记。
<!-- more -->
镜像的构建、容器的运行监控、网络的管理、仓库的应用、集群的部署。
容器技术与Docker概念@
容器技术概念@
容器技术的发展历史（历程、前世今生）@
容器技术的原理@
Docker与其他容器技术的区别@
Docker与虚拟机的异同，客观评价两者的优缺点@
启动简单的容器@
容器与容器云对软件行业的影响@
Registry@Registry是Docker公司为了更方便镜像流通而设计的一种镜像仓库。像手机上的应用商店一样，用户可以在上面发布镜像和拉取镜像，官方的Docker Hub还提供更高级的企业服务。
hierarchy@Stack：define the interactions of all the services<br>Services:define how containers behave in production<br>Container (you are here)
数据卷@数据卷是挂载到容器的一个目录，它与容器的生命周期独立，不会因为容器的销毁而消失。

# cheatsheet
命令分类：管理、镜像、容器、仓库、网络、数据卷、编排。  
分类在每次版本发布时都有调整。
https://docs.docker.com/engine/reference/commandline/docker/
https://docs.docker.com/engine/reference/commandline/build/
`docker、-v、info、--help、image/container ls (--all/-aq)、run hello-world、logs \<names>`
## List Docker CLI commands  
docker  
docker container --help  

## Display Docker version and info  
docker --version  
docker version  
docker info  Docker的各项运行状态信息（容器数量、状态，镜像数量，服务版本，存储驱动、根目录，数据卷，插件，网络，安全，硬件等信息）。
$ docker inspect 检查容器或者镜像详细信息。输出的内容却相当丰富。

## Execute Docker image  
docker run hello-world  

## List Docker images  
docker image ls  

## List Docker containers (running, all, all in quiet mode)  
docker container ls  
docker container ls --all  
docker container ls -aq  

注意冒号和双斜线
```docker
cd c:
cd cd C:\\docker\\demo
pip install -r requirements.txt
```
https://user-images.githubusercontent.com/32757669/55721943-4d69ef00-5a37-11e9-9e58-903acf750d44.png
![image](https://user-images.githubusercontent.com/32757669/55720183-cf0b4e00-5a32-11e9-9b41-33c365290b09.png)

`docker kill <containerID>`  
通常在容器无响应时使用。  
与stop的区别：  
stop给容器的进程发送SIGTERM信号，默认行为是会导致容器退出，当然，容器内程序可以捕获该信号并自行处理，例如可以选择忽略。  
kill给容器的进程发送SIGKILL信号，该信号将会使容器必然退出。
事件查看events
容器依附attach
容器信息本地查看ps
容器停止stop
容器创建create
容器删除rm
容器变化查看diff
容器启动run
容器启动start
容器导入import
容器导出export
容器提交commit
容器日志logs
容器暂停pause
容器暂停恢复unpause
容器更新update
容器状态查看stats
容器端口port
容器进入exec
容器进程查看top
容器重启restart
容器重命名rename
拉取镜像pull
推送镜像push
数据卷管理volume
文件复制cp
服务管理service
登出仓库logout
登录仓库login
等待设置wait
管理节点node
网络管理network
镜像删除rmi
镜像历史查看history
镜像导出save
镜像搜索search
镜像本地查看images
镜像构建build
镜像标签tags
集群管理swarm
# 简介
Linux、Windows和Mac OS平台上的Docker操作基本一致。
Docker作为一个2013年才诞生的开源项目。
# 背景介绍
容器技术早在Docker之前就有。
Docker清晰、易用、用户体验友好。发展迅速、火爆。在容器技术领域有领先地位。国内外有很多创业公司以Docker技术起家，Docker在中国的推广基本上靠国内几家与Docker相关的初创公司。开发者、企业、云计算厂商陆续在用。
伴随而来的是各种复杂的需求与Docker尚不算完善的功能所产生的矛盾，这些问题制约着企业容器化的脚步。
# 企业级容器云的实战经验
# 为什么学习Docker
简化"换电脑换服务器"等迁移工作的环境配置问题。避免这个程序只有在我的机器上才可以运行的问题。
# 相关术语 
## 虚拟化技术
通过各种虚拟化技术来实现软件的**迁移和分发**，解决了迁移过程中的诸多难题。
**最常见的就是虚拟机或KVM技术**。在虚拟机里完成**开发再迁移到线上**不会出现环境问题。
性能低下、分发流程麻烦、耗时和成本昂贵等问题。在云计算时代这些问题更加突出。传统的软件开发和运维的烦琐流程感到吃力。
**虚拟化技术**开始普及。
## 容器技术
低成本、启动快、体积小和分发迅速
### 第一代运维
通过Shell脚本的方式使用SSH连接到所有服务器然后执行相同的指令，并把日志保存起来归档。维护服务器是一项繁重的工作，工程师不得不把大量的时间耗费在**服务器管理**上。
### 第二代运维
虚拟化技术的普及、云计算的出现、企业需要管理的服务器数量大幅增长。数据中心由企业内部发展到全球。运维成本愈发昂贵。
**运维工具**（如**Ansible、Puppet、SaltStack和Chef**）改变云计算时代服务器运维方式。可以通过这些工具快速地完成对上百台甚至上千台服务器的管理操作。它极大地解决了管理庞大服务器集群的难题，使人们可以在屏幕面前通过一个界面管理所有服务器。但本质上这些工具都是通过SSH或者类似于SSH的方式连接到服务器来管理**服务器集群**。第二代运维和第一代运维并没有发生根本性的改变。
### 第三代运维（容器时代）
前两代运维速度是硬伤。SSH连接来交换信息十分耗时，其他复杂的管理操作更耗时。
而随着容器技术的爆发，**以Docker为代表的容器技术**开始发力，并随着DevOps概念的普及，使运维发生了根本性的改变。
**容器集群管理**不再是通过低效的SSH来连接服务器，甚至不需要登录服务器就可以完成对服务器的管理。
通过容器管理集群可以抛弃传统的“SSH+秘钥”的连接方式来连接服务器，这对大规模集群来说是一个极大的变革。
而且在速度上，容器技术在上百台服务器上启动应用只需要一眨眼的时间，这使得运维的工作大大减轻。
运维和开发在容器时代逐步“融为一体”，形成一个流水线车间的工作环境。这对于软件行业来说无疑是一次巨大的变革。
# 镜像的构建、容器的运行监控、网络的管理、仓库的应用、集群的部署
# Docker的基本使用方法与实现原理（内部原理）
# 从不同的角度分析问题并提出对应的解决办法
# 实战技巧拓展
# 根据不同类型的开发环境构建基础开发环境镜像
# 直接使用Docker进入测试开发
# 根据不同类型的应用部署
# Docker分别在Linux、Windows和Mac OS系统下的安装方法，以及二进制安装方法。
# Docker基础知识
## Docker的基本操作
Docker基础、Docker镜像、Docker file文件、Docker仓库、Docker容器、数据卷的使用方法与原理及网络管理
## 简单应用，等内容。通过对本篇内容的学习，读者可以掌握最常用的Docker知识。
# Docker进阶实战（在实际开发中的应用实例）
操作系统、编排工具Compose、Web服务器与应用、数据库、编程语言、Docker API、私有仓库、集群网络、Docker安全
Docker在容器云环境中的应用
在实际生产环境中应用Docker
# 容器技术大观
容器，用来放东西的道具。容器技术借鉴了工业运输的发展经验。低成本，标准化。
虚拟化技术分类：
- 基于**硬件**虚拟化，基于**软件**虚拟化。
- **硬件**虚拟化、**半**虚拟化和**操作系统**虚拟化。
虚拟化技术分类： **应用**虚拟化（如Wine）和**平台**虚拟化（如虚拟机）
>硬件虚拟化并不多见，大都是半虚拟化与软件结合，应用较为广泛的则是基于软件的虚拟化技术。
>容器技术属于操作系统虚拟化，属于平台虚拟化的一种。 
Docker∈容器技术∈操作系统虚拟化。有时这种分类会因为技术的发展而有变动。其相较于其他主流虚拟化技术更轻量。

同样，软件行业的容器技术也是在尝试打造一套标准化的软件构建、分发流程，以降低运维成本，提高软件安全与运行稳定等。与工业运输的集装箱不同，容器技术要复杂得多。它不仅仅是要打造一个运输用的“集装箱”，还要保证软件在容器内能够运行，在操作系统上打造一个“独立的箱子”。这需要解决文件系统、网络、硬件等多方面的问题。经过长时间的发展，容器技术已经逐步成熟，并在Docker的诞生下迎来它的繁荣时代。
读者大可把容器理解为一个沙盒，每个容器是独立的，容器之间可以相互通信。

与传统软件行业的开发和运维相比，容器虚拟化可以更高效地构建应用，也更容易管理维护。举个简单的例子，常见的LAMP组合开发网站，按照传统的做法自然是各种安装，然后配置、测试、发布，中间麻烦事一大堆，相信不少读者深有体会。
当服务器需要搬迁时，往往需要再执行一次以前的部署步骤，极大地浪费了运维人员的时间。最可怕的是搬迁后往往因为一些不可预知的原因而导致软件无法正常运行，只能一头扎进代码中找Bug。
如果使用了容器技术，运维只需要一句简单的命令即可部署一整套LAMP环境，并且不需要复杂的配置与测试。即便搬迁也只是打包传输即可。即使在另一台机器上，软件也不会出现“水土不服”的情况。这无疑节约了运维人员的大量时间。
而对于开发者来说，一处构建，到处运行，大概是梦寐以求的事情。这也是很多跨平台语言的宣传标语之一。但不管是怎样的跨平台语言，在很多细节上都需要不少调整才能运行在另一个平台上。但容器技术则不一样，开发者可以使用熟悉的编程语言开发软件，之后用容器技术打包构建，便可以一键运行在所有支持该容器技术的平台上。
容器技术具有更快的交付和部署速度，而且相较于其他虚拟化技术，容器技术更加轻量。

软件行业上的容器是从文件系统隔离开始的。最早的容器技术大概是chroot（1979年）了，它最初是一个UNIX操作系统上的系统调用，用于将一个进程及其子进程的根目录改变到文件系统中的一个新位置，让这些进程只能访问到该目录。直到今天，主流Linux上还有这个工具。
打开一个终端，输入chroot–help，查看一下这个古老的命令。
$ chroot ——help
用法：chroot [选项] 新根 [命令 [参数]……]
或：chroot 选项
以指定的新根为运行指定命令时的根目录。
——userspec=用户:组 指定所用的用户及用户组(可使用“数字”或“名字”)
——groups=组列表 指定可供选择的用户组列表，形如组1，组2，组3……
——help 显示此帮助信息并退出
——version 显示版本信息并退出
If no command is given, run '${SHELL} -i' (default：'/bin/sh -i').
请向bug-coreutils@gnu.org 报告chroot 的错误
GNU coreutils 的主页：
GNU 软件一般性帮助：
要获取完整文档，请运行：info coreutils 'chroot invocation'
chroot这个命令主要用来把用户的文件系统根目录切换到指定的目录下，实现简单的文件系统隔离。可以说chroot的出现是为了提高安全性，但这种技术并不能防御来自其他方面的攻击，黑客依然可以逃离设定访问宿主机上的其他文件。

容器技术的发展
2000年，由R&D Associates公司的Derrick T.Woolworth为FreeBSD引入的FreeBSD Jails成为了最早的容器技术之一。与chroot不同的是，它可以为文件系统、用户、网络等的隔离增加进程沙盒功能。因此，它可以为每个jail指定IP地址，可以对软件的安装和配置进行定制等。
紧接着出现了Linux VServer，这是另外一种jail机制，用于对计算机系统上的资源（如文件系统、CPU处理时间、网络地址和内存等）进行安全划分。每个所划分的分区叫做一个安全上下文（Security Context），在其中的虚拟系统叫做虚拟私有服务器（Virtual Private Server，VPS）。
在2004和2005年期间分别出现了Solaris Containers和OpenVZ技术，在可控性和便捷性上更胜一筹，如图1.3所示。
￼
图1.3 常见的容器技术
到了2006年，Google公司公开了Process Containers技术，用于对一组进程进行限制、记账、隔离资源（CPU、内存、磁盘I/O、网络等）。后来为了避免和Linux内核上下文中的“容器”一词混淆，而改名为Control Groups（简写为Groups）。2007年被合并到了Linux2.6.24内核中。
在前面Cgroups等技术出现以后，容器技术有了更快的发展。如图1.4给出了容器技术的发展史。

图1.4 容器技术发展史
2008年出现了LXC（LinuX Containers），它是第一个最完善的Linux容器管理器的实现方案，是通过Cgroups和Linux名字空间namespace实现的。LXC存在于liblxc库中，提供了各种编程语言的API实现。与其他容器技术不同的是，LXC可以工作在普通的Linux内核上，而不需要增加补丁。
LXC的出现为后面一系列工具的出现奠定了基础。2011年CloudFoundry发布了Warden。不像LXC，Warden并不紧密耦合到Linux上，而是可以工作在任何可以提供隔离环境的操作系统上。它以后台守护进程的方式运行，为容器管理提供了API。
在2013年，Google公司发布了Lmctfy，它是一个Google容器技术的开源版本，提供Linux应用容器。Google启动这个项目，旨在提供性能可保证的、高资源利用率的、资源共享的、可超售的、接近零消耗的容器。Lmctfy首次发布于2013年10月。到了2015年，Google公司决定贡献其核心的Lmctfy概念，并抽象成libcontainer。现在为Kubernetes所用的cAdvisor工具就是从Lmctfy项目的成果开始的。
libcontainer项目最初由Docker发起，现在已经被移交给了开放容器基金会（Open Container Foundation）。
同年，dotCloud发布了Docker（Logo是一条鲸鱼驮着一堆集装箱，如图1.5所示）——至今最流行和使用最广泛的容器管理系统。在LXC的基础上，Docker进一步优化了容器的使用体验，使得容器更容易操作和管理。

Docker提供了从构建、运行、管理、监控等一系列工具，引入了一整个管理容器的生态系统，包括高效分层的容器镜像模型、全局和本地的容器注册库、清晰的REST API、命令行等。这是Docker与其他容器平台最大的不同。在如图1.6中可以看到Docker跨越了多个层面，整合了一系列零散的工具从而达到一系列便捷的操作。这是当时Docker从众多容器技术中脱颖而出的一个重要原因。
￼

围绕Docker的生态系统更有数不胜数的工具，极大地方便了开发者使用容器技术。关于Docker的更多特性，将在第2章介绍。
Docker开始阶段使用的也是LXC，之后采用自己开发的libcontainer替代了LXC。
之后出于各种原因，CoreOS启动项目Rocket，非常类似于Docker，但是修复了一些Docker中发现的问题。与Docker相比，Rocket是在一个更加开放的标准App Container规范上实现的。现今不少容器管理工具都支持Rocket与Docker。
2015年微软公司也在Windows Server上为其基于Windows的应用添加了容器支持，称之为Windows Containers，与Windows Server 2016一同发布。通过该实现，Docker可以原生地在Windows上运行Docker容器，而不需要启动一个虚拟机来运行Docker（Windows上早期运行Docker需要使用Linux虚拟机）。同年，Mac OS也原生支持运行Docker容器。如图1.7所示为官网给出的下载按钮。至此Docker完成了三大平台的适配。

容器虚拟化技术经过几十年不断的发展与完善，相继加入了pivot_root等很多技术。市场上也出现了一些商业化的容器技术公司。在这些公司与全球开发者的共同努力下，容器技术得到不断推进和发展。最后核心容器技术进入了Linux的内核主线，再后来诸多大厂加入开发的libcontainer，使得如今人人皆可得心应手地操作容器。
1.3 容器的原理

前文提到，容器的核心技术是Cgroups与namespace，在此基础上还有一些其他工具共同构成容器技术。容器本质上是宿主机上的进程。容器技术通过namespace实现资源隔离，通过Cgroups实现资源控制，通过rootfs实现文件系统隔离，再加上容器引擎自身的特性来管理容器的生命周期。
简单来说，本书所说的Docker的早期其实就相当于LXC的管理引擎，LXC是Cgroups的管理工具，Cgroups是namespace的用户空间管理接口。namespace是Linux内核在task_struct中对进程组管理的基础机制。

1.3.1 从namespace说起
想要实现资源隔离，第一个想到的就是chroot命令。通过它可以实现文件系统隔离，这是最早的容器技术。但是在分布式的环境下，容器必须要有独立的IP、端口和路由等，自然就有了网络隔离。同时，进程通信隔离、权限隔离等也需要考虑到，因此基本上一个容器需要做到6项基本隔离，也就是Linux内核中提供的6种namespace隔离，如表1.1所示。
表1.1 namespace说明

当然，一项完善的容器技术还需要处理很多工作。
对namespace的操作主要是通过clone()、setns()、unshare()这3个系统调用来完成的。
clone()可以用来创建新的namespace。clone()有一个flags参数，该参数以CLONE_NEW*为格式，包括CLONE_NEWNS、CLONE_NEWIPC、CLONE_NEWUTS、CLONE_NEWNET、CLONE_NEWPID和CLONE_NEWUSER，通过传入这些参数后，由clone()创建出来的新进程就位于新的namespace之中了。
因为Mount namespace是第一个实现的namespace，当初实现没有考虑到还有其他namespace的出现，因此用了CLONE_NEWNS的名字，而不是CLONE_NEWMNT之类的名字。其他CLONE_NEW*都可以看名字知用途。
那么，如何为已有的进程创建新的namespace呢？这就需要用到unshare()了，使用unshare()调用的进程会被放进新的namespace里面。而setns()则是将进程放到已有的namespace中，docker exec命令的实现原理就是setns()。
事实上，开发namespace的主要目的之一就是实现轻量级虚拟化服务，在同一个namespace下的进程可以彼此响应，而对外界进程隔离，这样在一个namespace下，进程仿佛处于一个独立的系统环境中，以达到容器的目的。
上面介绍的是一些概念，下面来实践一下。因为user namespace是在Linux内核3.8之后才支持的，所以本节讨论的namespace均是3.8以后的版本。

在了解namespace API之前，先来了解如何查看进程的namespace。在root用户模式下执行：
# ls -l /proc/$$/ns
total 0
lrwxrwxrwx 1 root root 0 6月 10 20:29 ipc -> ipc:[4026531839]
lrwxrwxrwx 1 root root 0 6月 10 20:29 mnt -> mnt:[4026531840]
lrwxrwxrwx 1 root root 0 6月 10 20:29 net -> net:[4026531956]
lrwxrwxrwx 1 root root 0 6月 10 20:29 pid -> pid:[4026531836]
lrwxrwxrwx 1 root root 0 6月 10 20:29 user -> user:[4026531837]
lrwxrwxrwx 1 root root 0 6月 10 20:29 uts -> uts:[4026531838]
这里的$$是指当前进程ID号。可以看到诸如4026531839这样的数字，表示当前进程指向的namespace。当两个进程指向同一串数字时，表示它们处于同一个namespace下。

使用clone()创建新的namespace
创建一个namespace的方法是使用clone()系统调用，它会创建一个新的进程。为了说明创建的过程，给出clone()的原型如下：
int clone(int(*child_func)(void *), void *child_stack, int flags, void*arg);
本质上，clone()是一个通用的fork()版本。fork()的功能由flags参数控制。总的来说，约有超过20个不同的CLONE_*标志控制clone()提供不同的功能，包括父子进程是否共享如虚拟内存、打开的文件描述符和子进程等资源。如果调用clone()时设置了一个CLONE_NEW*标志，一个与之对应的新的命名空间将被创建，新的进程属于该命名空间。可以使用多个CLONE_NEW*标志的组合。
3．使用setns()关联一个已经存在的namespace
当一个namespace没有进程时还保持其打开，这么做是为了后续添加进程到该namespace。而添加这个功能就是使用setns()系统调用来完成，这使得调用的进程能够和namespace关联，docker exec就需要用到这个方法：
int setns(int fd, int nstype);
·fd参数指明了关联的namespace，其指向了\proc\PID\ns目录下一个符号链接的文件描述符。可以通过打开这些符号链接指向的文件或者打开一个绑定到符号链接的文件来获得文件描述符。
·nstype参数运行调用者检查fd指向的命名空间的类型，如果这个参数等于数，将不会检查。当调用者已经知道namespace的类型时这会很有用。当nstype被赋值为CLONE_NEW*的常量时，内核会检查fd指向的namespace的类型。
要把namespace利用起来，还要使用execve()函数（或者其他的exec()函数），使得我们能够构建一个简单但是有用的工具，该函数可以执行用户命令。

使用unshare()在已有进程上进行namespace隔离
unshare()和clone()有些像，不同的地方是前者运行在原有进程上，相当于跳出原来namespace操作，Linux自带的unshare()就是通过调用unshare()这个API来实现的。
$ unshare
Usage:
unshare [options] [args……]
-h, ——help usage information (this)
-m, ——mount unshare mounts namespace
-u, ——uts unshare UTS namespace (hostname etc)
-i, ——ipc unshare System V IPC namespace
-n, ——net unshare network namespace
For more information see unshare(1).
由于Docker没有使用这个系统调用，所以不展开。除此之外，像fork()这样的函数也可以实现namespace隔离，但并不属于namespace API的一部分。有兴趣的读者可以扫描以下二维码阅读相关资料。

认识Cgroups
Cgrous是Linux内核提供的一种可以限制、记录、隔离进程组（process groups）所使用的物理资源（如CPU，内存，I/O等）的机制。最初由Google公司的工程师提出，后来被整合进Linux内核。Cgroups也是LXC为实现虚拟化所使用的资源管理手段，可以说没有Cgroups就没有LXC。
目前，Cgroups有一套进程分组框架，不同资源由不同子系统控制。一个子系统就是一个资源控制器，比如CPU子系统就是控制CPU时间分配的一个控制器。子系统必须附加（attach）到一个层级上才能起作用，一个子系统附加到某个层级以后，这个层级上的所有控制族群（control groups）都受到这个子系统的控制。
Croups各个子系统作用如下。
·Blkio：为块设备设定输入/输出限制，比如物理设备（磁盘、固态硬盘、USB等）。
·Cpu：提供对CPU的Cgroups任务访问。
·Cpuacct：生成Cgroups中任务所使用的CPU报告。
·Cpuset：为Cgroups中的任务分配独立CPU（在多核系统）和内存节点。
·Devices：允许或者拒绝Cgroups中的任务访问设备。
·Freezer：挂起或者恢复Cgroups中的任务。
·Memory：设定Cgroups中任务使用的内存限制，并自动生成由那些任务使用的内存资源报告。
·Net_cls：使用等级识别符（classid）标记网络数据包，可允许Linux流量控制程序（tc）识别从具体Cgroup中生成的数据包。
·Net_prio：设置进程的网络流量优先级。
·Huge_tlb：限制HugeTLB的使用。
·Perf_event：允许Perf工具基于Cgroups分组做性能监测。
这样说理解起来也很吃力，下面就通过命令来挂载Cgroupfs。
# mount -t cgroup -o cpuset cpuset /sys/fs/cgroup/cpuset
这个动作一般情况下已经在Linux启动的时候做了。
查看Cgroupfs：
# cpuset ls
cgroup.clone_children cpuset.memory_pressure_enabled

cgroup.procs cpuset.memory_spread_page
cgroup.sane_behavior cpuset.memory_spread_slab
cpuset.cpu_exclusive cpuset.mems
cpuset.cpus cpuset.sched_load_balance
cpuset.effective_cpus cpuset.sched_relax_domain_level
cpuset.effective_mems docker
cpuset.mem_exclusive notify_on_release
cpuset.mem_hardwall release_agent
cpuset.memory_migrate tasks
cpuset.memory_pressure

主流Linux发行版下，都可以通过/etc/cgconfig.conf或者cgroup-bin的相关指令来配置Cgroups。
mount {
cpuset = /sys/fs/cgroup/cpuset;
momory = /sys/fs/cgroup/momory;
}
group cnsworder/test {
perm {
task {
uid = root;
gid = root;
}
admin {
uid = root;
gid = root;
}
}

cpu.shares = 1000;
}
}
然后通过命令行把一个进程移动到这个Cgroups之中。
# mount -t group -o cpu cpu /sys/fs/cgroup/cpuset
# cgcreate -g cpu,momory:/cnsworder
# chown root:root /sys/fs/cgroup/cpuset/cnsworder/test/*
# chown root:root /sys/fs/cgroup/cpuset/cnsworder/test/task
# cgrun -g cpu,momory:/cnsworder/test bash

容器的创建
前面只是非常简单地介绍了namespace和Cgroups两个概念。实际上各个namespace的具体介绍与各个Cgroups子系统的介绍都没有深入讲解到，但通过前面两节的学习，相信读者已经大致有了容器创建过程的雏形。
（1）系统调用clone()创建新进程，拥有自己的namespace。
该进程拥有自己的pid、mount、user、net、ipc和uts namespace。
# pid =clone(fun,stack,flags,clone_arg);
（2）将pid写入Cgroup子系统这样就受到Cgroups子系统控制。
# echo$pid >/sys/fs/cgroup/cpu/tasks
# echo$pid >/sys/fs/cgroup/cpuset/tasks
# echo$pid >/sys/fs/cgroup/bikio/tasks
# echo$pid >/sys/fs/cgroup/memory/tasks
# echo$pid >/sys/fs/cgroup/devices/tasks
# echo$pid >/sys/fs/cgroup/feezer/tasks
（3）通过pivot_root系统调用，使进程进入一个新的rootfs，之后通过exec()系统调用，在新的namespace、Cgroups、rootfs中执行/bin/bash。
fun(){
pivot_root("path_of_rootfs/"，path)；
exec("/bin/bash");
}
通过上面的操作，成功地在一个容器中运行了/bin/bash。
1.4 容器云
每一项技术成熟后都会衍生出一系列技术，例如当Docker推开容器世界的大门时，围绕容器技术的生态系统迅速发展起来。
无论是**个人**还是**企业**，在使用上都有各种各样的需求，例如**跨主机连接**容器，各种类型的**负载均衡**，**持续构建、集成和交付**，以及**大规模容器管理**等。
虽然Docker提供了较为便捷的操作方式，
##  Docker的不足
在**开发、生产环境**中，**网络、存储、集群和高可用**等问题层出不穷。仅凭Docker难以面面俱到。
## Docker的发展方向
从容器到容器云。围绕Docker容器云还有很多需要开发者去完善的地方。
## Docker生态区
# 展望
国内现在以Docker容器云为“卖点”的初创公司不在百家之下，国外更是不用言说。
可见如图1.8展示了目前Docker的生态圈的一部分。
可以看到这些工具围绕Docker进行扩展补充，已经形成了非常发达的生态系统网络。
图1.8 容器技术生态圈
# 概念
## 容器云
容器云是以容器为资源分割和调度的基本单位，通过容器封装软件运行环境，为用户提供一个集构建、发布和运行于一体的分布式应用平台。
## 微服务
微服Microservices在软件架构上可以将容器用于部署。微服务只是一个相比标准的Web服务超快的**轻量级Web服务**。这是通过将功能单元（也许是一个单一服务或API方法）打包到一个服务中，并内嵌其到一个轻量级Web服务器软件中实现的。
## 容器云与IaaS、PaaS
容器云可以共享与隔离资源、编排与部署容器。在这一点上容器云与IaaS相似。
但是容器云也可以渗透到应用支撑与运行时环境，在这一点上与PaaS类似。
## Docker与其他容器技术
容器技术
基础：Docker、CoreOS的Rocket项目等等。
发展：容器云。
突破性发展：微服务（Microservices）、Serverless。Docker与微服务结合开辟了新蓝海。
容器基本概念
容器运行原理
容器调用方法
容器技术的历史
Docker Swarm集群管理方式
# 容器技术与Docker（Docker在容器技术中的位置）
容器成就了Docker，而Docker也极大地促进了容器技术的发展。
关于容器是否是Docker的核心技术在业内一直存在争议。Docker的核心是对分层镜像的创新使用，还是统一了应用的打包分发和部署方式。
因为Docker的创新不一定要依赖容器技术，像基于传统的hypervisor也可以做到。
官方对Docker核心技术功能的描述“Build，Ship and Run”中也确实没有体现与容器相关的内容。
实际上，从Docker公司的表现来看，它不会单纯地只是做一个CaaS（容器即服务）服务商。
# 参考
《Docker从入门到实战》，黄婧钧，2017

# Docker资源
Docker官方英文资源：

docker官网：http://www.docker.com
Docker windows入门：https://docs.docker.com/windows/
Docker Linux 入门：https://docs.docker.com/linux/
Docker mac 入门：https://docs.docker.com/mac/
Docker 用户指引：https://docs.docker.com/engine/userguide/
Docker 官方博客：http://blog.docker.com/
Docker Hub: https://hub.docker.com/
Docker开源： https://www.docker.com/open-source
Docker中文资源：

Docker中文网站：http://www.docker.org.cn
Docker入门教程: http://www.docker.org.cn/book/docker.html
Docker安装手册：http://www.docker.org.cn/book/install.html
一小时Docker教程 ：https://blog.csphere.cn/archives/22
Docker纸质书：http://www.docker.org.cn/dockershuji.html
DockerPPT：http://www.docker.org.cn/dockerppt.html
