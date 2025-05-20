# 📘 JavaScript Events – Complete Notes

## 🔹 1. **What is an Event in JavaScript?**

An **event** is an action or occurrence that happens in the browser which JavaScript can "listen to" and react to.

🧠 Examples of events:

* User clicks a button → `click`
* Page finishes loading → `load`
* Key is pressed → `keydown`
* Form is submitted → `submit`
* Mouse moves over an element → `mouseover`

---

## 🔹 2. **Adding Event Listeners**

### ✅ Method: `addEventListener()`

```js
element.addEventListener("event", callbackFunction);
```

### 🔍 Example:

```js
const btn = document.getElementById("myButton");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});
```

> 🔹 `click` → Event name
> 🔹 `() => {}` → Callback function (executes when event occurs)

---

## 🔹 3. **Common DOM Events**

| Event              | Triggered When...               |
| ------------------ | ------------------------------- |
| `click`            | An element is clicked           |
| `dblclick`         | Double-clicked                  |
| `mouseover`        | Mouse enters the element        |
| `mouseout`         | Mouse leaves the element        |
| `mousedown`        | Mouse button is pressed         |
| `mouseup`          | Mouse button is released        |
| `mousemove`        | Mouse is moved                  |
| `keydown`          | A key is pressed                |
| `keyup`            | A key is released               |
| `submit`           | A form is submitted             |
| `change`           | Form element value changes      |
| `input`            | Input value changes (real-time) |
| `load`             | Page or resource loads          |
| `DOMContentLoaded` | Entire HTML has been parsed     |

---

## 🔹 4. **The `event` Object**

Every event listener gets an `event` object as an argument, which holds details about the event.

### 🧪 Example:

```js
btn.addEventListener("click", (event) => {
  console.log(event.target); // The actual clicked element
});
```

### Useful properties:

* `event.target`: Element that triggered the event
* `event.type`: Type of event (e.g., "click")
* `event.preventDefault()`: Stops default behavior
* `event.stopPropagation()`: Stops event from bubbling up

---

## 🔹 5. **Preventing Default Behavior**

### ✅ Use Case:

Prevent form submission from reloading the page:

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
});
```

---

## 🔹 6. **Event Propagation: Bubbling vs Capturing**

### 🧠 Two phases:

* **Bubbling**: Inner element triggers first → bubbles up to parents (default)
* **Capturing**: Outer elements trigger first → travels inward

```js
element.addEventListener("click", handler, useCapture);
```

* `useCapture = false` (default) → Bubbling
* `useCapture = true` → Capturing

### 🎯 Example:

```js
parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
```

Clicking the `child` will print:

```
Child clicked
Parent clicked
```

---

## 🔹 7. **stopPropagation()**

Use this to stop the event from bubbling further.

```js
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Only child clicked");
});
```

---

## 🔹 8. **Event Delegation**

Attach an event to a **common parent** instead of each child.

### ✅ Use Case:

Efficiently handle events on dynamic elements.

```js
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(`You clicked ${e.target.textContent}`);
  }
});
```

Even if new `<li>`s are added later, it works!

---

## 🔹 9. **Removing Event Listeners**

Use `removeEventListener()` with the same function reference.

```js
function sayHi() {
  alert("Hi!");
}

btn.addEventListener("click", sayHi);

// Later...
btn.removeEventListener("click", sayHi);
```

> ⚠️ You **must use the same function name** – anonymous functions won't work with `removeEventListener`.

---

## 🔹 10. **Once Option (Run Only One Time)**

```js
btn.addEventListener("click", () => {
  console.log("Clicked only once!");
}, { once: true });
```

---

## 🔹 11. **Keyboard Events**

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key); // Logs the key pressed (like "a", "Enter")
});
```

Useful for:

* Custom keyboard shortcuts
* Game controls
* Accessibility features

---

## 🔹 12. **Mouse Events**

```js
element.addEventListener("mousemove", (e) => {
  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});
```

---

## 🧪 Mini Project Example: Toggle Dark Mode

```js
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
```

```css
.dark {
  background-color: black;
  color: white;
}
```

---

## 🧠 Summary

| Concept                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `addEventListener()`    | Attach event handler                           |
| `event` object          | Info about the event                           |
| `preventDefault()`      | Stop default action (e.g., form submit reload) |
| `stopPropagation()`     | Stop event from bubbling up                    |
| Event Bubbling          | Child → Parent                                 |
| Event Delegation        | Listen on parent, handle child logic           |
| `removeEventListener()` | Remove previously attached event handler       |
| `{ once: true }`        | Run listener only once                         |


