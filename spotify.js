let btn=document.querySelector(".sticky_playbutton");
let mp=document.querySelector(".music_player");
btn.addEventListener('click',function(){
    if(mp.style.visibility=='hidden'){
        mp.style.visibility='visible';

    }else{
        mp.style.visibility='hidden';

    }
    
        // mp.style.visibility='visible';
    
    // mp.setAttribute()
    
});
