---
layout: default
---

<div class="intro-img"></div>



### NEW AREA 探索

#### 区块链

<ul class = "main-list">
    {% for post in site.categories.blockchain reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>



### SYSTEM 系统

#### 基础数学 

<ul class = "main-list">
    {% for post in site.categories.math reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### C++

<ul class = "main-list">
    {% for post in site.categories.cpp reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 工具

<ul class = "main-list">
    {% for post in site.categories.tool reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### GPU

<ul class = "main-list">
    {% for post in site.categories.GPU reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 图形渲染

<ul class = "main-list">
    {% for post in site.categories.graphic reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>



### PROJECT 制作

#### 哲学思想

<ul class = "main-list">
    {% for post in site.categories.phi reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 项目制作管理

<ul class = "main-list">
    {% for post in site.categories.production reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>



### INFO 其它

<ul class = "main-list">
    {% for post in site.categories.other reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>