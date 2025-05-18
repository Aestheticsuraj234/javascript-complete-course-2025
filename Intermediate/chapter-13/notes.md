# 📘 JSON (JavaScript Object Notation) – Complete Notes

---

## 🔷 What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight **data interchange format** that is:

* Human-readable
* Easy for machines to parse and generate
* Language-independent (although it is based on a subset of JavaScript syntax)

### Example:

```json
{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "skills": ["JavaScript", "Python"],
  "address": {
    "city": "Delhi",
    "pincode": 110001
  }
}
```

---

## 🔷 Why JSON is not a part of JavaScript?

### 🔸 JSON is a **data format**, not a **language feature**:

* JSON is **inspired by JavaScript object literals** but is **not the same thing**.
* It has **stricter syntax** rules:

  * All keys **must be in double quotes**.
  * Only **primitive values**, arrays, or nested JSON objects allowed.
  * Cannot include functions, `undefined`, comments, or symbols.

### 🔸 JSON was made language-agnostic:

* Designed for data exchange **between languages**.
* Can be used in Python, Java, PHP, Ruby, etc.

📌 That’s why JSON is **not just a JavaScript thing**, even though it originated from JS.

---

## 🔷 Why do we need JSON in JavaScript?

### ✅ **Data Exchange with APIs**:

Most modern web applications communicate with backends using **HTTP requests** where data is sent/received in JSON format.

### ✅ **Storage & Configuration**:

* Used in config files (`package.json`)
* Storing data in `localStorage` or `sessionStorage` (which can only store strings)

### ✅ **Serialization & Deserialization**:

* Convert objects to strings (for storage or network transmission)
* Convert strings back to usable JS objects

---

## 🔷 JSON vs JavaScript Objects

| Feature    | JSON                                              | JS Object                                         |
| ---------- | ------------------------------------------------- | ------------------------------------------------- |
| Syntax     | Very strict                                       | Flexible                                          |
| Quotes     | Double quotes only                                | Single/double or no quotes for keys               |
| Data types | Only string, number, boolean, null, array, object | Can include functions, `undefined`, symbols, etc. |
| Usage      | Data exchange format                              | Programming logic & in-memory data                |

---

## 🔷 How to Use JSON in JavaScript

JavaScript provides a **built-in global `JSON` object** with two key methods:

---

### 🔶 `JSON.stringify()`

**Purpose:** Convert a JavaScript object → JSON string

#### ✅ Syntax:

```js
JSON.stringify(value, replacer?, space?)
```

#### ✅ Example:

```js
const obj = {
  name: "Alice",
  age: 25,
  isAdmin: false,
  skills: ["HTML", "CSS"]
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);
// Output: '{"name":"Alice","age":25,"isAdmin":false,"skills":["HTML","CSS"]}'
```

#### ✅ Optional Parameters:

* **`replacer`**: A function or array to filter properties.

  ```js
  JSON.stringify(obj, ["name", "age"]);
  // Output: '{"name":"Alice","age":25}'
  ```
* **`space`**: Adds indentation for readability (used in config files).

  ```js
  JSON.stringify(obj, null, 2);
  ```

#### ⚠️ Limitations:

* `undefined`, functions, and symbols are **omitted**
* `Date` objects become strings
* Circular references cause errors

---

### 🔶 `JSON.parse()`

**Purpose:** Convert a JSON string → JavaScript object

#### ✅ Syntax:

```js
JSON.parse(text, reviver?)
```

#### ✅ Example:

```js
const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // "Alice"
```

#### ✅ With `reviver`:

A function that transforms the results during parsing.

```js
const obj = JSON.parse(jsonString, (key, value) => {
  if (key === "age") return value + 1;
  return value;
});
```

#### ⚠️ Caveats:

* The string **must be valid JSON**
* Parsing invalid JSON will throw a **SyntaxError**
* All keys must be double-quoted

---

## 🔷 Practical Use Cases of JSON in JS

### ✅ 1. API Calls

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => {
    console.log(data); // Already parsed to JS object
  });
```

### ✅ 2. LocalStorage

```js
const user = { name: "John", age: 30 };

// Store as string
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and parse back
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // John
```

### ✅ 3. Config Files

```json
// package.json or any config.json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## 🔷 Advanced Tips

### ✅ Handle Dates:

```js
const obj = { date: new Date() };
const json = JSON.stringify(obj);
console.log(json); // Date as ISO string

const parsed = JSON.parse(json);
parsed.date = new Date(parsed.date);
```

### ✅ Avoid Circular References:

```js
const a = {};
a.self = a;

JSON.stringify(a); // ❌ Throws error: Converting circular structure to JSON
```

### ✅ Pretty Printing:

```js
console.log(JSON.stringify(obj, null, 4));
```

---

## 🔚 Summary

| Operation             | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `JSON.stringify(obj)` | Convert JS object → JSON string                           |
| `JSON.parse(string)`  | Convert JSON string → JS object                           |
| JSON is               | A lightweight format for data exchange                    |
| Syntax Rules          | Double-quoted keys & strings, no functions or `undefined` |

