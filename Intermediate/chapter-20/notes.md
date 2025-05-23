## 🔹 **Promises in JavaScript**

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.

### 🔸 Why Promises?

* To avoid **callback hell**.
* To write **cleaner and more manageable async code**.

---

## 🔹 Promise States

A promise has 3 states:

1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

---

## 🔹 Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
  // Do some async task here...
  
  const success = true;

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Something went wrong!");
  }
});
```

* `resolve()` — call this when the operation is successful.
* `reject()` — call this when the operation fails.

---

## 🔹 Consuming a Promise

### ✅ `.then()` — for success

### ❌ `.catch()` — for error

### 🔄 `.finally()` — always runs (optional)

```js
myPromise
  .then((result) => {
    console.log("Success:", result); // "Success: Task completed!"
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

---

## 🔹 Example 1: Simulating Async Task with `setTimeout`

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const dataAvailable = true;

    if (dataAvailable) {
      resolve("Data loaded successfully");
    } else {
      reject("Failed to load data");
    }
  }, 2000);
});

fetchData
  .then((data) => {
    console.log("Result:", data);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
```

---

## 🔹 Chaining `.then()` Calls

```js
const multiplyByTwo = new Promise((resolve) => {
  setTimeout(() => resolve(5), 1000);
});

multiplyByTwo
  .then((num) => {
    console.log("Step 1:", num); // 5
    return num * 2;
  })
  .then((num) => {
    console.log("Step 2:", num); // 10
    return num * 2;
  })
  .then((num) => {
    console.log("Step 3:", num); // 20
  })
  .catch((err) => {
    console.error("Error:", err);
  });
```

---

## 🔹 Error Handling in Chains

If any `.then()` throws an error or a `reject()` occurs:

```js
const brokenPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Something broke!"), 1000);
});

brokenPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Caught error:", err); // "Caught error: Something broke!"
  });
```

---

## 🔹 Summary

| Method       | Purpose                            |
| ------------ | ---------------------------------- |
| `.then()`    | Handle fulfilled result            |
| `.catch()`   | Handle rejected result             |
| `.finally()` | Runs after `.then()` or `.catch()` |

