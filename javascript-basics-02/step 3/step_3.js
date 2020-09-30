let tag = document.createElement("div");
let hello = document.querySelector("#name");
document.body.appendChild(tag);
hello.addEventListener("keyup", () =>{
tag.textContent = hello.value;
});