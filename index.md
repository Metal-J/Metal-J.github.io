---
layout: default
---

<div class="intro-img"></div>

## 原理

> 

### 微积分

#### 函数与极限

<ul class = "main-list">
    {% for post in site.categories.A11 reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>