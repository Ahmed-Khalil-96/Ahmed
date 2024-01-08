let vid=document.getElementById("vid") ;
let play =document.getElementById("play") ;
let stop =document.getElementById("stop") ;
let previous=document.getElementById("<<");
let back=document.getElementById("<");
let forward=document.getElementById(">");
let next=document.getElementById("increase");
let mute=document.getElementById("mute");
let time=document.getElementById("currenttime");
let speed=document.getElementById("speed");
let sound=document.getElementById("sound");
let timerDisplay = document.getElementById("timer");

play.addEventListener("click" ,()=>{
if(vid.paused){
    vid.play()
}
}) ;
previous.addEventListener("click", () => {
    vid.playbackRate-=0.1
  });


  next.addEventListener("click",()=>{
vid.playbackRate+=0.1
  })

stop.addEventListener("click", ()=> {
    if(vid.played){
        vid.pause();
    }
}) ;
back.addEventListener("click" , ()=>vid.currentTime-=6)
forward.addEventListener("click",()=>vid.currentTime+=6)
mute.addEventListener("click",()=>{
    if (vid.muted){
        vid.muted=false ;
    }else{
        vid.muted=true;
    }
})

function updateVideoTime() {
    var percentage = time.value / 100;
    var newTime = percentage * vid.duration;
    vid.currentTime = newTime;
    
  }

  vid.addEventListener('timeupdate',()=>{
    let current = formatTime(vid.currentTime);
    let duration = formatTime(vid.duration); 
    timerDisplay.textContent = current + ' / ' + duration;
  });
  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
  }

  time.addEventListener("input", updateVideoTime);


  speed.addEventListener("input", () => {
    adjustPlaybackRate(parseFloat(speed.value));
  });

  function adjustPlaybackRate(speed) {
    vid.playbackRate = speed; 
  }

sound.addEventListener("input",()=>{
  vid.volume=sound.value
})