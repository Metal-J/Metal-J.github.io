---
layout: default
---

<div class="intro-img"></div>

## Pre Production

> Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre ProductionPre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production 

#### 哲学思想

<ul class = "main-list">
    {% for post in site.categories.P1 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 基础数学 

<ul class = "main-list">
    {% for post in site.categories.M1 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### C++

<ul class = "main-list">
    {% for post in site.categories.L1 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 平台工具

<ul class = "main-list">
    {% for post in site.categories.T1 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 图形渲染

<ul class = "main-list">
    {% for post in site.categories.G1 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 其它

<ul class = "main-list">
    {% for post in site.categories.O1 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>