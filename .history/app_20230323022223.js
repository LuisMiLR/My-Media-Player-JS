const container = document.querySelector('.container');

//creation HTML dynamique

//// creation de la div globale
const allVid = document.createElement('div');
allVid.className = 'allVid';
container.appendChild(allVid);

const video = document.createElement('video');
video.src = 'Rols.mp4';
video.className = 'video';
allVid.appendChild(video);

//creation de la div global pour le controle
const controls = document.createElement('div');
controls.className = 'controls';
allVid.appendChild(controls);

const orangeBar = document.createElement('div');
orangeBar.className ='orange-bar';
controls.appendChild(orangeBar);

const juice = document.createElement('div');
juice.className = 'orange-juice';
controls.appendChild(juice);

//creation div global des boutons
const buttons = document.createElement('div');
buttons.className = 'buttons';
controls.appendChild(buttons);

const rwdBtn = document.createElement('button');
rwdBtn.className = 'rwd';
rwdBtn.textContent = "<< ";
buttons.appendChild(rwdBtn);

const btn = document.createElement('button');
btn.id = 'play-pause';
btn.textContent = '<i class="fa-solid fa-circle-play" style="color: #f1f2f3;"></i>';
buttons.appendChild(btn);

const stopBtn = document.createElement('button');
stopBtn.id = 'stop';
stopBtn.textContent = 'STOP ';
buttons.appendChild(stopBtn);

const fwdBtn = document.createElement('button');
fwdBtn.classeName = 'fwd';
fwdBtn.textContent = '  >> ';
buttons.appendChild(fwdBtn);

const muteBtn = document.createElement('mute');
muteBtn.id = 'mute';
muteBtn.textContent = '¤'
buttons.appendChild(muteBtn);

//Création d'un élément input de type "range"
const volumeslider = document.createElement("input");
volumeslider.setAttribute("type", "range");

// Attribution de l'ID "volumeSlider"
volumeslider.setAttribute("id", "volumeSlider");

// Définition des attributs "min", "max", "value" et "step"
volumeslider.setAttribute("min", "0");
volumeslider.setAttribute("max", "100");
volumeslider.setAttribute("value", "50");
volumeslider.setAttribute("step", "1");
buttons.appendChild(volumeslider);


function togglePlayPause() {
    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }
}
btn.onclick = function(){
    togglePlayPause();
}

// barre orange
video.addEventListener('timeupdate', function(){
    let juicePos = video.currentTime / video.duration;

    juice.style.width = juicePos * 100 + '%';

    if(video.ended) {
        btn.className ="play";
    }
})

// mute la video
muteBtn.addEventListener('click', function(){
    if(video.muted){
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }
})

// Volume
volumeslider.addEventListener('change', function(){


    video.volume = volumeslider.value / 100;

})

// la barre orange clikable
let rect = orangeBar.getBoundingClientRect();
console.log(rect);
let largeur = rect.width;

orangeBar.addEventListener('click', function(e){


    // la valeur de notre click sur x par rapport a notre element

    let x = e.clientX - rect.left;
    
    let widthPercent = ((x*100)/largeur);
    
    let currentTimeTrue = (widthPercent * 63 ) / 100;
    
    // position en secondes
    video.currentTime = currentTimeTrue;
    // barre orange qui va la ou on clique
    juice.style.width = widthPercent + '%';

})

// bouton arret
stopBtn.onclick = function() {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.textContent = 'Play';
};


// Avance:recule
rwdBtn.onclick = function() {
    video.currentTime -= 5;
  };
  
fwdBtn.onclick = function() {
    video.currentTime += 5;
    if(video.currentTime >= video.duration || video.paused) {
      video.pause();
      video.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    }
};
video.removeAttribute('controls');

