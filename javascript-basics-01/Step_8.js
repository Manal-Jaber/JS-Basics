alert("Please enter your age to validate:");
let age = document.getElementById("age");
let btn = document.getElementById("validate");
btn.onclick = () =>{
    if(age.value >= 18){
        alert("you are over 18");
    }
    else{
        alert("you are under 18");
    }
}