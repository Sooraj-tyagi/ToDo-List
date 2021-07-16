let ul=document.querySelector("ul");
let input=document.querySelector("input");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let task = input.value;
    input.value="";
    if(task=="")return;
    let li = document.createElement("li");
    li.innerText=task;
    li.addEventListener("dblclick",function(){
        li.remove()
    })
    ul.append(li);
    
});