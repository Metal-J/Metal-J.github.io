---
layout: default
---

<div class="intro-img"></div>

##  夜泊集

> 

###  思想 Culture

> 他不相信时间的一致，时间的绝对。他相信时间的无限连续,相信正在扩展着、正在变化着的分散、集中、平行的时间的网。这张时间的网，它的网线互相接近，交叉，隔断，或者几个世纪各不相干。


####  语言哲学

<ul class = "main-list">
    {% for post in site.categories.A11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

###  系统 System

> We learned that physics should not be a specialist's subject, physics is to be built from the ground up, brick by brick, layer by layer. We learned that abstractions come after detailed foundation work, not before. 

####  编程语言

<ul class = "main-list">
    {% for post in site.categories.S11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

####  工具

<ul class = "main-list">
    {% for post in site.categories.S12 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>


###  设计 Design

> 他在椅子上坐了三天，一直在考虑（指派常量值）这一问题,并且在理论的基础上得到的结论就是，加上一个并减去一个就是最好的。他没有说这个理论基础是什么，接着他在帕卡德汽车上进行了翼型测试，直到令人满意为止。这就是戴维斯在提交给 GALCIT 的模型中所融入的那一翼型。


####  图形 Graphics

<ul class = "main-list">
    {% for post in site.categories.D11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>