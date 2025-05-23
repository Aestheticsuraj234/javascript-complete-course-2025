## 🔹 3. **`setTimeout()` & `setInterval()` in JavaScript**

---

### 🧠 What Are They?

* `setTimeout()` and `setInterval()` are **asynchronous timer functions** used to **schedule code execution** after a delay or at regular intervals.
* They are part of the **Web APIs** provided by the browser (or Node.js).

---

## ✅ `setTimeout()`

### 🔹 Syntax:

```js
let timeoutId = setTimeout(callback, delay, arg1, arg2, ...);
```

| Parameter     | Description                                           |
| ------------- | ----------------------------------------------------- |
| `callback`    | Function to execute                                   |
| `delay`       | Delay in **milliseconds** before running the function |
| `arg1...argN` | Optional arguments passed to the callback             |
| `timeoutId`   | ID used to cancel it with `clearTimeout()`            |

### 📦 Example:

```js
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

### 📌 With Parameters:

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greet, 1000, "Alice"); // Hello, Alice!
```

### 🔄 Canceling with `clearTimeout()`:

```js
let id = setTimeout(() => console.log("Will not run"), 2000);
clearTimeout(id);
```

---

## ✅ `setInterval()`

### 🔹 Syntax:

```js
let intervalId = setInterval(callback, delay, arg1, arg2, ...);
```

* Executes the `callback` **repeatedly** at every `delay` interval.
* Returns an `intervalId` which can be cleared using `clearInterval()`.

### 📦 Example:

```js
let count = 0;
let id = setInterval(() => {
  console.log(`Count: ${++count}`);
  if (count === 5) clearInterval(id);
}, 1000);
```

---

## 🚫 `clearTimeout()` & `clearInterval()`

### 🔹 Usage:

```js
clearTimeout(timeoutId);    // Cancels a timeout
clearInterval(intervalId);  // Cancels an interval
```

Used to **prevent the execution** of a scheduled timeout or **stop a recurring interval**.

---

## ⚠️ Execution Timing Notes

* The `delay` is **minimum wait time** — actual execution depends on the event loop.
* If the call stack is busy, the execution is **delayed**.
* **Minimum delay is \~4ms** for nested timers (in some browsers like Chrome).

```js
console.log("Start");
setTimeout(() => console.log("Timer"), 0); // Will still run after the current call stack
console.log("End");
```

Output:

```
Start
End
Timer
```

---

## 🔍 Advanced Usage

### 1. **Recursive `setTimeout` (Better than `setInterval` for precision):**

```js
function tick() {
  console.log("Tick");
  setTimeout(tick, 1000);
}
tick();
```

✔ Keeps consistent delay between executions, unlike `setInterval`, which does not account for callback execution time.

---

### 2. **Clearing Timer After User Interaction**

```js
let timer = setTimeout(() => {
  alert("You were inactive!");
}, 5000);

document.addEventListener("mousemove", () => {
  clearTimeout(timer);
});
```

---

## 🧠 `setTimeout` vs `setInterval`

| Feature          | `setTimeout()`                         | `setInterval()`                      |
| ---------------- | -------------------------------------- | ------------------------------------ |
| Runs once        | ✅ Yes                                  | ❌ No (repeats)                       |
| Delay respected? | ✅ Starts after delay                   | ❌ May overlap if callback is slow    |
| Control          | ✅ More control via recursion           | ❌ Harder to pause/resume dynamically |
| Use case         | One-time delay, animations, debouncing | Repeated actions, polling, clocks    |

---

## 🛠️ Best Practices

* ❌ Avoid long intervals — prefer recursive `setTimeout` for control.
* ✅ Always store the ID to clear it when needed.
* ✅ Clean up timers on component unmount (e.g., in React):

```js
useEffect(() => {
  const id = setTimeout(() => { /* something */ }, 1000);
  return () => clearTimeout(id);
}, []);
```

---

## 📚 Common Use Cases

* Showing/hiding notifications
* Debouncing or throttling events
* Polling APIs
* Countdown timers
* Animating step-by-step processes

---

## 🧪 Fun Challenge

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
```

**Output:**

```
6
6
6
6
6
```

Why? Because `var` is function-scoped. `i` becomes 6 before any timeout executes.
✅ Fix with `let` or IIFE:

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
```


