---
layout: default
---

>This site is used to organize and record notes  
>For **learning purposes** and **personal use only**

<div class="intro-img"><p>NEO JAPAN 2202 © Johnson Ting</p></div>
<div class="intro"><p><strong>ABOUT</strong><br>© SILENSEA</p></div>

<ul class = "main-list">
    {% for post in site.categories.X reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## E1 哲学观点

<div class="cate-img" style="background-image: url(/assets/img/end.jpg); filter: invert(1);"></div>

>这表现在语言（我所唯一理解的语言）的界限就意味我的世界的界限。  
>—《逻辑哲学论》维特根斯坦

### 语言哲学

#### 逻辑哲学论 [英] 路德维希·维特根斯坦

<ul class = "main-list">
    {% for post in site.categories.LJZXL reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## E2 数学观点

<div class="cate-img" style="background-image: url(/assets/img/end2.png);"></div>

>数学的证明不是单纯的论证，还具有思考实验的意味。所谓理解证明，也不是确认论证中是否有错误，而是自己尝试重现思考实验的过程。  
>—《堕者集》小平邦彦

### 文集

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

#### 数学 通识读本 [英] 蒂莫西·高尔斯

<ul class = "main-list">
    {% for post in site.categories.SXTSDB reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## E3 编程观点

<div class="cate-img" style="background-image: url(/assets/img/end3.png); filter: invert(1); background-position: bottom;" ></div>

<ul class = "main-list">
    {% for post in site.categories.BCGD reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## M1 基础数学

<div class="cate-img" style="background-image: url(/assets/img/end4.jpg);"></div>

### 微积分

#### 微积分学教程 [苏] Г.М.菲赫金哥尔茨

<ul class = "main-list">
    {% for post in site.categories.WJFXJC reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 解析概论 [日] 高木贞治

<ul class = "main-list">
    {% for post in site.categories.JXGL reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 微积分入门 [日] 小平邦彦

<ul class = "main-list">
    {% for post in site.categories.WJFRM reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## M2 编程语言

<div class="cate-img" style="background-image: url(/assets/img/end5.jpg); filter: invert(1);"></div>

## M3 计算机系统

<div class="cate-img" style="background-image: url(/assets/img/end6.jpg);"></div>