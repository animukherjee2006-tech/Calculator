const dis = document.getElementById("val");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const backs= document.querySelector(".back");
const clear= document.querySelector(".clear")
const dot= document.querySelector(".dot");


nums.forEach(num =>{
    num.addEventListener("click",()=>{
        dis.value= dis.value+num.textContent;
    });
});

ops.forEach(op=>{
    op.addEventListener("click",()=>{
        const lastchar= dis.value.slice(-1);
        if("+-*/.^".includes(lastchar)) return;
        dis.value= dis.value+op.textContent;
    });
});

equal.addEventListener("click",()=>{
    try{
        dis.value= eval(dis.value);
    }catch(e){
        dis.value= "Error";
    }
});

backs.addEventListener("click", () => {
    const start = dis.selectionStart;
    const end = dis.selectionEnd;

    if (start === end && start > 0) {
        dis.value = dis.value.slice(0, start - 1) + dis.value.slice(start);
        dis.selectionStart = dis.selectionEnd = start-1;
}
});

clear.addEventListener("click",()=>{
    dis.value= "";
})

dot.addEventListener("click",()=>{
    const lastchar= dis.value.slice(-1);
    const secoendlast= dis.value.slice(-2,-1);

    if(lastchar!=="." && secoendlast!=="."){
        dis.value= dis.value+dot.textContent;
    }
})
