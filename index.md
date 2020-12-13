---
layout: default
---

## E1 哲学观点

>5.61 我们不能思考我们所不能思考的东西；因此我们也不能说我们所不能思考的东西。5.62 世界就是我的世界：这表现在语言（我所唯一理解的语言）的界限就意味我的世界的界限。——《逻辑哲学论》维特根斯坦

### 语言/分析哲学

#### 逻辑哲学论 [英] 路德维希·维特根斯坦

<ul class = "main-list">
    {% for post in site.categories.Wittgenstein reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## E2 数学观点

>即使不做研究，只是阅读有关数学的书和论文，也非常费时。如果只读定理部分而跳过证明过程的话，似乎很快就能读完两三本书。但是实际上，跳过证明的阅读方式如浮光掠影，留下的印象非常浅，结果多会一无所得。想要理解数学书，只能一步一步遵循证明过程。数学的证明不是单纯的论证，还具有思考实验的意味。所谓理解证明，也不是确认论证中是否有错误，而是自己尝试重现思考实验的过程。——《堕者集》小平邦彦

### 文集

#### 惰者集 [日] 小平邦彦

<ul class = "main-list">
    {% for post in site.categories.Kunihiko-Kodaira reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 春宵十話 随筆集 [日] 岡潔

<ul class = "main-list">
    {% for post in site.categories.Kiyoshi-Oka reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 数学 通识读本 [英] 蒂莫西·高尔斯

<ul class = "main-list">
    {% for post in site.categories.Timothy-Gowers reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## E3 编程观点

## M1 基础数学

>读者对于有理数及其性质，从中学的教材内便很熟悉了。在那时，初等数学的要求，已趋向于必须扩大数的领域。的确，在有理数中即使是正整数（自然数）的根，例如$$ \sqrt2 $$，也常常并不存在。就是说，并没有这样的有理数$$ \frac pq $$ (式中$$ p $$及$$ q $$——自然数)，其平方能等于2。为了证明，试假定其反面：设有分数$$ \frac pq $$，其平方为$$ {(\frac pq)}^2\;=\; $$2。我们可以假设$$ \frac pq $$是既约分数，即$$ p $$和$$ q $$是没有公约数的。因$$ p^2=2q^2 $$，故$$ p $$为偶数：$$ p^2=2r $$($$ r $$——整数)，于是$$ q $$为奇数。用$$ p $$的式子代入，得：$$ q^2=2r^2 $$，由此推得$$ q $$为偶数。所得的矛盾便证明了我们的命题。——《微积分学教程》菲赫金哥尔茨

### 微积分

#### 解析概论 [日] 高木贞治

#### 微积分入门 [日] 小平邦彦
<ul class = "main-list">
    {% for post in site.categories.AITC reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

#### 微积分学教程 [苏] Г.М.菲赫金哥尔茨

<ul class = "main-list">
    {% for post in site.categories.FM reversed %}
        <li><p class = "post-date">{{ post.date | date:"%Y/%m/%d" }}</p><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

## M2 编程语言

## M3 计算机系统