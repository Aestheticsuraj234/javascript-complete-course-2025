## 🧠 Chapter-2 Core Concepts

### 🔸 **Operand**

> The **values** on which an operator performs actions.

For example, in:

```js
5 + 3
```

* `5` and `3` are **operands**
* `+` is the **operator**

---

### 🔸 **Operator**

> A **symbol** that performs an operation on operands.

In the example above:

* `+` adds the two operands.

---

### 🔸 **Operation / Result / Value**

> The **output or result** produced after applying an operator to the operands.

For:

```js
5 + 3
```

* The **operation** is addition.
* The **result (value)** is `8`.



## 🧠 **1. Arithmetic Operators**

Used to perform mathematical operations.

| Operator | Name                | Example  | Result      |
| -------- | ------------------- | -------- | ----------- |
| `+`      | Addition            | `5 + 2`  | `7`         |
| `-`      | Subtraction         | `5 - 2`  | `3`         |
| `*`      | Multiplication      | `5 * 2`  | `10`        |
| `/`      | Division            | `5 / 2`  | `2.5`       |
| `%`      | Modulus (Remainder) | `5 % 2`  | `1`         |
| `**`     | Exponentiation      | `2 ** 3` | `8`         |
| `++`     | Increment           | `a++`    | `a = a + 1` |
| `--`     | Decrement           | `a--`    | `a = a - 1` |

---

## 🧮 **2. Assignment Operators**

Used to assign values to variables.

| Operator | Description         | Example   | Equivalent to |
| -------- | ------------------- | --------- | ------------- |
| `=`      | Assignment          | `x = 5`   | `x = 5`       |
| `+=`     | Add and assign      | `x += 2`  | `x = x + 2`   |
| `-=`     | Subtract and assign | `x -= 2`  | `x = x - 2`   |
| `*=`     | Multiply and assign | `x *= 2`  | `x = x * 2`   |
| `/=`     | Divide and assign   | `x /= 2`  | `x = x / 2`   |
| `%=`     | Modulo and assign   | `x %= 2`  | `x = x % 2`   |
| `**=`    | Exponent and assign | `x **= 2` | `x = x ** 2`  |

---

## 🧾 **3. Comparison Operators**

Used to compare two values and return a boolean.

| Operator | Description              | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `==`     | Equal to (loose)         | `5 == '5'`  | `true`  |
| `===`    | Strict equal to          | `5 === '5'` | `false` |
| `!=`     | Not equal to (loose)     | `5 != '5'`  | `false` |
| `!==`    | Strict not equal to      | `5 !== '5'` | `true`  |
| `>`      | Greater than             | `5 > 3`     | `true`  |
| `<`      | Less than                | `5 < 3`     | `false` |
| `>=`     | Greater than or equal to | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal to    | `3 <= 5`    | `true`  |

---

## 🔗 **4. Logical Operators**

Used to combine multiple conditions.

| Operator | Name | Description           | Example                 |                              |        |   |                |
| -------- | ---- | --------------------- | ----------------------- | ---------------------------- | ------ | - | -------------- |
| `&&`     | AND  | True if both are true | `true && false → false` |                              |        |   |                |
| `       |      | \`                    | OR                      | True if at least one is true | \`true |   | false → true\` |
| `!`      | NOT  | Inverts the value     | `!true → false`         |                              |        |   |                |

---


## 🔀 **5. Ternary Operator**

Short form of if-else.

```js
condition ? exprIfTrue : exprIfFalse
```

**Example:**

```js
let age = 20;
let msg = age >= 18 ? "Adult" : "Minor";
```

---

## 🔤 **6. String Operators**

| Operator | Description       | Example             | Result            |
| -------- | ----------------- | ------------------- | ----------------- |
| `+`      | Concatenation     | `"Hello" + "World"` | `"HelloWorld"`    |
| `+=`     | Append and assign | `msg += "!"`        | `msg = msg + "!"` |

---

## 🔍 **7. Type Operators**

| Operator     | Description                                 | Example                   |
| ------------ | ------------------------------------------- | ------------------------- |
| `typeof`     | Returns the data type                       | `typeof 123` → `"number"` |
| `instanceof` | Checks if object is instance of constructor | `obj instanceof Array`    |


