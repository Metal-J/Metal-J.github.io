---
layout: post
title: Animation Intro
categories: Animation
---

**Cascadeur** 有三种控制器模式
- **AutoPosing**，以拖拽实时计算最佳姿势。
- **点控制器**，类似 Maya HumanIK。点控制器必须多选点才能旋转。
- **盒控制器**，用于调节细节Pose。

**Cascadeur** 流程
- **DCC** 模型/骨骼/蒙皮
- **Cascadeur** Rig
- 控制器分轨
- 导入参考
- 关键帧Pose
- 动画插值
- 物理工具（可选）
- 动画滤镜
- 轨迹线编辑
- 动画导出
- **Maya** 添加动画层
- 曲线调整
- 动画输出

由于当前版本 **无约束管理**、**动画层**、**曲线编辑器**，制作更高细节动画仍需到 Maya 里微调。