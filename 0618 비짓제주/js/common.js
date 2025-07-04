let toggle = document.getElementById("toggle");

let momenu = document.getElementById("momenu");
let a=1;
toggle.addEventListener("click" , function(){
    if(a){
        momenu.style.display = "block";
        a--;
    }else{
        momenu.style.display = "none";
        a++;    
    }
    

})

