color = document.querySelectorAll(".color");
text = document.querySelector("#text");
for(i=0; i<3; i++){
    const k=i;
    color[k].addEventListener("click", () =>{
        if(color[k].getAttribute("class") == "color green"){
            text.setAttribute("style", "color: green;");
        }
        else if(color[k].getAttribute("class") == "color red"){
            text.setAttribute("style", "color:red;");
        }
        else{
            text.setAttribute("style", "color:blue;");
        }
    });
}