let img = [];
let id = "";
for (i=1; i<6; i++) {
    id = "#image"+i;
    img[i] = document.querySelector(id);
    const k=i;
    img[k].addEventListener("mouseover", () =>{
        let source = "images/image"+k+"_2.jpg";
        img[k].src = (source);
    });
    img[k].addEventListener("mouseout", () =>{
        let source = "images/image"+k+".jpg";
        img[k].src = (source);
    });
}
