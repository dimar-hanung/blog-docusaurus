---
slug: first-kata
title: First Kata
authors: dimar
tags: [codewars, programming chellange]
---
### 🤔 Question
Buat function perkalian

### 💡 Answer

`Apr 5, 2021, 3:23 AM GMT+7`
```js
function multiply(a, b){
  return a * b
}
```
---
`August 5, 2022, 00:10 AM GMT+7`
```js
const multiply = (a,b) => a * b
```
### 🧪 Sample Test
```js

const assert = require("chai").assert;

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1,1), 1);
    assert.strictEqual(multiply(2,1), 2);
    assert.strictEqual(multiply(2,2), 4);
    assert.strictEqual(multiply(3,5), 15);   
  });
});
``` 
