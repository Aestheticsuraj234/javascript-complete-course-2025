# 🔄 Async / Await in JavaScript

---

## 🧠 What is `async/await`?

* `async/await` is **syntactic sugar over Promises**.
* It helps write **asynchronous code** that looks and behaves more like synchronous code.
* Introduced in **ES2017 (ES8)**.

---

## ✅ Basics

### 1. `async` Function

* Declares a function that will always return a **Promise**.

```js
async function myFunc() {
  return 'Hello';
}

myFunc().then(console.log); // Output: Hello
```

If you return a non-promise value, it's automatically wrapped in a resolved Promise.

### 2. `await` Keyword

* Can **only be used inside `async` functions**.
* Pauses execution of the function **until the Promise is resolved**.
* Returns the resolved value of the Promise.

```js
async function fetchData() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  console.log(data);
}
```

---

## ⚙ How It Works Under the Hood

```js
async function getData() {
  try {
    const result = await fetchData(); // Pauses here until Promise resolves
    return result;
  } catch (err) {
    console.error(err);
  }
}
```

The above is equivalent to:

```js
function getData() {
  return fetchData()
    .then(result => result)
    .catch(err => console.error(err));
}
```

---

## ⏳ Awaiting Multiple Promises

### ✅ Sequential (slower)

```js
const user = await getUser();
const posts = await getPosts(user.id);
```

### ✅ Parallel (faster)

```js
const [user, posts] = await Promise.all([getUser(), getPosts()]);
```

---

## 🧨 Error Handling

### With `try/catch`

```js
async function getUserData() {
  try {
    const res = await fetch('/user');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}
```

### For multiple awaits:

```js
try {
  const user = await getUser();
  const posts = await getPosts(user.id);
} catch (err) {
  console.error('Something went wrong', err);
}
```

---

## 🔁 Using `await` in Loops

Avoid using `await` inside `.forEach()` — it won’t wait!

### ❌ Wrong:

```js
[1, 2, 3].forEach(async (num) => {
  await doSomething(num);
});
```

### ✅ Correct:

```js
for (const num of [1, 2, 3]) {
  await doSomething(num);
}
```

---

## 🔄 Async IIFE (Immediately Invoked Function Expression)

Useful for top-level `await` before ES2022:

```js
(async () => {
  const data = await fetchData();
  console.log(data);
})();
```

---

## 🔝 Top-Level Await (ES2022+)

```js
const res = await fetch('/api'); // valid at module level
```

* Only available in **ES Modules**, not in CommonJS.

---

## 💡 Best Practices

* Use `async/await` for **readability** and **linear code flow**.
* Use `try/catch` to handle errors gracefully.
* Use `Promise.all()` for **concurrent tasks** when safe.
* Avoid blocking loops — use `map` with `Promise.all()` for parallel processing if needed.

---

## 🧪 Example: Full Flow

```js
async function getUserProfile(id) {
  try {
    const userRes = await fetch(`/api/users/${id}`);
    const user = await userRes.json();

    const postsRes = await fetch(`/api/users/${id}/posts`);
    const posts = await postsRes.json();

    return { user, posts };
  } catch (error) {
    console.error('Error fetching profile:', error);
  }
}
```

---

## ❓ Common Mistakes

| Mistake                                   | Why it's wrong               |
| ----------------------------------------- | ---------------------------- |
| Using `await` outside of `async`          | Throws SyntaxError           |
| Mixing `await` with `.then()` excessively | Redundant, loses readability |
| Not handling rejected Promises            | Will cause uncaught errors   |
| Using `await` in a loop unnecessarily     | Can lead to slow performance |

---

## 🔚 Summary

| Concept           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `async`           | Declares an async function that returns a Promise        |
| `await`           | Waits for the Promise to resolve before moving on        |
| `try/catch`       | Used for error handling inside async functions           |
| `Promise.all()`   | Allows concurrent execution of multiple async operations |
| Top-Level `await` | Available in ES Modules only                             |

