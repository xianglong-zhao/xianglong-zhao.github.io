# 赵祥龙 · 个人博客

一个轻量的中文个人博客，使用 HTML、CSS 和 Jekyll Pages 发布，不依赖前端构建工具。

## 本地预览

页面使用 Jekyll Liquid 模板。安装 Ruby 和 Jekyll 后，在仓库目录运行 `jekyll serve`，再打开终端显示的本地地址。直接打开 HTML 文件不会渲染文章列表模板。

## 添加文章

在 `_posts/` 下新建 Markdown 文件，文件名使用 `YYYY-MM-DD-title.md`，例如 `2026-11-02-my-note.md`。添加下面的文章信息后写正文：

```yaml
---
layout: post
title: 文章标题
date: 2026-11-02 09:00:00 +0800
permalink: /posts/my-note/
category: 技术
reading_time: 5
description: 一句话摘要。
---
```

首页会自动显示最新 3 篇，文章归档会按年份和日期自动生成。无需再手动修改首页或归档页。提交到 `main` 分支后，GitHub Pages 会自动构建并发布。

站点标题、简介、时区和地址配置位于 `_config.yml`；通用页面结构位于 `_layouts/`；视觉样式位于 `assets/css/site.css` 和 `assets/css/accessibility.css`。
