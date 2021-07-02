---
layout: default
---

<div class="intro-img"></div>

##  示例 Examples

> 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples 示例 Examples

###  示例 Examples

####  示例 Examples

<ul class = "main-list">
    {% for post in site.categories.A11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

####  彭文生

<ul class = "main-list">
    {% for post in site.categories.E11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>