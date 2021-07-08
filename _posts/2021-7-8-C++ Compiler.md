---
layout: post
title: C++ Compiler
categories: S11
---

> From [The Cherno](https://www.youtube.com/channel/UCQ-W1KE9EYfdxhL6S4twUNw) How the C++ Compiler Works

#### 描述

Text Compiling intermediate_format(object file) Linking Binary

Compiling:  
Pre-process: Any Preprocess_statements get evaluated(在编译检查前)  

Tokenizing: 用随机生成的标识符代替（敏感数据），以防止未经授权的访问。  

pausing sorting out C++ into a format: abstract syntax tree  

begin generating code to  
constant data instruction

#### 结构

each of C++ files called translation units  
but one C++ files can include many other C++ file and result in just one translation unit  
generated to an object file  

object file is binary  Machine code constant data we defined

next step is linking them into one executable which contains all of the machine code that we actually need to run

files dont exists in C++  
In java class name has to be tied to file name
folder hierarchy has to be tied to package  
java expects certain files to exist  
In C++ a file is just a way to feed the compiler with source code You need to set compiler to treat as C++(默认会通过检查文件拓展名设置)