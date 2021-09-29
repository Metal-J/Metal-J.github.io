---
layout: post
title: Rendering Equation 渲染方程 
categories: graphic
---

##### 辐射度量学 Radiometry

$$ \Phi = \frac{\mathrm{d}Q}{\mathrm{d}t} $$

$$ I = \frac{\mathrm{d}\Phi}{\mathrm{d}\Omega} $$

$$ L = \frac{\mathrm{d}I}{\mathrm{d}A \cos \theta } = \frac{\mathrm{d}^2 \Phi}{\mathrm{d}\Omega \mathrm{d}A \cos \theta} $$

$$ I_\Theta = \frac{\mathrm{d}\Phi}{\mathrm{d}\omega_\Theta} $$

$$ L(x→\Theta) = \frac{\mathrm{d}I_\Theta}{\mathrm{d}A_x \cos \theta } = \frac{\mathrm{d}^2 \Phi}{\mathrm{d}\omega_\Theta \mathrm{d}A_x \cos \theta} $$

$$ I_\Theta = \frac{\mathrm{d}\Phi}{\mathrm{d}\omega_\Theta} = \int_{A} L(x→\Theta) \cos\theta \mathrm{d} A_x $$

$$  E(x) = \frac{\mathrm{d}\Phi}{\mathrm{d}A_x} = \int_{\Omega} L(x←\Theta) \cos\theta \mathrm{d} \omega_\Theta $$

$$  B(x) = \frac{\mathrm{d}\Phi}{\mathrm{d}A_x} = \int_{\Omega} L(x→\Theta) \cos\theta \mathrm{d} \omega_\Theta $$

$$ \mathrm{d}^2 \Phi = L(x→\Theta) \mathrm{d} \omega_\Theta \mathrm{d}A_x \cos\theta $$

$$ \Phi = \int_{A} \int_{\Omega} L(x→\Theta) \cos\theta \mathrm{d} \omega_\Theta \mathrm{d}A_x $$

$$ f_r(x,\Psi→\Theta) = \frac{dL(x→\Theta)}{dE(x←\Psi)} = \frac{dL(x→\Theta)}{L(x←\Psi)\cos(N_x,\Psi) d\omega_\Psi} $$