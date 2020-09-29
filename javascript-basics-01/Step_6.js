let a = document.getElementById("first_number");
let b = document.getElementById("second_number");
let btn =document.getElementById("validate");
btn.onclick = () =>{
    alert(a.value + "%" + b.value + "=" + a.value % b.value);
}