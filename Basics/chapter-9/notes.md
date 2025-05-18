## 🔤 1. What is a String in JavaScript?

A **string** is a **primitive data type** used to represent text. Strings are **immutable**, meaning once created, their content **cannot be changed**—any operation that seems to modify a string returns a **new string**.

---

## 🛠 2. How to Create Strings

```js
let str1 = 'Hello';      // Single quotes
let str2 = "World";      // Double quotes
let str3 = `Hello ${str2}`; // Template literals (backticks)
```

### ✅ Best Practice

Use **template literals (\`)** when you need interpolation or multi-line strings.

```js
let name = "John";
let greeting = `Hi, ${name}!`;
```

---

## 🔁 3. Strings are Immutable

```js
let str = "Hello";
str[0] = 'Y';      // ❌ Doesn't change the string
console.log(str);  // "Hello"
```

---

## 📏 4. String Properties

* **`length`** – returns the number of characters in a string.

```js
let text = "JavaScript";
console.log(text.length);  // 10
```

---

## 🧰 5. Common String Methods (at least 10+)

---

### 1. `charAt(index)`

Returns the character at the specified index.

```js
"JavaScript".charAt(4);  // 'S'
```

---

### 2. `charCodeAt(index)`

Returns the Unicode of the character at a given index.

```js
"A".charCodeAt(0);  // 65
```

---

### 3. `slice(start, end?)`

Extracts a section of a string and returns it as a new string.

```js
"Hello World".slice(0, 5);  // "Hello"
"Hello World".slice(-5);    // "World"
```

---

### 4. `substring(start, end)`

Similar to `slice()` but **doesn't support negative indices**.

```js
"JavaScript".substring(4, 10); // "Script"
```

---

### 5. `substr(start, length)`

Extracts a substring with a given length (deprecated, but still used).

```js
"JavaScript".substr(4, 6);  // "Script"
```

---

### 6. `toUpperCase()` / `toLowerCase()`

Converts the string to uppercase or lowercase.

```js
"hello".toUpperCase();  // "HELLO"
"HELLO".toLowerCase();  // "hello"
```

---

### 7. `includes(substring)`

Returns `true` if the string contains the substring.

```js
"JavaScript".includes("Script");  // true
```

---

### 8. `startsWith()` / `endsWith()`

Checks whether the string starts or ends with the given substring.

```js
"JavaScript".startsWith("Java");  // true
"JavaScript".endsWith("Script");  // true
```

---

### 9. `indexOf()` / `lastIndexOf()`

Returns the position of the first/last occurrence of a value.

```js
"banana".indexOf("a");      // 1
"banana".lastIndexOf("a");  // 5
```

---

### 10. `replace(searchValue, newValue)`

Replaces the first match by default (use regex with `g` flag for all).

```js
"apple banana apple".replace("apple", "orange"); // "orange banana apple"
"apple banana apple".replace(/apple/g, "orange"); // "orange banana orange"
```

---

### 11. `trim()` / `trimStart()` / `trimEnd()`

Removes whitespace from both ends of a string.

```js
"  hello world  ".trim();     // "hello world"
"  hello world  ".trimStart(); // "hello world  "
```

---

### 12. `split(separator, limit?)`

Splits a string into an array based on a separator.

```js
"red,green,blue".split(","); // ["red", "green", "blue"]
```

---

### 13. `repeat(n)`

Repeats the string `n` times.

```js
"Hi ".repeat(3);  // "Hi Hi Hi "
```

---

### 14. `padStart(targetLength, padString)` / `padEnd(...)`

Pads the string to a certain length.

```js
"5".padStart(3, "0");  // "005"
"5".padEnd(3, "*");    // "5**"
```

---

### 15. `concat(...)`

Joins strings together (less used today in favor of `+` or template literals).

```js
"Hello".concat(" ", "World"); // "Hello World"
```

---

## 🧠 6. String Internals & Unicode

* JavaScript uses **UTF-16 encoding**.
* Characters outside the Basic Multilingual Plane (BMP), like emojis, are encoded using **surrogate pairs**.

```js
"😊".length; // 2 – it's actually two UTF-16 code units
```

Use `.codePointAt()` and `for...of` to handle such cases correctly.

---

## 🧪 7. Useful Tips & Gotchas

### Checking for Empty String

```js
if (str === "") // true for an empty string
```

### Comparing Strings

```js
"apple" < "banana"  // true, lexicographic order
```

### String to Array to Modify Characters (workaround for immutability)

```js
let str = "hello";
let arr = str.split("");
arr[0] = "H";
str = arr.join(""); // "Hello"
```

---

## 📚 8. Real-World Use Cases

* **Sanitizing user input**: `.trim()`, `.toLowerCase()`
* **Creating slugs**: `.toLowerCase().replace(/\s+/g, '-')`
* **Keyword search**: `.includes()`, `.indexOf()`
* **Formatting UI text**: `.padStart()`, `.repeat()`

---

## 🔚 Summary Table

| Method          | Purpose                         |
| --------------- | ------------------------------- |
| `charAt()`      | Get character at index          |
| `slice()`       | Extract substring               |
| `substring()`   | Substring (no negative indices) |
| `toUpperCase()` | Convert to uppercase            |
| `includes()`    | Check if substring exists       |
| `startsWith()`  | Begins with substring?          |
| `replace()`     | Replace part of string          |
| `trim()`        | Remove whitespace               |
| `split()`       | Convert to array                |
| `repeat()`      | Repeat string                   |
| `padStart()`    | Left-pad the string             |
| `concat()`      | Combine multiple strings        |

