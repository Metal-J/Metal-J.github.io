---
layout: default
---

<div class="intro-img"></div>

## Pre Production

> Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre ProductionPre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production Pre Production 

#### 哲学思想

<ul class = "main-list">
    {% for post in site.categories.phi reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 基础数学 

<ul class = "main-list">
    {% for post in site.categories.math reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### C++

<ul class = "main-list">
    {% for post in site.categories.pro reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 平台工具

<ul class = "main-list">
    {% for post in site.categories.tool reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 图形渲染

<ul class = "main-list">
    {% for post in site.categories.gra reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 制作

> 现代制作流、管线与方法论研究

<ul class = "main-list">
    {% for post in site.categories.production reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 其它

<ul class = "main-list">
    {% for post in site.categories.other reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>