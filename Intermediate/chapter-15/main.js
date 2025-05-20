// const btn = document.getElementById("btn");

// // * Second way of adding events

// // btn.onclick = ()=>{
// //     alert("Button Clicked");
// // }

// // * Third way of adding events

// btn.addEventListener("click" , ()=>{
//     console.log("HELLO WORLD🔥")
// })

// const container = document.getElementById("container");

// const button = document.getElementById("btn");

// container.addEventListener("mouseover" , ()=>{
//     container.style.backgroundColor = "green"
// })

// container.addEventListener("mouseleave" , ()=>{
//     container.style.backgroundColor = "brown"
// })

// button.addEventListener("click" , (event)=>{

//     console.log(event)

//     container.style.backgroundColor = "red";
//     container.style.color = "white";

//     console.log("Changing color...")
// })

// const parent = document.getElementById("container");
// const child = document.getElementById("child");

// Event Capturing and Event Bubbling

// body.addEventListener("mousemove", (e) => {
//   console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
// });
// parent.addEventListener("click" , (e)=>{
//     e.stopPropagation()
//     console.log("Parent clicked🖱️")
// })

// child.addEventListener("click" , (e)=>{
//     e.stopPropagation()
//     console.log("child clicked")
// } )

// form.addEventListener("submit" , (e)=>{
//     e.preventDefault()

//     console.log("Form submited")
// },{ once: true })
const body = document.getElementsByTagName("body")[0];
const toggleBtn = document.getElementsByTagName("button")[0]
let isDarkMode = false;

toggleBtn.addEventListener("click" , ()=>{
    
    if(isDarkMode){
        body.classList.add("light")
        isDarkMode = false;
        body.classList.remove("dark")
    }
    else{
        body.classList.add("dark")
        isDarkMode = true;
        body.classList.remove("light")
    }
    
})

