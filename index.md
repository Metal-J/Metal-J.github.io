---
layout: default
---

<div class="intro-img"></div>

##  夜泊集

> 

###  思想 Culture

####  语言哲学

<ul class = "main-list">
    {% for post in site.categories.A11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

###  系统 System

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

####  图形 Graphics

<ul class = "main-list">
    {% for post in site.categories.D11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>