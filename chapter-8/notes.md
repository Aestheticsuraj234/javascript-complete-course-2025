## 📚 JavaScript Array Methods (with Examples)

### 🔁 **Mutator Methods** (Modify the original array)

1. **push()**

* Adds item(s) to the **end** of the array.

```js
const arr = [1, 2];
arr.push(3); // [1, 2, 3]
```

2. **pop()**

* Removes the **last** item and returns it.

```js
const arr = [1, 2, 3];
arr.pop(); // returns 3, arr is now [1, 2]
```

3. **shift()**

* Removes the **first** item and returns it.

```js
const arr = [1, 2, 3];
arr.shift(); // returns 1, arr is now [2, 3]
```

4. **unshift()**

* Adds item(s) to the **beginning** of the array.

```js
const arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
```


5. **splice(start, deleteCount, ...items)**

* Modifies the **original array**.
* Can **remove**, **replace**, or **insert** elements.

---

### ✅ 1. **Remove elements**

```js
const arr1 = [1, 2, 3, 4];
arr1.splice(1, 2); // removes 2 items from index 1 → [2, 3]
console.log(arr1); // [1, 4]
```

---

### 🔁 2. **Replace elements**

```js
const arr2 = [1, 2, 3, 4];
arr2.splice(1, 2, 9, 8); // remove 2 items from index 1 and add 9, 8
console.log(arr2); // [1, 9, 8, 4]
```

---

### ➕ 3. **Add elements (without deleting)**

```js
const arr3 = [1, 2, 3];
arr3.splice(1, 0, 5); // at index 1, remove 0, insert 5
console.log(arr3); // [1, 5, 2, 3]
```

---

### 🧪 4. **Remove all from a position**

```js
const arr4 = [1, 2, 3, 4, 5];
arr4.splice(2); // removes from index 2 to end
console.log(arr4); // [1, 2]
```


6. **sort(\[compareFn])**

* Sorts elements **in-place**.

```js
const arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]
```

7. **reverse()**

* Reverses the array **in-place**.

```js
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

---

### 🧪 **Accessor / Non-Mutating Methods**

8. **slice(start, end)**

* Returns a **shallow copy** of part of the array.

```js
const arr = [1, 2, 3];
arr.slice(0, 2); // [1, 2]
```

9. **concat()**

* Combines arrays, returns **new array**.

```js
const a = [1], b = [2];
const result = a.concat(b); // [1, 2]
```

10. **includes(value)**

* Checks if an array **contains** a value.

```js
[1, 2, 3].includes(2); // true
```

11. **indexOf(value)**

* Returns index of the value or `-1`.

```js
[1, 2, 3].indexOf(2); // 1
```

12. **join(separator)**

* Converts array to string.

```js
[1, 2, 3].join('-'); // "1-2-3"
```

---

### 🔄 **Iteration Methods**

13. **forEach(callback)**

* Executes function for each item.
* **No return value**.

```js
[1, 2].forEach(num => console.log(num));
```

14. **map(callback)**

* Returns **new array** of transformed elements.

```js
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

15. **filter(callback)**

* Returns **new array** with elements that pass condition.

```js
[1, 2, 3].filter(n => n > 1); // [2, 3]
```

16. **reduce(callback, initialValue)**

* Reduces array to a **single value**.

```js
[1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6
```

17. **find(callback)**

* Returns **first match**, or `undefined`.

```js
[1, 2, 3].find(n => n > 1); // 2
```

18. **findIndex(callback)**

* Returns **index** of first match, or `-1`.

```js
[1, 2, 3].findIndex(n => n > 1); // 1
```

19. **some(callback)**

* Returns `true` if **any** element passes the test.

```js
[1, 2].some(n => n > 1); // true
```

20. **every(callback)**

* Returns `true` if **all** elements pass the test.

```js
[2, 4].every(n => n % 2 === 0); // true
```


