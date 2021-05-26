---
layout: default
---

<div class="intro-img">
    <div class="intro-img-1"></div>
    <div class="intro-img-2"></div>
    <div class="intro-img-3"></div>
    <div class="intro-img-4"></div>
    <div class="intro-img-5"></div>
</div>

## 原理

> 

### 微积分

#### 微积分

<ul class = "main-list">
    {% for post in site.categories.A11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## 系统

>

### 计算机系统

#### 计算机组成

<ul class = "main-list">
    {% for post in site.categories.A11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>