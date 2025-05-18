## 🔹 Core JavaScript Array Concepts

### 1. **What is an Array?**

* A data structure used to store multiple values in a single variable.
* Ordered and indexed (starts from index `0`).
* Can hold elements of **any data type**, including other arrays.

---

### 2. **Declaring Arrays**

```js
let arr1 = [1, 2, 3]; // most common
let arr2 = new Array(1, 2, 3); // less common
let emptyArr = []; // empty array
```

---

### 3. **Accessing Array Elements**

```js
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // 'apple'
console.log(fruits[2]); // 'cherry'
```

---

### 4. **Modifying Elements**

```js
fruits[1] = 'mango'; // change 'banana' to 'mango'
```

---

### 5. **Array Length**

```js
console.log(fruits.length); // total number of items
```

---

### 6. **Indexing Rules**

* First element is at index `0`.
* Last element is at `array.length - 1`.
* If you access an index that doesn’t exist, it returns `undefined`.

---

### 7. **Arrays Are Mutable**

```js
let a = [1, 2];
let b = a;
b[0] = 99;

console.log(a); // [99, 2] — same reference!
```

Use spread to copy:

```js
let c = [...a]; // independent copy
```

---

### 8. **Holes in Arrays (Sparse Arrays)**

```js
let arr = [1, , 3]; // index 1 is a "hole"
console.log(arr[1]); // undefined
```

---

### 9. **Arrays Can Contain Mixed Types**

```js
let mixed = [1, 'hello', true, null, [5, 6]];
```

---

### 10. **Multidimensional Arrays**

```js
let matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[1][1]); // 4
```
