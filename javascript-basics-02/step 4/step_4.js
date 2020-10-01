let reset = document.querySelector("button");
let fname = document.querySelector("#name");
let surname = document.querySelector("#surname");
let city = document.querySelector("#city");
reset.addEventListener("click", () =>{
   fname.value = '';
   surname.value = '';
   city.value = '' ;
});