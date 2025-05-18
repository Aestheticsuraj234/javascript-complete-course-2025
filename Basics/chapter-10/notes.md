## 📘 **1. Introduction to JavaScript Objects**

In JavaScript, **objects** are collections of key-value pairs.
Keys are always strings (or symbols), and values can be any type.

```js
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

---

## 🔨 **2. Ways to Create Objects**

### ✅ a) Object Literal (Most Common)

```js
const user = {
  name: "John",
  age: 30
};
```

### ✅ b) Using `new Object()`

```js
const user = new Object();
user.name = "John";
user.age = 30;
```

### ✅ d) `Object.create()`

Creates an object with the specified prototype.

```js
const proto = { greet() { console.log("Hi"); } };
const obj = Object.create(proto);
obj.greet(); // Hi
```

---

## 🧍‍♂️ **3. Singleton Object in JavaScript**

A **singleton** is an object that is created once and used globally across your code. It's useful when you want to ensure only one instance of an object.

### ✅ Using Object Literal

```js
const Config = {
  appName: "MyApp",
  version: "1.0.0"
};
```

### ✅ Singleton Using IIFE

```js
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { id: Date.now(), name: "Singleton" };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true ✅
```

---

## 🧾 **4. Accessing and Manipulating Object Properties**

### ✅ Dot Notation

```js
user.name = "Bob";
console.log(user.name); // Bob
```

### ✅ Bracket Notation (for dynamic or invalid keys)

```js
const key = "age";
console.log(user[key]); // 30
```

### ✅ Add New Property

```js
user.email = "bob@example.com";
```

### ✅ Delete Property

```js
delete user.age;
```

---

## 🛠️ **5. Useful Object Methods**

| Method                              | Description                   | Example                         |
| ----------------------------------- | ----------------------------- | ------------------------------- |
| `Object.keys(obj)`                  | Returns an array of keys      | `Object.keys(user)`             |
| `Object.values(obj)`                | Returns an array of values    | `Object.values(user)`           |
| `Object.entries(obj)`               | Returns key-value pairs       | `Object.entries(user)`          |
| `Object.assign(target, ...sources)` | Copies properties             | `Object.assign({}, obj1, obj2)` |
| `Object.freeze(obj)`                | Makes object immutable        | `Object.freeze(user)`           |
| `Object.seal(obj)`                  | Prevents adding/removing keys | `Object.seal(user)`             |
| `hasOwnProperty(key)`               | Checks own key                | `user.hasOwnProperty('name')`   |
| `Object.hasOwn(obj, key)`           | Same as above (modern)        | `Object.hasOwn(user, 'name')`   |

---

## 🧠 **6. Advanced Concepts**

### ✅ Computed Properties

```js
const key = "role";
const user = {
  name: "Tom",
  [key]: "Admin"
};
```

### ✅ Spread Operator `...`

```js
const userCopy = { ...user, age: 35 };
```

### ✅ Object Destructuring

```js
const { name, role } = user;
```

### ✅ Optional Chaining

```js
console.log(user?.address?.city);
```

### ✅ Nullish Coalescing

```js
console.log(user.age ?? "Not specified");
```

---

## 🪙 **7. Symbols as Keys**

Symbols are unique and prevent property name collisions.

```js
const id = Symbol("id");
const user = {
  name: "Tom",
  [id]: 101
};

console.log(user[id]); // 101
```

---

## 🧪 **8. Looping Over Objects**

### ✅ `for...in`

```js
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

> Use `hasOwnProperty` inside `for...in` to avoid inherited keys.

### ✅ `Object.entries()`

```js
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

---

## 📌 **9. Object Utility Examples**

### ✅ Cloning an Object (Shallow Copy)

```js
const clone = Object.assign({}, user);
// OR
const clone2 = { ...user };
```

### ✅ Deep Copy (for nested objects)

```js
const deepCopy = JSON.parse(JSON.stringify(nestedObj));
```

### ✅ Merging Objects

```js
const merged = { ...obj1, ...obj2 };
```

---

## 📚 Summary

* Objects store key-value pairs.
* Singleton ensures a single instance of an object.
* You can create objects using literals, constructors, or factory functions.
* Use built-in methods like `Object.keys`, `Object.entries`, `Object.freeze`, etc., for manipulation.
* Advanced features include symbols, destructuring, spread/rest, and optional chaining.

