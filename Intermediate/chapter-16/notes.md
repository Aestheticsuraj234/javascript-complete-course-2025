## 🧠 Web Storage API Overview

JavaScript provides **Web Storage APIs** to store key-value pairs in the browser. The two main types are:

| Feature         | `localStorage`         | `sessionStorage`               |
| --------------- | ---------------------- | ------------------------------ |
| Lifespan        | Until manually deleted | Until tab/browser is closed    |
| Scope           | Per domain             | Per tab & per domain           |
| Storage Limit   | \~5-10 MB              | \~5 MB                         |
| Accessible From | Any tab on same origin | Only the tab it was created in |
| Persistent?     | Yes                    | No                             |

---

## 🔐 Syntax

Both storages use the same methods:

```javascript
// Set item
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");

// Get item
let value = localStorage.getItem("key");

// Remove item
localStorage.removeItem("key");

// Clear all
localStorage.clear();

// Get key by index
let key = localStorage.key(0);
```

📝 All data is stored as **strings**.

---

## 📌 Example Use Case

```javascript
// Store user info in localStorage
localStorage.setItem("username", "john_doe");

// Retrieve it later
const name = localStorage.getItem("username"); // "john_doe"
```

```javascript
// SessionStorage example: tracking session state
sessionStorage.setItem("isLoggedIn", "true");

// Automatically removed when tab is closed
```

---

## 🔄 JSON with Storage

Since storage stores **only strings**, use `JSON.stringify()` and `JSON.parse()` for objects or arrays:

```javascript
const user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

const data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Alice
```

---

## 🔒 Security & Best Practices

* ❗ **Never store sensitive data (passwords, tokens)** in localStorage/sessionStorage.
* 🕵️‍♂️ Data is accessible via JavaScript – vulnerable to **XSS attacks**.
* ✅ Always validate and sanitize user input.
* ✅ Clear data on logout (`localStorage.clear()`).
* 🔄 Use expiration logic manually if needed (e.g., save timestamp along with value).

---

## 📚 When to Use What?

| Use Case                              | Recommended Storage |
| ------------------------------------- | ------------------- |
| Persist user settings or theme        | `localStorage`      |
| Temporary state during a session/tab  | `sessionStorage`    |
| Cart items (persist between visits)   | `localStorage`      |
| Form data during a multi-step process | `sessionStorage`    |

---

## 🧪 Quick Debug Tip

You can inspect and modify localStorage/sessionStorage in:
**DevTools → Application Tab → Storage → Local/Session Storage**

---

## ✅ Summary

* `localStorage` = Long-term, persists across sessions.
* `sessionStorage` = Short-term, ends with tab/session.
* Stored as strings → use JSON for structured data.
* Don't store sensitive info.
* Easy to use for small client-side data tasks.


