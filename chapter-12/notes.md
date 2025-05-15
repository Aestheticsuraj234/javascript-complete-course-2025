## 📆 JavaScript Dates – In-Depth Notes

---

### 🔹 1. **Creating Dates**

JavaScript uses the `Date` object to work with dates and times.

```js
let now = new Date();                 // Current date and time
let date1 = new Date("2025-05-15");  // From ISO date string
let date2 = new Date(2025, 4, 15);   // Year, Month (0-based), Day → May 15, 2025
let date3 = new Date(2025, 4, 15, 12, 30, 0); // + hours, minutes, seconds
let date4 = new Date(0);             // Unix epoch → Jan 1, 1970 UTC
let date5 = new Date(1000 * 60 * 60); // 1 hour after epoch
```

> Note: **Months are 0-indexed** (January = 0, December = 11)

---

### 🔹 2. **Date Internals: Timestamps**

* Dates are stored as **milliseconds since Unix Epoch**: Jan 1, 1970 UTC

```js
let timestamp = Date.now();  // Current timestamp in ms
let d = new Date(timestamp); // Convert back to Date
```

---

### 🔹 3. **Get Methods**

| Method                | Description                    |
| --------------------- | ------------------------------ |
| `getFullYear()`       | Year (4-digit)                 |
| `getMonth()`          | Month (0–11)                   |
| `getDate()`           | Day of the month (1–31)        |
| `getDay()`            | Day of the week (0–6, Sun = 0) |
| `getHours()`          | Hour (0–23)                    |
| `getMinutes()`        | Minutes (0–59)                 |
| `getSeconds()`        | Seconds (0–59)                 |
| `getMilliseconds()`   | Milliseconds (0–999)           |
| `getTime()`           | Timestamp (ms since epoch)     |
| `getTimezoneOffset()` | Minutes offset from UTC        |
| `toISOString()`       | ISO 8601 string in UTC         |
| `toDateString()`      | Human-readable date string     |
| `toTimeString()`      | Human-readable time string     |
| `toLocaleString()`    | Local date and time string     |

```js
let d = new Date("2025-05-15T10:30:00");
d.getFullYear();      // 2025
d.getMonth();         // 4 (May)
d.getDate();          // 15
d.getDay();           // 4 (Thursday)
```

---

### 🔹 4. **Set Methods**

| Method                | Description             |
| --------------------- | ----------------------- |
| `setFullYear(y)`      | Set year                |
| `setMonth(m)`         | Set month (0–11)        |
| `setDate(d)`          | Set day of month        |
| `setHours(h)`         | Set hour                |
| `setMinutes(m)`       | Set minutes             |
| `setSeconds(s)`       | Set seconds             |
| `setMilliseconds(ms)` | Set milliseconds        |
| `setTime(ms)`         | Set time from timestamp |

```js
let d = new Date();
d.setFullYear(2026);
d.setMonth(11); // December
d.setDate(25);  // 25th
```

---

### 🔹 5. **Parsing Dates**

| Method            | Description                       |
| ----------------- | --------------------------------- |
| `Date.parse(str)` | Parses date string → timestamp    |
| `new Date(str)`   | Also parses ISO-like date strings |

```js
Date.parse("2025-05-15");  // Returns timestamp
new Date("2025-05-15");    // Valid date object
```

> Best to use **ISO 8601 format** (`YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ssZ`) for cross-browser compatibility.

---

### 🔹 6. **Formatting Dates**

| Method                 | Description                    |
| ---------------------- | ------------------------------ |
| `toDateString()`       | Returns just the date part     |
| `toTimeString()`       | Returns just the time part     |
| `toISOString()`        | Returns UTC time in ISO format |
| `toLocaleDateString()` | Returns date in local format   |
| `toLocaleTimeString()` | Returns time in local format   |
| `toLocaleString()`     | Full localized date and time   |

```js
let d = new Date();
d.toISOString();        // "2025-05-15T12:30:00.000Z"
d.toLocaleDateString(); // e.g., "5/15/2025" (US)
```

---

### 🔹 7. **Date Comparison**

```js
let d1 = new Date("2025-05-15");
let d2 = new Date("2025-05-20");

d1 > d2     // false
d1.getTime() === d2.getTime(); // false
```

You can directly compare Date objects using `>` `<` `===`, but using `.getTime()` is safer for equality.

---

### 🔹 8. **Date Arithmetic**

You can **add/subtract** using timestamps:

```js
let d = new Date();
let tomorrow = new Date(d.getTime() + 24 * 60 * 60 * 1000); // add 1 day
let lastWeek = new Date(d.getTime() - 7 * 24 * 60 * 60 * 1000); // subtract 7 days
```

Or manipulate with `.setDate()`, `.setMonth()` etc.:

```js
let d = new Date("2025-05-15");
d.setDate(d.getDate() + 5); // Adds 5 days
```

---

### 🔹 9. **Working with Timezones**

JavaScript `Date` is based on **local time**, but you can get UTC components:

```js
d.getUTCFullYear()
d.getUTCHours()
```

> To convert between timezones, use libraries like **Luxon**, **date-fns-tz**, or **moment-timezone**.

---

### 🔹 10. **International Formatting with `Intl.DateTimeFormat`**

```js
let formatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "Asia/Kolkata"
});

formatter.format(new Date());
// Example: "Thursday, May 15, 2025 at 6:00 PM"
```

---

### 🔹 11. **Libraries to Handle Dates**

* **[date-fns](https://date-fns.org/):** Functional, modular, lightweight
* **[Luxon](https://moment.github.io/luxon):** Powerful, modern alternative to Moment.js
* **[Day.js](https://day.js.org/):** Small and Moment-compatible
* **[Moment.js](https://momentjs.com/):** Popular but now legacy (not recommended for new projects)

---

### ✅ Common Use Cases

| Task                      | How to Do It                            |
| ------------------------- | --------------------------------------- |
| Get current timestamp     | `Date.now()`                            |
| Convert timestamp to date | `new Date(ms)`                          |
| Format to ISO string      | `date.toISOString()`                    |
| Add days to a date        | `date.setDate(date.getDate() + n)`      |
| Compare two dates         | `date1.getTime() > date2.getTime()`     |
| Parse ISO string          | `new Date("YYYY-MM-DD")`                |
| Format to local date/time | `date.toLocaleString("en-IN", options)` |

