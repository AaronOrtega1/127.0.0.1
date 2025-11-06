---
link: "[[1761749354-fullstack-development-bootcamp-udemy|Quest: Fullstack Development Bootcamp Udemy]]
aliases: 
  - "CSS Position"
tags:
  - Knowledge
  - CSS
created_date:
  "2025-11-05"
---
# CSS Position
## Summary
- Static Position
  - Default positions in HTML.
  - Goes at the bottom of any other element there is.
- Relative Position
  - Where we can shift the position relative to its static position.
```CSS
element {
  position: relative;
  left: 50px;   /*Shift to the left of its static position*/
  top: 50px;   /*Shift to the top of its static position*/
}
```
- Absolute Position
  - Position relative to **nearest positioned ancestor** or **top left** corner of webpage.
```CSS
element {
  position: absolute;
  left: 50px;   /*Shift to the left*/
  top: 50px;   /*Shift to the top*/
}
```
- Fixed Position
  - Postion relative to **top left** corner of browser window.
```CSS
element {
  position: fixed;
  left: 50px;   /*Shift to the left*/
  top: 50px;   /*Shift to the top*/
}
```

## Source
[position - CSS | MDN](https://developer.mozilla.org/es/docs/Web/CSS/Reference/Properties/position)



