alert("Please Enter your shoe size and birth year:");
let shoe_size = document.getElementById("shoe_size");
let year = document.getElementById("year");
let result = 0;
let btn = document.getElementById("validate");
btn.onclick = () =>{
    result = shoe_size.value * 2;
    result += 5;
    result *=50;
    result -= year.value;
    result += 1766;
    alert("result= " + result);
}