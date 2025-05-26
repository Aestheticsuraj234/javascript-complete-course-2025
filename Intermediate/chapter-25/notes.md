## 🔹 1. `this` in Global Scope

In the **global execution context**, `this` refers to the **global object**:

* In browsers: `window`
* In Node.js: `global`

### ✅ Example:

```js
console.log(this); // In browsers: window
```

In **strict mode**, `this` in the global scope is `undefined` inside a function (not methods).

---

## 🔹 2. `this` in Functions (Strict vs Non-Strict Mode)

### ⚙️ Non-Strict Mode:

```js
function show() {
  console.log(this);
}
show(); // window (in browsers)
```

### ⚙️ Strict Mode:

```js
'use strict';
function show() {
  console.log(this);
}
show(); // undefined
```

> ✅ In strict mode, functions called directly (not as a method) will have `this` as `undefined`.

---

## 🔹 3. `this` Substitution (Non-Strict Mode)

When `null` or `undefined` is passed as `this`, it's **substituted with the global object** (in non-strict mode).

```js
function foo() {
  console.log(this);
}

foo.call(null);   // window (in browser)
foo.call(undefined); // window
```

In strict mode, `this` remains `null` or `undefined`.

```js
'use strict';
function foo() {
  console.log(this);
}
foo.call(null); // null
```

---

## 🔹 4. `this` Depends on How a Function is Called

```js
const person = {
  name: 'Alice',
  greet() {
    console.log(this.name);
  }
};

person.greet(); // Alice

const greetFn = person.greet;
greetFn(); // undefined (or window.name if set)
```

> ✅ `this` depends on the **calling context**, not where the function is defined.

---

## 🔹 5. `this` in Object Methods

When a function is **called as a method** of an object, `this` refers to that object.

```js
const user = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
};
user.sayHi(); // John
```

But if you extract the method:

```js
const hi = user.sayHi;
hi(); // undefined (or window.name if set)
```

---

## 🔹 6. `this` with `call()`, `apply()`, `bind()`

### `call()` and `apply()` immediately invoke the function with explicit `this`.

```js
function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "John" };

greet.call(person);  // Hello, John
greet.apply(person); // Hello, John
```

### `bind()` returns a new function with `this` bound:

```js
const greetJohn = greet.bind(person);
greetJohn(); // Hello, John
```

---

## 🔹 7. `this` in Arrow Functions

Arrow functions **do not have their own `this`**. They inherit it **lexically** from their enclosing context.

```js
const user = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // ❌ undefined, not "Alice"
  }
};
user.greet();
```

> Arrow functions should **not** be used as methods.

---

## 🔹 8. Lexical `this` (Enclosing Context)

```js
function outer() {
  const arrow = () => {
    console.log(this);
  };
  arrow();
}

const obj = { outer };
obj.outer(); // `this` is obj due to lexical scoping of arrow function
```

---

## 🔹 9. `this` in Nested Arrow Functions

Nested arrow functions **continue to inherit `this` from their outer (non-arrow) function**.

```js
const person = {
  name: 'Bob',
  outer() {
    const inner = () => {
      const innerMost = () => {
        console.log(this.name);
      };
      innerMost();
    };
    inner();
  }
};

person.outer(); // Bob
```

---

## 🔹 10. `this` in DOM Elements

When used in DOM event handlers, `this` refers to the **element the event is bound to**.

```html
<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById('myBtn');
  btn.addEventListener('click', function () {
    console.log(this); // <button> element
  });
</script>
```

> ⚠️ Using arrow functions here will not work as expected:

```js
btn.addEventListener('click', () => {
  console.log(this); // ❌ window, not button
});
```

---

## ✅ Summary Table

| Context                     | `this` Value                               |
| --------------------------- | ------------------------------------------ |
| Global scope                | Global object (`window`/`global`)          |
| Function (non-strict)       | Global object                              |
| Function (strict)           | `undefined`                                |
| Object method               | Object itself                              |
| `call` / `apply` / `bind`   | Explicitly set                             |
| Arrow function              | Lexical (inherited) `this`                 |
| DOM Event (normal function) | DOM element                                |
| DOM Event (arrow function)  | Lexical `this` (usually `window`)          |
| Nested arrow function       | Inherited from outermost non-arrow context |

---
