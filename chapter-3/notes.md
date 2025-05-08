## ✅ Chapter 3: Control Flow – `if-else`, `switch`, and `ternary` in JavaScript

---

### 🔹 1. `if`, `else if`, `else`

#### ✅ Syntax:

```js
if (condition1) {
  // Executes if condition1 is true
} else if (condition2) {
  // Executes if condition2 is true
} else {
  // Executes if none of the above conditions are true
}
```

#### ✅ How it works:

* JavaScript evaluates conditions from top to bottom.
* The **first truthy** condition gets executed; the rest are skipped.
* If no condition is met, the `else` block (if present) runs.

#### ✅ Example:

```js
let age = 18;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}
// Output: Teenager
```

#### 🔍 Important Notes:

* Conditions must return a **boolean** (`true` or `false`).
* Curly braces `{}` are optional for one-liners, but **recommended** for clarity.
* Can be **nested**, but avoid deeply nested `if-else` for readability.

#### ❗Common Pitfalls:

* Accidentally using `=` (assignment) instead of `==` or `===`.
* Over-nesting logic: prefer `switch` or functions when needed.

---

### 🔹 2. `switch` Statement

#### ✅ Syntax:

```js
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}
```

#### ✅ How it works:

* Evaluates `expression` once.
* Compares the result with each `case` (using **strict equality** `===`).
* If matched, runs the associated block until `break` or the end.
* `default` block runs if no match is found.

#### ✅ Example:

```js
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;
  case "apple":
    console.log("Apple is red");
    break;
  default:
    console.log("Unknown fruit");
}
// Output: Apple is red
```

#### 🔍 Important Notes:

* **Always use `break`** to avoid fall-through (unintended execution of next cases).
* `default` is **optional**, but good for handling unexpected input.

#### ❗Fall-through example:

```js
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
  case "B":
    console.log("Good");
  case "C":
    console.log("Average");
  default:
    console.log("Try again");
}
// All lines will execute from "Good" onwards due to missing `break`s
```

---

### 🔹 3. Ternary Operator (`? :`)

#### ✅ Syntax:

```js
condition ? expressionIfTrue : expressionIfFalse;
```

#### ✅ How it works:

* Used as a **shortcut for `if-else`**.
* Evaluates the `condition`.
* If true → returns `expressionIfTrue`.
* If false → returns `expressionIfFalse`.

#### ✅ Example:

```js
let age = 20;
let category = age >= 18 ? "Adult" : "Minor";
console.log(category); // Adult
```

#### 🔍 Use Cases:

* Quick assignments.
* Inline rendering in JSX.
* Conditionally returning values.

#### ⚠ Avoid when:

* Logic is complex or spans multiple lines.
* Nesting ternary operators (hard to read).

#### ❗Bad Example (nested ternaries):

```js
let score = 85;
let result = score >= 90 ? "A" : score >= 80 ? "B" : "C";
// Can be confusing to read
```

---

## 🔁 Comparison Summary

| Feature     | `if-else`                                    | `switch`                            | Ternary                        |
| ----------- | -------------------------------------------- | ----------------------------------- | ------------------------------ |
| Best for    | Multiple conditions                          | Comparing single value to constants | Simple conditional expressions |
| Syntax      | Verbose but flexible                         | Cleaner for many discrete cases     | Short, inline                  |
| Performance | Similar, switch may be faster for many cases | Similar                             | Same                           |
| Readability | Good for range-based checks                  | Good for equality checks            | Only for simple checks         |

---

## 🧠 Best Practices

1. **Use `if-else`** when dealing with:

   * Ranges (e.g., `if (age < 18)`)
   * Complex logic
   * Boolean flags

2. **Use `switch`** when:

   * Comparing a single variable against many fixed values

3. **Use ternary** for:

   * Simple true/false value decisions
   * Inline JSX rendering

