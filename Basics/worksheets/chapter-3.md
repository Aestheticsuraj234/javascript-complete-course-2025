## 📝 JavaScript Control Flow Worksheet

### Instructions:
- Answer the following questions based on your understanding of `if-else`, `switch`, and ternary operators in JavaScript.
- Questions are arranged from **easy** to **hard**.
- Write code where required and explain your reasoning briefly.

---

### **Easy (1-4)**

**1.**  
Write an `if-else` statement that prints `"Even"` if a number is even and `"Odd"` if it is odd.  
*Sample variable:*  
```js
let num = 7;
```

---

**2.**  
What will be the output of the following code?
```js
let color = "blue";
if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Caution");
} else {
  console.log("Go");
}
```

---

**3.**  
Rewrite the following `if-else` as a ternary operator:
```js
let isMember = true;
let price;
if (isMember) {
  price = 10;
} else {
  price = 15;
}
```

---

**4.**  
Fill in the blanks to complete this `switch` statement:
```js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case ___:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

---

### **Medium (5-7)**

**5.**  
What is the output of this code? Explain your answer.
```js
let grade = "C";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Needs Improvement");
}
```

---

**6.**  
Write a function `getSeason(month)` that returns `"Winter"` for months 12, 1, 2; `"Spring"` for 3, 4, 5; `"Summer"` for 6, 7, 8; `"Autumn"` for 9, 10, 11. Use a `switch` statement.

---

**7.**  
Convert this ternary operation into an equivalent `if-else` statement:
```js
let temp = 25;
let weather = temp > 30 ? "Hot" : "Comfortable";
```

---

### **Hard (8-10)**

**8.**  
Write a nested `if-else` that prints:
- `"Excellent"` if `score >= 90`
- `"Good"` if `score >= 75` but less than 90
- `"Pass"` if `score >= 50` but less than 75
- `"Fail"` if `score < 50`  
*Sample variable:*  
```js
let score = 83;
```

---

**9.**  
What will be the output? Why?
```js
let x = 5;
if (x = 10) {
  console.log("Ten");
} else {
  console.log("Not Ten");
}
```
*Hint: Watch the operator!*

---

**10.**  
Rewrite the following logic using a `switch` statement:
```js
let fruit = "mango";
if (fruit === "apple" || fruit === "pear") {
  console.log("Pome fruit");
} else if (fruit === "peach" || fruit === "plum") {
  console.log("Stone fruit");
} else {
  console.log("Other fruit");
}
```
*Tip: Use case fall-through!*

---

### ✅ **Bonus:**
Try to answer all questions without running the code first. Then test your answers in a JavaScript environment to check your understanding!

