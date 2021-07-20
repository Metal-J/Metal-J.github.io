---
layout: post
title: Rendering Equation
categories: S11
---

##### 渲染方程 Rendering Equation

**基于物理渲染 PBR, Physically Based Rendering**

$$ L_{o} (p,\omega_{o}) = L_{e} (p,\omega_{o}) + \int_{\Omega}^{} f_{r}(p,\omega _{i},\omega _{o}) L_{i} (p,\omega_{i})n \cdot \omega _{i}d\omega _{i} $$

##### 辐射度量学 Radiometry

辐射度量学是一种用来度量电磁场辐射（包括可见光）的理论，其中有多种辐射度量(Radiometric Quantities)可用来测量表面或方向上的光。  

- 辐射能（radiant energy）  
- 辐射通量（radiant flux）  
- 辐射强度（Radiant Intensity）  
- 辐照度（Irradiance）  
- 辐射率（Radiance）  

注：讨论的依旧是几何光学，不考虑光的波动性，光线的碰撞等，上述与光有关的属性都是在空间上定义的。