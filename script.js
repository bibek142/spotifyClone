let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Murali Manohar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Deva Shree Ganesha", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Shiv Tandav Stotram", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hanuman Chalisa", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Hai Katha Sangram Ki", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Jagat Mein Samay", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Hare Krishna Hare Ram", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ram Siya Ram", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jay Shri Ram", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Radhe Krishna ki Jyoti", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Hare Krishna - Lofi", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    if (audioElement.currentTime >= audioElement.duration) {
        songIndex++;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
    }
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');

   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused){
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }else{
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            // audioElement.src = `songs/${songIndex+1}.mp3`;
            // masterSongName.innerText = songs[songIndex].songName;
            // audioElement.currentTime = 0;
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 10;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

// Add click event listener for the master play button
// masterPlay.addEventListener('click', () => {
//     // Check if audioElement exists and is loaded
//     if (audioElement && !isNaN(audioElement.duration)) {
//         if (audioElement.paused) {
//             // If the audio is paused, play it
//             audioElement.play();
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//             gif.style.opacity = 1;
//         } else {
//             // If the audio is playing, pause it
//             audioElement.pause();
//             masterPlay.classList.remove('fa-pause-circle');
//             masterPlay.classList.add('fa-play-circle');
//             gif.style.opacity = 0;
//         }
//     }
// });

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 10;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

// document.getElementById('backward').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0;
//     }else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//     gif.style.opacity = 1;
// })


const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');

backwardButton.addEventListener('click', () => {
    // Check if audioElement exists and is loaded
    if (audioElement && !isNaN(audioElement.duration)) {
        // Rewind the audio by 5 seconds
        audioElement.currentTime -= 5;
    }
});

forwardButton.addEventListener('click', () => {
    // Check if audioElement exists and is loaded
    if (audioElement && !isNaN(audioElement.duration)) {
        // Fast forward the audio by 5 seconds
        audioElement.currentTime += 5;
    }
});

// Assuming you have an audio element like this:
// const audioElement = document.getElementById('audioElement');

// Get all the songItemPlay elements
// const songItemPlayElements = document.querySelectorAll('.songItemPlay');

// // Add a click event listener to each songItemPlay element
// songItemPlayElements.forEach((element) => {
//     element.addEventListener('click', (e) => {
//         const songIndex = parseInt(e.target.id);

//         // Check if the clicked song is currently playing
//         if (audioElement.src.includes(`songs/${songIndex + 1}.mp3`)) {
//             if (audioElement.paused) {
//                 // If it's paused, play the song
//                 audioElement.play();
//                 // Change the icon to pause
//                 e.target.classList.remove('fa-play-circle');
//                 e.target.classList.add('fa-pause-circle');
//             } else {
//                 // If it's playing, pause the song
//                 audioElement.pause();
//                 // Change the icon to play
//                 e.target.classList.remove('fa-pause-circle');
//                 e.target.classList.add('fa-play-circle');
//             }
//         } else {
//             // If a different song is clicked, reset all icons to play
//             songItemPlayElements.forEach((el) => {
//                 el.classList.remove('fa-pause-circle');
//                 el.classList.add('fa-play-circle');
//             });

//             // Change the clicked song's icon to pause
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');

//             // Load and play the clicked song
//             audioElement.src = `songs/${songIndex + 1}.mp3`;
//             audioElement.play();
//         }
//     });
// });

// // Add an event listener to reset icons when the audio ends
// audioElement.addEventListener('ended', () => {
//     songItemPlayElements.forEach((el) => {
//         el.classList.remove('fa-pause-circle');
//         el.classList.add('fa-play-circle');
//     });
// });





