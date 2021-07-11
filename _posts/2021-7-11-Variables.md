---
layout: post
title: Variables
categories: S11
---
### 描述

Variables allow to name a piece of data store in memory to keep using it

变量尝试量化世界 并通过机械来自动快速大量推算其逻辑结果 这是任何编程语言的基础  
具体来说 变量在软件层面对硬件内存建立标注和结构化 以抽象其代表的数据概念  
C++是试图放权给编程者的语言 它提供了几种建立数据概念的规则以供自由发挥  
它们之间实质区别是所占内存大小 实际规定数据类型大小的是不同编译器

one byte is eight bits of data
four bytes is 32 bits of data
int is 4 bytes
for signed 1 bits has to be for the sign
leaves 31 bits left that's 2,147,483,648
第一个可以编码的数是0 所以最大值有2,147,483,647
for unsigned just use

char is 1 byte  
short is 2 bytes  
int is 4 bytes  
long usually 4 bytes depending on the compiler  
long long usually 8 bytes  

可以将值或者字符赋给char 它们赋值进去都是数值 但是char这种数据类型 例如cout函数会特殊对待 无论char里是不是数值 都被输出为数值对应的字符

floats four bytes 数值后加f  
doubles eight bytes  
bool one bytes 0/1 can't address memory individual bits we can only address/access one bytes

sizeof() 读取数据类型的字节数

### 函数

function is function 便于抽象和调用
in class it called methods 
call a function compiler generates a call instruction