---
layout: post
title: C++ Pipeline
categories: cpp
---

> From [The Cherno](https://www.youtube.com/channel/UCQ-W1KE9EYfdxhL6S4twUNw) C++

### 描述

高性能 直接控制硬件指令 C++直接编译成当前CPU机器码 仅依赖对应编译器 从稀有架构到广泛系统支持  

Java、C# 是编译器译为中间语言 并运行在虚拟机隔离层 在运行时通过虚拟机输出对应机器码 因此无需重写编译工程 而仅需改进运行时虚拟机 将平台依赖性从编译阶段降低至运行时  

虚拟机优化后的机器码 优于低效C++生产的机器码 所以正确的C++应当是高性能的 正确的写C++很重要

### 环境结构

**Machine** Intel/x64/x86  
**System** Windows 10  
**Environment** (Compiler)Visual Studio 2017  
**Module** Visual Assist / Desktop Development with C++ / (C#).NET desktop Development  
**Configuration** ChernoVS.vssettings / (Avoid Spaces)Project Path C:\Dev\CPP\  
**Solution** 多个相关 Project  
**Project** 多组相关 **File** 引用、外部依赖、头文件、源文件、资源文件  
**Binary** File 可编译成多种二进制 如库、可执行  
**解决方案配置** 一组 **Project** 生成以及编译的规则  

### 语言结构

#### 预处理 Pre-process

```
#include <iostream>

#if 0
some code
#endif
```

编译前预处理所有以 **#** 开头预处理语句  
**Project属性** - **preprocessor** - Preprocess to a file (yes/on) 将编译阶段前预处理后的文件(.i) 显式单独输出(此时不输出.obj) 

**#include** header file(.h) 本身不被编译而仅被包含 复制其内容至此语句处并替换  
**iostream** 包含5000多行代码 其本身亦包含 **#include** 滚雪球 因此一个 Ttranslation unit 对应的 Object file 都很大  
**#if #endif** 根据条件决定是否包含或不包含某段代码 预处理语句不涉及编译或运行代码 而是编译前对代码文本做出处理 属于对文本编程   

#### 主体语言 main

```
int main()
{ some code }
```

机器将先从 **main** 函数顺序执行代码 是 **Program Entry Point** 这个 Point 的函数名可以更改的  
**main** 函数返回类型为整型 但 **main** 特例无返回值 不返回时默认返回 0

```
std::cout << "Hello World!" << std::endl;
std::cout.print("Hello World!").print(std::endl);
```

**<<** 运算符重载 运算符就是函数  
**<<** 和 cout **对象函数** print 将字符串作为参数实质相同  
**std::endl** 参数使控制台光标移至下一行

### 运行结构

#### 编译 Compiling

**Text → Compiling → object file/Binary → Linking → Executable**

##### Compiling → Object file/Binary

**Pre-process:** Any preprocess_statements get evaluated(在编译检查前)  
**Tokenizing:** 用随机生成的标识符代替敏感数据，以防止未经授权的访问  
**Pausing/Sorting:** C++ into **Abstract Syntax Tree**  
**Generating**: code to constant data / CPU instruction

each of C++ files called **Translation units** but one C++ files can include many other C++ files and result in just one translation unit and generated to only one object file  

**Object file** is binary: Machine code/Constant data we defined  
next step is linking them into one **executable** which organizes all of the machine code that we actually need to run

**Files** don't exists in C++. In java,  class name has to be tied to file name、folder hierarchy has to be tied to package、java expects certain files to exist. In C++ a file is just a way to feed the compiler with **source code** You need to set **compiler** to treat as C++(默认会通过检查文件拓展名来自动设置)

##### 从 assembly 看性能优化

object file 是 binary 不可读 输出为 asm 可查看对应汇编语言  
**Projec属性:** **Output Files:** Assembler Output: Assembly-Only Listing(.asm)

```
int Mt(int a, int b)
{
	int result = a * b;
	return result;
}
```  

```
; Line 3
	mov	eax, DWORD PTR _a$[ebp]
	imul	eax, DWORD PTR _b$[ebp]
	mov	DWORD PTR _result$[ebp], eax
; Line 4
	mov	eax, DWORD PTR _result$[ebp] ; Slow code
```
*Line 4 redundant*

后两句在C++层面看，是特意将 a*b 计算结果存入 一个 result 变量并返回，具有一个“结果”的语义作用。但从汇编层面上看，是将一个值倒来倒去，这在性能而非语义上，增加开销而无任何意义。写法正确与否取决于应当考虑语义还是性能，而宏观来看，选择C++应当首先考虑性能。

```
int Mt(int a, int b)
{
	return a * b; // 移除result变量, 直接返回a*b
}
```

```
; Line 3
	mov	eax, DWORD PTR _a$[ebp]
	imul	eax, DWORD PTR _b$[ebp] ; a b eax is enough
```
---
**Constant folding**  
constant that can be worked out at compile time No need creat two constant values at runtime

```
int Mt()
{
	return 5 * 2;
}
```

```
; Line 3
	mov	eax, 10					
```
---

**Fuction Signature** Compiler **Tokenizing** for linking

```
const char* Log(const char* message)
{
	return message;
}

int Mt(int a, int b)
{
	Log("Multiply");
	return a * b;
}
```
```
?Mt@@YAHHH@Z PROC	; fuction signature				
; Line 8
	push	ebp
	mov	ebp, esp
	sub	esp, 64					
	push	ebx
	push	esi
	push	edi
	mov	ecx, OFFSET __8998EEE5_math@cpp
	call	@__CheckForDebuggerJustMyCode@4
; Line 9
	push	OFFSET ??_C@_08EOBDLMOI@Multiply@
	call	?Log@@YAPBDPBD@Z			; generate a call instruction
	add	esp, 4
; Line 10
	mov	eax, DWORD PTR _a$[ebp]
	imul	eax, DWORD PTR _b$[ebp]
; Line 11
	pop	edi
	pop	esi
	pop	ebx
	mov	esp, ebp
	pop	ebp
	ret	0
?Mt@@YAHHH@Z ENDP					

?Log@@YAPBDPBD@Z PROC					
; Line 2
	push	ebp
	mov	ebp, esp
	sub	esp, 64					
	push	ebx
	push	esi
	push	edi
	mov	ecx, OFFSET __8998EEE5_math@cpp
	call	@__CheckForDebuggerJustMyCode@4
; Line 3
	mov	eax, DWORD PTR _message$[ebp] ; just return valve, not storing, no other actions
; Line 4
	pop	edi
	pop	esi
	pop	ebx
	mov	esp, ebp
	pop	ebp
	ret	0
?Log@@YAPBDPBD@Z ENDP					
```

*Line 9 not storing the Log function return value*  

**Projec属性** - **Optimization** - Maximize Speed   

*O2 / RTC ERROR*  

**Code Generation:** **Basic Runtime Check:** Default(won't perform runtime checks,that the code the compiler will insert to help us with debugging at runtime) 

```
?Mt@@YAHHH@Z PROC
; Line 7
	push	ebp
	mov	ebp, esp
	mov	ecx, OFFSET __8998EEE5_math@cpp
	call	@__CheckForDebuggerJustMyCode@4
	mov	eax, DWORD PTR _a$[ebp]
	imul	eax, DWORD PTR _b$[ebp] ; call instruction has been remove by compiler because does nothing
; Line 10
	pop	ebp
	ret	0
?Mt@@YAHHH@Z ENDP
```

#### 链接 Linking

**Compiling** ctrl+f7 compile no linking **Build** ctrl+f5 linking 

##### Object file/Binary → Executable

翻译单元以 **.obj(binary/asm)** 相互分离 需要链接器重新组织整个 **Executable(.exe)** 的逻辑  
这个逻辑有 Symbl and Function Separated in .obj、Main function/Program Entry Point  
对于Entry Point，Project属性 - General - Project defaults - Configuration type - Compiling as application(链接的方式取决于编译文件的类型) 

**c/LINK ERROR** 前缀代表是编译还是链接错误

**cerror** 

*语法错误*

*函数调用未声明*

**声明** 是相信函数已有 **定义** 并交给链接器 声明后不调用可以 声明和调用必须以某种方式在同一翻译单元中 定义则不用 链接器会找到定义

**LINKerror** 

*无函数进入点*

*函数已声明已调用但找不到定义*

*函数已声明 当前.obj未调用但存在 可能在其他.obj中调用但找不到定义*

*按声明返回类型和参数类型/个数不匹配*

*同名同参同类型函数分布不同.obj*

##### 从 Linkling 看代码组织方法

链接器会尝试寻找调用的函数的定义和可能会调用的函数定义。比如，若当前.obj文件中函数名存在但未调用，函数存在其他.obj文件使用的可能性，链接器仍会寻找对应函数定义

```
int Log()
	{ some code }

int includeLog()
	{ Log(); } // Log函数名存在但是实际includeLog未调用

int main()
	{
		// includeLog();
	}
```

**static** 在**调用函数**的声明中 将调用函数作用范围限定在当前.obj文件中 将该函数定义包括其中包含的其他函数在其他.obj文件使用的可能性排除 对其他.obj文件不可见  

当前调用函数中某函数名存在但未调用 若不限定调用函数作用域 存在其他.obj文件使用的可能性 链接器仍然会寻找该未调用的函数定义 若限定调用函数作用域 该函数**被调用的可能性**因限定作用域而彻底排除 链接器不会寻找对应函数定义 若调用函数在当前.obj内被调用了 则限定作用域或不限定不影响在当前.obj内被调用 因为限定作用域是对其他.obj调用而言 则链接器正常寻找出现且调用的函数定义

**inline** 是在函数调用处直接置换成函数体 免除了函数名出现以及函数调用  

```
static int includeLog() // 注意是将调用函数设置为static
{ some code }

inline int Log()
{ some code }
```

**#include/header file** 中函数定义应移动至单一翻译单元 只保留声明 以避免同名同参同类型函数分布不同.obj