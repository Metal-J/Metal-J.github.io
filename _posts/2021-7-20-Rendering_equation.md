---
layout: post
title: Rendering Equation
categories: S11
---

### 基于物理渲染 Physically Based Rendering

#### 渲染方程 Rendering Equation

$$ L_{o} (p,\omega_{o}) = L_{e} (p,\omega_{o}) + \int_{\Omega}^{} f_{r}(p,\omega _{i},\omega _{o}) L_{i} (p,\omega_{i})n \cdot \omega _{i}d\omega _{i} $$

#### 辐射度量学 Radiometry

辐射度量学是一种用来度量电磁场辐射（包括可见光）的理论，其中有多种辐射度量(Radiometric Quantities)可用来测量表面或方向上的光。  

- 辐射能（radiant energy）
- 辐射通量（radiant flux）
- 辐射强度（radiant intensity）
- 辐照度（irradiance）
- 辐射率（radiance）

##### 辐射能 radiant energy

光源会以球的形式不断向外辐射能量，那么一定时间内，光源辐射总能量（辐射能）就是一个球内所有的能量。光源辐射总能量用符号 **Q** 表示，单位即是能量单位**焦耳**，单位符号 **J** 。

##### 辐射通量 radiant flux/power

单位时间内的辐射能。取一个极短时间 **dt** 内接收到的辐射能 **dQ** 即可算出辐射通量的值。  
辐射通量用符号 $$\Phi$$ 表示，根据定义得如下公式：

$$ \Phi \equiv \frac{dQ}{dt}  $$

辐射通量指的就是在这个极短时间内的球面上能量。  
辐射能单位是焦耳（J），单位时间为秒（s），则上式子单位是 J/s，即功率单位瓦特（定义为1焦耳/秒）。因此辐射通量的单位即是功率的单位：瓦特（Watt），单位符号 W。

##### 辐射强度 Radiant Intensity

立体角（solid angle）用 **ω** 来表示，单位为 sr（steradian，球面度）。  
其值为该角对应面积，记为 A，$$dA = (dθ*r)*(dφ*r*cosθ)$$。从式中可见 $$dA$$ 除了和 $$dθ$$ 与 $$dφ$$ 有关外，还和 $$cosθ$$ 有关，也就是说当 $$dθ$$ 与 $$dφ$$ 不变时，θ 的值越小，对应面积就越小，立体角也越小。  
除以半径的平方：

$$ \omega = \frac{A}{r^{2}}  $$

辐射强度为单位立体角（微分立体角，$$ dω $$）上的辐射通量（ $$ d\Phi $$ ）之比，用 $$ I $$ 来表示，单位为 $$ W/sr $$。

由于微分立体角足够的小，因此我们也可以把它当做是原点在球心的一个三维空间中的方向，那么辐射强度我们也可以当做是光源在某个方向上的辐射通量。

##### 辐照度 Irradiance