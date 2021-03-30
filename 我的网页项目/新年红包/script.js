let d = 0;
let i = 10;
let year = document.querySelector(".year");
function ji(){
    if(i > 0){
        year.innerHTML=i +"秒";
        i--;
        setTimeout(ji,1000);
    }else{
        year.innerHTML="拜年了！点击领红包!";
    }
}

function dian(){
    if(d == 0){
        setTimeout(ji);
        d++;
    }
    if(year.innerHTML=="拜年了！点击领红包!"){
        document.querySelector(".svg1").style.display="block";
        document.querySelector(".dian").style.display="block";
    }
}

document.querySelector(".svg1").addEventListener("click",()=>{
    document.querySelector(".svg1").style.display="none";
    document.querySelector(".dian").style.display="none";
    document.querySelector(".svg2").style.display="block";
    year.innerHTML="恭喜发财！";
});
