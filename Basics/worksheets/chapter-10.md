## 📝 JavaScript Objects Worksheet

### Instructions:
- Answer the following questions about JavaScript objects and their usage.
- Questions are arranged from **easy** to **hard**.
- Write code where required and explain your reasoning briefly.

---

### **Easy (1–6)**

**1.**  
What is an object in JavaScript? Give an example.

---

**2.**  
How do you create an empty object?

---

**3.**  
Given this object, how do you access the value `"Alice"`?
```js
let user = { name: "Alice", age: 25 };
```

---

**4.**  
How do you add a new property `city` with value `"Paris"` to the object above?

---

**5.**  
What will this code output?
```js
let car = { brand: "Toyota", year: 2020 };
console.log(car["brand"]);
```

---

**6.**  
How can you check if an object has a property called `"age"`?

---

### **Medium (7–12)**

**7.**  
Write code to loop over all properties of an object and print their keys and values.

---

**8.**  
What is the difference between dot notation and bracket notation for accessing object properties?

---

**9.**  
How do you delete a property from an object? Show with code.

---

**10.**  
Given:
```js
let person = { name: "Bob", hobbies: ["reading", "sports"] };
```
How do you access the second hobby?

---

**11.**  
How do you merge two objects into a new object (without modifying the originals)?

---

**12.**  
What does `Object.keys(obj)` return?

---

### **Hard (13–18)**

**13.**  
Write a function that takes an object and returns the number of properties it has.

---

**14.**  
What will this code output? Explain.
```js
let a = { value: 10 };
let b = a;
b.value = 20;
console.log(a.value);
```

---

**15.**  
How do you create a shallow copy of an object?

---

**16.**  
What is the difference between a method and a property in an object? Give examples.

---

**17.**  
Write an object `calculator` with methods `add(a, b)` and `subtract(a, b)` that return the sum and difference.

---

**18.**  
Given:
```js
let obj = { x: 1, y: 2 };
for (let key in obj) {
  obj[key] = obj[key] * 2;
}
console.log(obj);
```
What will be the value of `obj` after this code runs?

---

### ✅ **Bonus:**
Try to answer all questions without running the code first. Then test your answers in a JavaScript environment to check your understanding!

