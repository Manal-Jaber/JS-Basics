a = document.querySelectorAll("a");
texte = document.querySelector("#texte");
for(i=0; i<2; i++){
    const k=i;
    a[k].addEventListener("click", () =>{
        if(a[k].id == "show"){
            texte.setAttribute("style", "display:block;");
        }
        else{
            texte.setAttribute("style", "display:none;");
        }
    });
}