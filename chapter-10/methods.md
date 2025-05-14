## 🔑 1. `Object.keys(obj)`

### ➤ What it does:

Returns an array of **all the keys** in the object.

### ✅ Example:

```js
const user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); 
// Output: ["name", "age"]
```

---

## 🔑 2. `Object.values(obj)`

### ➤ What it does:

Returns an array of **all the values** in the object.

### ✅ Example:

```js
const user = { name: "Alice", age: 25 };
console.log(Object.values(user)); 
// Output: ["Alice", 25]
```

---

## 🔑 3. `Object.entries(obj)`

### ➤ What it does:

Returns an array of **\[key, value] pairs**.

### ✅ Example:

```js
const user = { name: "Alice", age: 25 };
console.log(Object.entries(user)); 
// Output: [["name", "Alice"], ["age", 25]]
```

> Useful for looping:

```js
for (const [key, value] of Object.entries(user)) {
  console.log(`${key} = ${value}`);
}
```

---

## 🔑 4. `Object.assign(target, ...sources)`

### ➤ What it does:

**Copies properties** from one or more source objects into the target object.

### ✅ Example:

```js
const a = { x: 1 };
const b = { y: 2 };
const c = Object.assign({}, a, b);

console.log(c); 
// Output: { x: 1, y: 2 }
```

> It **modifies** the target object.

---

## 🔑 5. `Object.freeze(obj)`

### ➤ What it does:

**Freezes** the object. You can't change, add, or delete properties.

### ✅ Example:

```js
const settings = { theme: "dark" };
Object.freeze(settings);

settings.theme = "light"; // ❌ Won’t work
console.log(settings.theme); // Output: "dark"
```

---

## 🔑 6. `Object.hasOwn(obj, key)` (ES2022+)

### ➤ What it does:

Returns `true` if the object has the **specified key (own property)**.

### ✅ Example:

```js
const user = { name: "Bob" };
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "age")); // false
```

> It's a modern and safer version of `obj.hasOwnProperty(key)`.

---

## 📝 Summary Table

| Method             | Purpose                          | Example Output                     |
| ------------------ | -------------------------------- | ---------------------------------- |
| `Object.keys()`    | Get all keys                     | `["name", "age"]`                  |
| `Object.values()`  | Get all values                   | `["Alice", 25]`                    |
| `Object.entries()` | Get key-value pairs              | `[["name", "Alice"], ["age", 25]]` |
| `Object.assign()`  | Copy/merge objects               | `{ x: 1, y: 2 }`                   |
| `Object.freeze()`  | Make object read-only            | `{ theme: "dark" }` (unchangeable) |
| `Object.hasOwn()`  | Check if a key exists (own prop) | `true / false`                     |

---
