### 🔁 **`for` Loop**

The `for` loop is used when the number of iterations is known in advance.

#### ✅ Syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // code to run in each iteration
}
```

#### ✅ Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0 1 2 3 4
}
```

#### ✅ How it works:

1. **Initialization**: Runs once before the loop starts.
2. **Condition**: Checked before each iteration; loop runs while this is `true`.
3. **Increment/Decrement**: Updates the loop counter after each iteration.

---

### 🔄 **`while` Loop**

The `while` loop is used when the number of iterations is **not known in advance**.

#### ✅ Syntax:

```javascript
while (condition) {
  // code to run
}
```

#### ✅ Example:

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0 1 2 3 4
  i++;
}
```

#### ✅ How it works:

* Checks the condition **before** every iteration.
* If `condition` is `true`, runs the code inside.
* Continues until `condition` becomes `false`.

---

### 🔁 `do...while` Loop

Similar to `while`, but guarantees the loop runs **at least once**.

#### ✅ Syntax:

```javascript
do {
  // code to run
} while (condition);
```

#### ✅ Example:

```javascript
let i = 0;
do {
  console.log(i); // Outputs: 0 even if condition is false initially
  i++;
} while (i < 5);
```

---

### 🧠 Quick Tips:

* Use `for` when you know how many times to loop.
* Use `while` or `do...while` when you don’t know the exact number of repetitions.
* Always ensure your loop has a condition that eventually becomes `false` to avoid **infinite loops**.
