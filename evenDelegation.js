// document.querySelectorAll("button").forEach(btn => {
//   btn.addEventListener("click", () => {
//     console.log("Button clicked");
//   });
// });


let parentDiv = document.getElementById("parent");
console.log(parentDiv);


parentDiv.addEventListener("click", (e)=>{
    if (e.target.tagName === "BUTTON") {
        console.log("you click on button");
           console.log("Button clicked Name:", e.target.innerText);
        
    }else{
        console.log("out side");
        
    }
})