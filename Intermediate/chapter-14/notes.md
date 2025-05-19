### 🔰 **1. What is the DOM?**

* DOM as a tree-like structure
* Difference between DOM and HTML
* `document` object and how JavaScript interacts with the DOM

---

### 🔹 **2. Selecting Elements**

#### Basic Selectors:

* `document.getElementById()`
* `document.getElementsByClassName()`
* `document.getElementsByTagName()`

#### Modern Selectors:

* `document.querySelector()`
* `document.querySelectorAll()`
* Difference between `NodeList` and `HTMLCollection`

## 🧒 Imagine This:

You have a **toy box** 🧸 that can hold different types of toys:

* Dolls
* Cars
* Balls
* Blocks

Now, imagine you asked your big brother JavaScript:

> "Hey, give me all the **red toys** from this toy box!"

Depending on how you ask, he might give you one of two **types of boxes**:

---

## 🎁 1. `HTMLCollection` – A Magic Box of Only “Toy Elements”

* This box **only gives real toys** (like dolls and cars, but not drawings or labels).
* It's **live** – if you add a red car later, it will magically appear in this box too!

### ✅ Key Features:

* **Only real HTML elements** (no text, no comments)
* **Live collection** – updates if the DOM changes
* Comes from:

  * `getElementsByClassName`
  * `getElementsByTagName`
  * `document.forms`, `document.images`, etc.

### 📦 Example:

```html
<div class="toy">Car</div>
<div class="toy">Doll</div>

<script>
  const toys = document.getElementsByClassName("toy");
  console.log(toys); // HTMLCollection [div, div]
</script>
```

If you later do:

```js
let newToy = document.createElement('div');
newToy.className = 'toy';
newToy.textContent = 'Ball';
document.body.appendChild(newToy);

console.log(toys); // Now magically includes Ball too! (LIVE!)
```

---

## 🎁 2. `NodeList` – A Normal Box with Toys *and* Drawings

* This box can include **HTML elements**, **text**, **comments**, and more.
* Usually **not live** – once you get it, it doesn’t change even if the DOM changes (unless using `childNodes`).

### ✅ Key Features:

* Can include **all node types**, not just elements
* **Static** (usually doesn't auto-update)
* Comes from:

  * `querySelectorAll`
  * `childNodes` (live version)
* Can use `.forEach()` directly

### 📦 Example:

```html
<div class="toy">Car</div>
<div class="toy">Doll</div>

<script>
  const toys = document.querySelectorAll(".toy");
  console.log(toys); // NodeList [div, div]
</script>
```

If you later add:

```js
let newToy = document.createElement('div');
newToy.className = 'toy';
newToy.textContent = 'Ball';
document.body.appendChild(newToy);

console.log(toys); // Still just Car and Doll. Ball is NOT included!
```

---

## 🧠 Summary Table (Like a Cheat Sheet)

| Feature              | `HTMLCollection`      | `NodeList`                                   |
| -------------------- | --------------------- | -------------------------------------------- |
| What it contains     | Only HTML Elements    | Any kind of nodes (elements, text, comments) |
| Live or Static       | ✅ Live (auto-updates) | ❌ Usually static                             |
| Can use `.forEach()` | ❌ No (convert first)  | ✅ Yes                                        |
| How to get it        | `getElementsBy*()`    | `querySelectorAll()`, `childNodes`           |

---

## 🎓 Final Analogy

* `HTMLCollection` is like a **magic toy box** that only holds **real toys** and **updates itself** when new toys are added.
* `NodeList` is like a **snapshot photo** of what was in the toy box **at the moment** you asked – it includes drawings too, but **won’t change** if you add more toys later.




### 🔹 **3. Changing Content**

* `element.innerText`
* `element.textContent`
* `element.innerHTML` (and dangers of using it)
* Setting vs getting content

---

### 🔹 **4. Changing Styles**

* `element.style.property`

  * Example: `element.style.color = 'red'`
* Changing multiple styles using:

  * `element.style.cssText`
  * `element.classList.add()`, `element.classList.remove()`, `element.classList.toggle()`, `element.classList.contains()`


* Introduction to `classList`

  * `.add()`, `.remove()`, `.toggle()`, `.contains()`

---

### 🔹 **5. Attributes**

* `getAttribute()`, `setAttribute()`, `removeAttribute()`
* Working with `href`, `src`, `alt`, `id`, etc.
* `dataset` and `data-*` attributes

---

### 🔹 **6. Creating and Adding Elements**

* `document.createElement()`
* `document.createTextNode()`
* `appendChild()`, `prepend()`, `insertBefore()`
* Modern: `append()`, `before()`, `after()`


## 👩‍💻 Setup (HTML for All Examples):

```html
<button id="myButton" class="btn">Click Me</button>

<style>
  .btn {
    background-color: blue;
    color: white;
    padding: 10px;
  }

  .active {
    background-color: green;
  }

  .hidden {
    display: none;
  }
</style>
```

---

## 1. `.add()` – Add a class 🎨

### ✅ Example:

```js
const btn = document.getElementById("myButton");
btn.classList.add("active");
```

### 💡 What happens?

The `<button>` will now have both `btn` and `active` classes:

```html
<button class="btn active">Click Me</button>
```

It turns green because the `active` class was added.

---

## 2. `.remove()` – Remove a class ❌

### ✅ Example:

```js
btn.classList.remove("btn");
```

### 💡 What happens?

Now the `btn` class is gone:

```html
<button class="active">Click Me</button>
```

So, blue background and padding are removed.

---

## 3. `.toggle()` – Add if it’s not there, remove if it is 🔁

### ✅ Example:

```js
btn.classList.toggle("hidden");
```

### 💡 First time:

* It adds `hidden`, so the button disappears.

### 💡 Second time (run again):

* It removes `hidden`, so the button comes back!

---

## 4. `.contains()` – Check if a class exists ✅❓

### ✅ Example:

```js
if (btn.classList.contains("active")) {
  console.log("Button is active!");
} else {
  console.log("Button is not active.");
}
```

### 💡 What happens?

It checks whether the class `"active"` is present or not and logs a message.

---

## 👀 Bonus: Use with Events

Here’s a quick interactive example:

```js
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});
```



### 🔹 **7. Removing Elements**

* `element.remove()` (modern)
* `parent.removeChild(child)` (older way)

---

### 🔹 **8. Event Handling (Intro)**

* `addEventListener()`

  * Click, mouseover, input, submit, etc.
* Arrow function vs named function as event handler
* Accessing `event` object
* `preventDefault()` for forms and links

---

### 🔹 **9. Form Manipulation**

* `value` property of input, textarea
* Handling checkbox, radio, select values
* Getting data from forms
* Disabling/enabling form elements
