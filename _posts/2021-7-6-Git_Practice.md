---
layout: post
title: Git Practice
categories: S11
---

*Failed to connect to github.com port 443 Timed out*

```
PS C:\Users\Metal\Desktop\Metal-J.github.io> 
git config --global --get http.proxy
git config --global --get https.proxy
git config --global --unset http.proxy
git config --global --unset https.proxy
git config --global http.proxy '127.0.0.1:xxxx'
git config --global https.proxy '127.0.0.1:xxxx'
```

*cd : 找不到路径“C:\Users\Metal\Desktop\Metal-J.github.io\Metal-J.github.io”，因为该路径不存在。*

```
PS C:\Users\Metal\Desktop\Metal-J.github.io> cd Metal-J.github.io
```