## 🧮 JavaScript Numbers – Complete Notes

### 🔹 1. **Basics of Numbers in JavaScript**

* JavaScript has **only one number type**: `Number` (IEEE 754 double-precision 64-bit binary format).
* Numbers can be:

  * **Integers:** `42`
  * **Floats (decimals):** `3.14`
  * **Scientific notation:** `1.5e3` (i.e., 1500)

```js
let num1 = 10;
let num2 = 3.14;
let sci = 2.5e6;
```

---

### 🔹 2. **Special Number Values**

| Value                     | Description                            |
| ------------------------- | -------------------------------------- |
| `Infinity`                | Larger than any other number           |
| `-Infinity`               | Smaller than any other number          |
| `NaN`                     | "Not-a-Number" (invalid number result) |
| `Number.MAX_VALUE`        | Largest possible number                |
| `Number.MIN_VALUE`        | Smallest possible number > 0           |
| `Number.MAX_SAFE_INTEGER` | `2^53 - 1` (largest safe integer)      |
| `Number.MIN_SAFE_INTEGER` | `-(2^53 - 1)`                          |

```js
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log("abc" * 2);   // NaN
```

---

### 🔹 3. **Number Conversion**

* `Number(value)` – Converts to number
* `parseInt(value)` – Parses integer from string
* `parseFloat(value)` – Parses float from string


```js
Number("42");         // 42
parseInt("42px");     // 42
parseFloat("3.14abc") // 3.14
+"123";               // 123
```

---

### 🔹 4. **Checking Numbers**

```js
isNaN(NaN);             // true
Number.isNaN(NaN);      // true
Number.isNaN("abc");    // false

isFinite(100);          // true
Number.isFinite(100);   // true
Number.isFinite("100"); // false

Number.isInteger(42);         // true
Number.isSafeInteger(9007199254740991); // true
```

---

### 🔹 5. **Number Methods**

| Method | Description |
| ------ | ----------- |

#### 🔸 `toFixed(n)`

* Returns a string with `n` digits after the decimal

```js
let n = 3.14159;
n.toFixed(2);  // "3.14"
```

#### 🔸 `toPrecision(n)`

* Returns a string with a total of `n` significant digits

```js
let n = 123.456;
n.toPrecision(4); // "123.5"
```

#### 🔸 `toExponential(n)`

* Converts to exponential notation

```js
let n = 12345;
n.toExponential(2); // "1.23e+4"
```

#### 🔸 `toString(base)`

* Converts number to string in given base (2 to 36)

```js
(255).toString(2);  // "11111111"
(255).toString(16); // "ff"
```

#### 🔸 `valueOf()`

* Returns the primitive value of a number object

```js
let n = new Number(5);
n.valueOf(); // 5
```

---

### 🔹 6. **Math Methods (commonly used)**

```js
Math.round(4.7);      // 5
Math.floor(4.7);      // 4
Math.ceil(4.1);       // 5
Math.trunc(4.9);      // 4
Math.abs(-7);         // 7
Math.sqrt(16);        // 4
Math.pow(2, 3);       // 8
Math.random();        // 0 <= x < 1
Math.min(1, 3, -5);   // -5
Math.max(1, 3, -5);   // 3
```

---

### 🔹 7. **BigInt (for large integers)**

* Used when numbers exceed `2^53 - 1`

```js
const big = 1234567890123456789012345678901234567890n;
typeof big; // "bigint"
```

---

### 🔹 8. **Common Issues with Numbers**

#### Floating Point Precision

```js
0.1 + 0.2 === 0.3; // false
```

> Use `Number.EPSILON` to compare safely:

```js
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON; // true
```

---

### 🔹 9. **Useful Constants**

```js
Number.EPSILON             // Smallest difference between 1 and next number
Number.MAX_SAFE_INTEGER    // 9007199254740991
Number.MIN_SAFE_INTEGER    // -9007199254740991
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.NaN
```

---

## ✅ Summary

| Task                      | Method / Property                  |
| ------------------------- | ---------------------------------- |
| Check NaN                 | `isNaN()`, `Number.isNaN()`        |
| Check finite number       | `Number.isFinite()`                |
| Convert to number         | `Number()`, `+value`, `parseInt()` |
| Fix decimal places        | `.toFixed(n)`                      |
| Format significant digits | `.toPrecision(n)`                  |
| Convert to base           | `.toString(base)`                  |
| Random number             | `Math.random()`                    |
| Handle large integers     | `BigInt`                           |

