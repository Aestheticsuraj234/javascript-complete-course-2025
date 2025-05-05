## 📌 2. Variables and Data Types

### 🟢 Variable Declarations: `var`, `let`, `const`

#### ✅ `var` (Old way - avoid in modern code)

* **Function-scoped**
* Can be **redeclared and updated**
* Hoisted (moved to the top of their scope, but not initialized)

```js
console.log(a); // undefined (due to hoisting)
var a = 10;
```

#### ✅ `let` (Modern way)

* **Block-scoped**
* Can be **updated**, but **not redeclared** in the same scope
* Hoisted but **not initialized** (temporal dead zone)

```js
let b = 20;
b = 30; // ✅
let b = 40; // ❌ Error: Identifier 'b' has already been declared
```

#### ✅ `const` (Modern, for constants)

* **Block-scoped**
* **Cannot be updated or redeclared**
* Must be **initialized** at declaration

```js
const PI = 3.14;
PI = 3.15; // ❌ TypeError: Assignment to constant variable
```

---

### 🟣 Data Types in JavaScript

JavaScript has two main categories of data types:

### 1. 🧪 **Primitive Types** (Immutable, stored by value)

> They hold **single values** and are **copied** when assigned or passed.

| Type        | Example                      |
| ----------- | ---------------------------- |
| `String`    | `'hello'`, `"JS"`            |
| `Number`    | `42`, `3.14`, `NaN`          |
| `Boolean`   | `true`, `false`              |
| `undefined` | declared but not assigned    |
| `null`      | intentional absence of value |
| `Symbol`    | unique value (ES6)           |
| `BigInt`    | large integers: `123n`       |

```js
let str = "Hello";
let num = 100;
let isDone = false;
let nothing = null;
let notAssigned;
let big = 123456789012345678901234567890n;
let uniqueId = Symbol("id");
```

### 2. 🧱 **Reference Types** (Mutable, stored by reference)

> Objects are stored in memory and **referenced** via variables.

| Type                   | Example                     |
| ---------------------- | --------------------------- |
| `Object`               | `{ name: "John" }`          |
| `Array`                | `[1, 2, 3]`                 |
| `Function`             | `function() {}` or `()=>{}` |
| `Date`, `RegExp`, etc. | `new Date()`                |

```js
let obj = { name: "Alice" };
let arr = [1, 2, 3];
let greet = () => console.log("Hi");
```

---

### 📌 Key Difference: Primitive vs Reference

| Feature       | Primitive           | Reference                  |
| ------------- | ------------------- | -------------------------- |
| Stored by     | Value               | Reference (memory address) |
| Copy behavior | Copies actual value | Copies reference           |
| Mutability    | Immutable           | Mutable                    |

```js
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (unchanged)

let obj1 = { age: 25 };
let obj2 = obj1;
obj2.age = 30;
console.log(obj1.age); // 30 (changed via reference)
```

