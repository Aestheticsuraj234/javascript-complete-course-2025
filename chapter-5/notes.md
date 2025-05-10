A function in JavaScript is a block of reusable code designed to perform a specific task. You can think of it as a machine: you give it inputs (called arguments), it processes them, and gives you an output (a return value).

## Chapter-5. **Functions in JavaScript**

---

### 🔹 1. Function Declaration vs Function Expression

#### ✅ **Function Declaration**

A function declared with the `function` keyword.

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
```

**Key Points:**

* **Hoisted**: Can be called before the function is defined.
* Defined with the `function` keyword at the top level.

#### ✅ **Function Expression**

A function assigned to a variable.

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Hello, Bob!
```

**Key Points:**

* **Not hoisted**: Cannot be called before the line it's defined.
* Can be anonymous or named.

#### ❗ Difference Example:

```js
sayHi();       // ✅ Works
function sayHi() {
  console.log("Hi!");
}

sayHello();    // ❌ TypeError: sayHello is not a function
const sayHello = function() {
  console.log("Hello!");
};
```

---

### 🔹 2. Arrow Functions

Introduced in ES6, arrow functions are a concise way to write functions.

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5
```

#### ✅ **Implicit Return**

If the body is a single expression, it is returned automatically (no `return` keyword needed):

```js
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20
```

#### ✅ **Single Parameter (no parentheses needed)**

```js
const square = x => x * x;
console.log(square(6)); // 36
```

#### ⚠️ **Arrow Functions vs Regular Functions**

* Arrow functions do **not have their own `this`** binding.
* Arrow functions cannot be used as **constructors**.
* You cannot use `arguments` inside an arrow function.

```js
const obj = {
  name: "Alice",
  greet: function() {
    return `Hi, I'm ${this.name}`;
  },
  badGreet: () => {
    return `Hi, I'm ${this.name}`; // ❌ `this` is not bound to `obj`
  }
};

console.log(obj.greet());     // Hi, I'm Alice
console.log(obj.badGreet());  // Hi, I'm undefined
```

---

### 🔹 3. Parameters vs Arguments

* **Parameters**: Variables listed in the function definition.
* **Arguments**: Actual values passed to the function when called.

```js
function greet(name, time) { // ← parameters
  return `Good ${time}, ${name}!`;
}

console.log(greet("Eve", "morning")); // ← arguments
// Good morning, Eve!
```

#### ✅ Default Parameters

You can assign default values to parameters.

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
```

---

### 🔹 4. Return Values

A function can return a value using the `return` keyword. Once `return` is hit, the function exits.

```js
function sum(a, b) {
  return a + b;
  console.log("This won't run"); // Unreachable
}

const result = sum(5, 10);
console.log(result); // 15
```

#### ❗ Return vs console.log

* `return` sends data *out* of the function.
* `console.log` prints to the console but doesn’t affect return value.

```js
function add(a, b) {
  console.log(a + b);   // prints to console
  return a + b;         // returns the value
}
```

---

### Summary Table

| Concept                 | Example                                  | Notes              |
| ----------------------- | ---------------------------------------- | ------------------ |
| Function Declaration    | `function add() {}`                      | Hoisted            |
| Function Expression     | `const add = function() {}`              | Not hoisted        |
| Arrow Function          | `const add = () => {}`                   | No own `this`      |
| Parameters vs Arguments | `function greet(name)` / `greet("John")` | Definition vs call |
| Return                  | `return a + b;`                          | Stops execution    |
