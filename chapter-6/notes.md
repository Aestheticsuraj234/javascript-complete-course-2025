# 📘 Scope and Hoisting in JavaScript

---

## 1. 🔍 Global vs Local Scope

### ✅ **Global Scope**

* Variables declared **outside of any function or block** are in the global scope.
* Accessible **anywhere in the code** after their declaration.
* If declared using `var` in the global scope, they become properties of the `window` object in browsers.

```js
var a = 10; // global
function show() {
  console.log(a); // 10
}
show();
console.log(window.a); // 10 (in browser)
```

### ✅ **Local Scope**

* Variables declared **inside a function or block** (`{}`) are scoped to that function or block.
* They are not accessible outside that function/block.

```js
function test() {
  let x = 5; // local
  console.log(x); // 5
}
test();
console.log(x); // ReferenceError: x is not defined
```

### 🧠 Key Difference

| Feature         | Global Scope            | Local Scope                     |
| --------------- | ----------------------- | ------------------------------- |
| Accessibility   | Anywhere in the code    | Only inside the function/block  |
| Memory lifetime | Lives till program ends | Lives during function execution |

---

## 2. 🧭 Lexical Scoping

### ✅ **Definition**

* **Lexical scoping** means that the **scope of a variable is determined by its position in the source code** (during writing, not runtime).
* A function **remembers the scope** in which it was defined, not where it is executed.

```js
function outer() {
  let outerVar = 'I am from outer';

  function inner() {
    console.log(outerVar); // Lexical scoping: can access outerVar
  }

  return inner;
}

const fn = outer();
fn(); // 'I am from outer'
```

### 📌 Notes:

* Lexical scope forms the foundation for **closures** in JavaScript.
* Scope is **static**, meaning it doesn't change based on the call stack.

---

## 3. 🚀 Variable Hoisting

### ✅ **What is Hoisting?**

* JavaScript **moves declarations to the top** of their scope during compilation (before execution).
* Only the **declaration** is hoisted, not the **initialization**.

### ✅ **With `var`**

```js
console.log(a); // undefined (not ReferenceError)
var a = 5;
```

* JS interprets it as:

```js
var a;
console.log(a); // undefined
a = 5;
```

### ✅ **With `let` and `const`**

```js
console.log(b); // ReferenceError (Temporal Dead Zone)
let b = 10;
```

### ⚠️ Temporal Dead Zone (TDZ)

* Time between entering scope and declaration.
* Accessing a variable in the TDZ throws an error.

### 💡 Summary

| Keyword | Hoisted | Initialized | TDZ Exists | Redeclarable |
| ------- | ------- | ----------- | ---------- | ------------ |
| `var`   | ✅       | ❌           | ❌          | ✅            |
| `let`   | ✅       | ❌           | ✅          | ❌            |
| `const` | ✅       | ❌           | ✅          | ❌            |

---

## 4. ⚙️ Function Hoisting

### ✅ Function Declarations

* **Fully hoisted** (both name and body).

```js
greet(); // "Hello"
function greet() {
  console.log("Hello");
}
```

### ✅ Function Expressions (using `var`, `let`, or `const`)

* **Only the variable** is hoisted (not the function body).
* Accessing before initialization causes error or `undefined`.

```js
sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi");
};
```

```js
sayHi(); // ReferenceError
let sayHi = function() {
  console.log("Hi");
};
```

### ✅ Arrow Functions

Behave like function expressions. Not hoisted.

---

## ✅ Final Recap

| Concept           | Behavior                                                              |
| ----------------- | --------------------------------------------------------------------- |
| Global Scope      | Declared outside all functions; accessible everywhere                 |
| Local Scope       | Declared inside a function or block; limited to that function/block   |
| Lexical Scope     | Determined by code structure at **definition**, not **execution**     |
| Variable Hoisting | `var` gets hoisted (as `undefined`), `let`/`const` hoisted but in TDZ |
| Function Hoisting | Declarations hoisted, expressions are not                             |

