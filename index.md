---
layout: default
---

<div class="intro-img"></div>

## 观点

>

### 文集

#### 数学 简述 [英] 蒂莫西·高尔斯

<ul class = "main-list">
    {% for post in site.categories.A11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 惰者集 [日] 小平邦彦

<ul class = "main-list">
    {% for post in site.categories.DZJ reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 春宵十話 随筆集 [日] 岡潔

<ul class = "main-list">
    {% for post in site.categories.CYSH reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 数学方法 dhchen Ph.D. in Mathematics

<ul class = "main-list">
    {% for post in site.categories.dhchen reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## 基础

>

### 微积分

#### 简明微积分 [中科大] 龚昇

<ul class = "main-list">
    {% for post in site.categories.JMWJF reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

### 其他

<ul class = "main-list">
    {% for post in site.categories.QITA reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## 系统