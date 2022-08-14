---
layout: '@layouts/MdLayout.astro'
title: 'My Markdown page'
setup: |
  import Title from '@components/Title.astro';
  Astro.response.headers.set('Set-Cookie', 'a=b; Path=/;');
---
<Title>Title</Title>

This is my page, written in **Markdown.**

$\displaystyle
L = \frac{1}{2} \rho v^2 S C_L
$

text $L$ text


```js
console.log("hi");
```
