let test = document.querySelector("button");
let password = document.querySelector("#password");
let confirmation = document.querySelector("#confirmation");
test.addEventListener("click", () =>{
   if(password.value !== confirmation.value){
       password.setAttribute("style","border: solid; border-color: red;");
       confirmation.setAttribute("style","border: solid; border-color: red;");
   }
});