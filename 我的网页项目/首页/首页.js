let index = 0;
let ming = "这是陈艺文的首页";
function type(){
    document.getElementById("jieShao").innerText = ming.substring(0,index++);
    if (index > ming.length){
        clearInterval(a);
    }
}
let a = setInterval(type, 200);