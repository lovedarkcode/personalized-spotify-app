console.log("Welcome to my-spotify")

// initailize the variable

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay= document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let songItems=document.getElementsByClassName('songItem');

let songs=[
    {songName:"salame-ishq",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"salame-ishq",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"salame-ishq",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"salame-ishq",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"salame-ishq",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"salame-ishq",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
]

// handel play/pause

masterplay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.cuurentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})



// listen to events

myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar
})