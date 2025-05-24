# 📘 JavaScript Fetch API – In-Depth Notes

---

## 🧠 What is the Fetch API?

The **Fetch API** provides a modern, promise-based way to make HTTP requests in the browser.

```js
fetch(url, options)
```

It replaces older approaches like `XMLHttpRequest` with a cleaner and more powerful API.

---

## 🔧 Syntax

```js
fetch(url, {
  method: "GET" | "POST" | "PUT" | "DELETE" | ...,
  headers: {
    "Content-Type": "application/json",
    ...
  },
  body: JSON.stringify(data), // for POST/PUT
  mode: "cors" | "no-cors" | "same-origin",
  credentials: "include" | "same-origin" | "omit",
})
```

---

## ✅ Making a Basic GET Request

```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error("Fetch error:", err));
```

---

## 🧾 Response Object – Properties

```js
fetch("https://api.example.com/data")
  .then(res => {
    console.log(res.status);       // e.g., 200
    console.log(res.ok);           // true if status is 200–299
    console.log(res.statusText);   // e.g., "OK"
    console.log(res.headers);      // Headers object
    return res.json();             // or res.text(), res.blob(), etc.
  });
```

---

## 🛠 Common Methods on `Response`

* `res.json()` → Parse JSON body
* `res.text()` → Parse plain text
* `res.blob()` → Parse binary data
* `res.formData()` → Parse form data
* `res.arrayBuffer()` → Parse raw data

---

## 📤 Making a POST Request

```js
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com"
  })
})
  .then(res => res.json())
  .then(data => console.log("Created:", data))
  .catch(err => console.error("Error:", err));
```

---

## 🔐 Handling Authentication

### Using Bearer Token

```js
fetch("https://api.example.com/private", {
  headers: {
    "Authorization": "Bearer YOUR_TOKEN_HERE"
  }
});
```

### Sending Cookies

```js
fetch("https://example.com/api", {
  credentials: "include" // or "same-origin"
});
```

---

## ⚠️ Error Handling

Fetch only rejects the promise for **network errors**. Even a 404/500 returns a resolved promise!

```js
fetch("https://api.example.com/data")
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Caught error:", err));
```

---

## 🧪 AbortController – Canceling a Fetch Request

```js
const controller = new AbortController();
const signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === "AbortError") {
      console.log("Request was aborted");
    } else {
      console.error(err);
    }
  });

setTimeout(() => controller.abort(), 1000); // Cancel after 1s
```

---

## 🧾 Headers Object

```js
const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer xyz");

fetch(url, { headers });
```

You can also check or loop through headers:

```js
fetch(url)
  .then(res => {
    for (let [key, value] of res.headers.entries()) {
      console.log(`${key}: ${value}`);
    }
  });
```

---

## 🌐 CORS – Cross-Origin Requests

If you're calling APIs from different origins, handle CORS properly:

### Server-Side Must Include:

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST
```

### In Fetch:

```js
fetch("https://another-origin.com/api", {
  mode: "cors"
});
```

---

## 📄 Uploading Files with `FormData`

```js
const formData = new FormData();
formData.append("avatar", fileInput.files[0]);

fetch("/upload", {
  method: "POST",
  body: formData
});
```

⚠️ No need to set `Content-Type` manually; `FormData` sets it for you.

---

## 🧵 Sequential vs Parallel Fetch

### Sequential (waits for each one)

```js
const urls = ["url1", "url2"];
for (let url of urls) {
  const res = await fetch(url);
  const data = await res.json();
}
```

### Parallel (faster)

```js
const urls = ["url1", "url2"];
const responses = await Promise.all(urls.map(url => fetch(url)));
const data = await Promise.all(responses.map(res => res.json()));
```

---

## 🧰 Advanced: Custom Timeout Wrapper

```js
function fetchWithTimeout(url, options, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    )
  ]);
}
```

---

## 🧑‍🔬 Real World Use Case – Login

```js
async function login(email, password) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message || "Login failed");
  }

  return res.json();
}
```

---

## 🧠 Summary

| Concept                              | Key Point                      |
| ------------------------------------ | ------------------------------ |
| Fetch returns Promise                | Use `.then()` or `async/await` |
| `.ok` and `.status`                  | Check manually for 4xx/5xx     |
| `.json()`, `.text()`                 | Read different body types      |
| `POST` requires `headers` and `body` | JSON payload                   |
| AbortController                      | Cancel ongoing requests        |
| FormData                             | Upload files easily            |
| CORS                                 | Needs server-side setup        |
| Authentication                       | Use headers or credentials     |

---

## 📚 Related Topics to Learn Next

* Axios (Fetch alternative with more features)
* HTTP status codes
* CORS policies and browser security
* WebSockets (for real-time)
* GraphQL with fetch

