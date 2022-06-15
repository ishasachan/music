let audio = document.getElementById("mysong");
let icon = document.getElementById("icon");

icon.onclick = function(){
    if(mysong.paused){
        mysong.play;
        icon.src="/pause.png";
    }
    else{
        mysong.paused;
        icon.src="/play.png ";
    }
}