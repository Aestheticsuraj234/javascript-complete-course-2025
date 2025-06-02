
## 🔷 1. What is the Global Execution Context (GEC)?

The **Global Execution Context** is the **first execution context** that the JavaScript engine creates when your code starts running. It sets the stage for everything else in JavaScript execution.

It’s created **by default** whenever a JavaScript file is run, and it belongs to the **global scope** (e.g., `window` in browsers, `global` in Node.js).

---

## 🔷 2. Phases of Execution Context Creation

JavaScript code is executed in **two major phases**:

### ⚙️ A. **Creation Phase (aka Memory Creation Phase)**

During this phase:

* The **global object** is created (`window` in browsers, `global` in Node.js).
* A special object called `this` is initialized.
* **Memory (hoisting) is set up**:

  * Functions are fully hoisted with their definitions.
  * Variables are hoisted and initialized with `undefined`.

### ⚙️ B. **Execution Phase**

* Code is executed **line by line**.
* Variables are assigned actual values.
* Function invocations create new **Function Execution Contexts** (FECs).

---

## 🔷 3. Components of the Global Execution Context

```js
// Example Code
var x = 10;
function greet() {
  return "Hello!";
}
```

### ✅ A. **Global Object**

In browser:

```js
window // the global object
```

In Node.js:

```js
global
```

All globally declared variables and functions become **properties/methods** of the global object.

```js
console.log(window.x); // 10
console.log(window.greet()); // "Hello!"
```

---

### ✅ B. `this` Keyword

* In the **global execution context**, `this` points to the global object.

```js
console.log(this === window); // true (in browser)
```

> Note: In **strict mode**, `this` in global context is `undefined`.

---

### ✅ C. Variable Object (VO) / Lexical Environment

This stores:

* Function declarations
* Variable declarations (`var`, `let`, `const`)
* `arguments` object (inside functions)

In ES6+, it’s often referred to as the **Lexical Environment**, which includes:

* **Environment Record** (where variables live)
* A reference to the **outer lexical environment**

---

## 🔷 4. Visual Representation

```
Global Execution Context:
---------------------------
Global Object: window
this: window
Memory (Variable Object):
  x: undefined (initially)
  greet: function() {...}
---------------------------
```

---

## 🔷 5. Hoisting in GEC

* **Function declarations** are hoisted with their full body.
* **`var` variables** are hoisted but initialized with `undefined`.
* **`let` and `const`** are hoisted but put in **Temporal Dead Zone (TDZ)**.

```js
console.log(a);     // undefined
console.log(b);     // ReferenceError
console.log(greet); // function greet() {...}

var a = 5;
let b = 10;
function greet() {
  return "Hi!";
}
```

---

## 🔷 6. Global vs Local Execution Context

* **Global Execution Context**: Created once, remains until the program ends.
* **Function Execution Context**: Created every time a function is invoked.

When a function is called:

* A **new execution context** is pushed onto the **Call Stack**.
* When it finishes executing, it is popped off.

---

## 🔷 7. Call Stack & GEC

The **Call Stack** always starts with the **Global Execution Context** at the bottom:

```
CALL STACK:

| Function EEC: foo()      |
| Function EEC: bar()      |
| Global Execution Context |
```

> Once all functions finish, only the GEC remains, and eventually, the program exits.

---

## 🔷 8. GEC in Strict Mode

```js
"use strict";

console.log(this); // undefined (in modules or strict mode)
```

In strict mode:

* The value of `this` in the global context is `undefined`, **not** `window`.

---

## 🔷 9. Temporal Dead Zone (TDZ)

Variables declared using `let` or `const` are hoisted but are **not initialized** until the declaration is evaluated.

```js
console.log(x); // ReferenceError
let x = 5;
```

---

## 🔷 10. Summary Table

| Component              | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| **Global Object**      | `window` in browser, `global` in Node.js                 |
| **`this` keyword**     | Refers to global object (non-strict)                     |
| **Memory Setup**       | Hoisting of vars and functions                           |
| **Execution Phase**    | Code runs line by line                                   |
| **Call Stack**         | GEC is the base; function calls push/pull                |
| **TDZ**                | `let` and `const` are inaccessible before initialization |
| **Strict Mode Impact** | `this` becomes `undefined`                               |

---

## 🔷 11. Real-world Example

```js
console.log(greet); // function
console.log(name);  // undefined

var name = "CodeSnippet";

function greet() {
  console.log("Welcome " + name);
}

greet(); // Welcome CodeSnippet
```

### 🔍 Memory Creation Phase:

```js
name → undefined
greet → function
```

### 🔍 Execution Phase:

```js
name → "CodeSnippet"
greet() → prints "Welcome CodeSnippet"
```

