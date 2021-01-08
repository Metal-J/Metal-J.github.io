---
layout: default
---

>This site is used to organize and record notes  
>For **learning purposes** and **personal use only**

<div class="intro-img"><p>NEO JAPAN 2202 © Johnson Ting</p></div>
<div class="intro"><p><strong>ABOUT</strong><br>© SILENSEA</p></div>

## E1 数学观点

<div class="cate-img" style="background-image: url(/assets/img/end7.jpg); filter: invert(1);"></div>

>想要更好地理解定理，仅仅读一遍定理的证明过程是远远不够的。反复阅读研究、做笔记，并且将定理运用于各种问题中才是有效的方法。做笔记的目的不是为了背诵证明过程，而是花时间去详细分析定理所要表达的数学事实的结构。  
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

## E2 工程观点

<div class="cate-img" style="background-image: url(/assets/img/end3.png); filter: invert(1); background-position: bottom;" ></div>

## M1 基础数学

<div class="cate-img" style="background-image: url(/assets/img/end4.jpg); filter: invert(1);"></div>

>数学必须遵循逻辑。不过，逻辑对于数学的作用类似于语法对于文学。书写符合语法的文章与用语法编织语言、创作小说是截然不同的。同样，依照逻辑进行推论与使用逻辑构筑数学理论也并非同一层面上的事。  
>—《堕者集》小平邦彦

### 微积分

#### 微积分学教程 [苏] Г.М.菲赫金哥尔茨

<ul class = "main-list">
    {% for post in site.categories.WJFXJC reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 微积分入门 [日] 小平邦彦

<ul class = "main-list">
    {% for post in site.categories.WJFRM reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## M2 编程接口

<div class="cate-img" style="background-image: url(/assets/img/end5.jpg); filter: invert(1);"></div>

## M3 计算机系统

<div class="cate-img" style="background-image: url(/assets/img/end6.jpg);"></div>