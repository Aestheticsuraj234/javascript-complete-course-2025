# 🟦 ES6 (ECMAScript 2015) Features in JavaScript

## 1. `let` and `const`

### ✅ `let`

* Block-scoped (limited to `{}`)
* Can be reassigned
* Not hoisted like `var`

```js
let count = 10;
count = 15;
```

### ✅ `const`

* Block-scoped
* Cannot be reassigned
* Must be initialized during declaration

```js
const PI = 3.14;
// PI = 3.15 ❌ Error
```

---

## 2. Arrow Functions `()=>`

* Shorter syntax for writing functions
* `this` is lexically bound (no dynamic `this`)
* Cannot be used as constructors

```js
const add = (a, b) => a + b;
const square = n => n * n;
```

---

## 3. Template Literals

* Use backticks `` ` ``
* Multiline strings
* Embed expressions using `${}`

```js
const name = "John";
console.log(`Hello, ${name}!`);
```

---

## 4. Destructuring Assignment

### ✅ Array Destructuring

```js
const [a, b] = [10, 20];
```

### ✅ Object Destructuring

```js
const user = { name: "Alice", age: 25 };
const { name, age } = user;
```

---

## 5. Default Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

---

## 6. Rest and Spread Operators `...`

### ✅ Rest (collects values)

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

### ✅ Spread (expands values)

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

---

## 7. Enhanced Object Literals

* Shorthand for properties and methods

```js
const name = "Max";
const user = {
  name,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
```

---


## 14. Map and Set

### ✅ Map

* Stores key-value pairs (any data type as key)

```js
const map = new Map();
map.set("name", "Alice");
console.log(map.get("name")); // Alice
```

### ✅ Set

* Stores unique values

```js
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}
```


