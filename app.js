let btn = document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("CLICK", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    

    ul.appendChild(item);
    inp.value="";
});