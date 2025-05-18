## 📝 JavaScript Scope and Hoisting Worksheet

### Instructions:
- Answer the following questions based on your understanding of scope, lexical scoping, and hoisting in JavaScript.
- Questions are arranged from **easy** to **hard**.
- Write code where required and explain your reasoning briefly.

---

### **Easy (1-4)**

**1.**  
Identify whether `x` is in the **global** or **local** scope:  
```js
let x = 10;
function test() {
  console.log(x);
}
```

---

**2.**  
What will this code output?  
```js
console.log(a);
var a = 5;
```

---

**3.**  
True or False:  
A variable declared with `let` inside a block `{}` can be accessed outside that block.  
_Explain your answer._

---

**4.**  
What is the output of this code?  
```js
function greet() {
  console.log("Hello");
}
greet();
```

---

### **Medium (5-7)**

**5.**  
What is the output? Why?  
```js
let outer = 10;
function innerFn() {
  console.log(outer);
}
innerFn();
```

---

**6.**  
Why does this code throw an error?  
```js
console.log(b);
let b = 20;
```

---

**7.**  
Rewrite this function declaration as a **function expression** and explain how hoisting affects it:  
```js
function sayHi() {
  console.log("Hi");
}
```

---

### **Hard (8-10)**

**8.**  
What will this code print? Explain the role of **lexical scoping**:  
```js
function outer() {
  let x = "outer";
  function inner() {
    console.log(x);
  }
  return inner;
}
const fn = outer();
fn();
```

---

**9.**  
Predict the output and explain the hoisting behavior:  
```js
var c = 1;
function test() {
  console.log(c);
  var c = 2;
}
test();
```

---

**10.**  
Write a code snippet that demonstrates the **Temporal Dead Zone (TDZ)** for `const`.

---

### ✅ **Bonus:**
Test your answers in a JavaScript environment after attempting them! For output-based questions, explain **why** the result occurs.
