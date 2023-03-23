const container = document.querySelector('.container');

//creation HTML dynamique

//// creation de la div globale
const allVid = document.createElement('div');
allVid.className = 'allVid';
container.appendChild(allVid);

const Video = document.createElement('video');
video.src ='Ferrari.mp4';
video.className = 'video';
allVid.appendChild(video);

//creation de la div global pour le controle
const controls = document.createElement('div');
controls.className = 'controls';
allVid.appendChild(controls);

/*const orangeBar = document.createElement('div');
orangeBar.className ='orange-bar';
controls.appendChild(orangeBar);*/

/*const juice = document.createElement('div');
juice.className = 'orange-juice';
controls.appendChild(juice);µ: 

/* //creation div global des boutons
const buttons = document.createElement('div');
buttons.className = 'buttons';
controls.appendChild(buttons);*/

/*const rwdBtn = document.createElement('button');
rwdBtn.className = 'rwd';
rwdbtn.textContent = "<<";
buttons.appendChild(rwdbtn);*/

/*const btn = document.createElement('button');
btn.id = 'play-pause';
btn.textContent = 'PLAY / PAUSE';
buttons.appendChild(btn);*/ 

/*const stopBtn = document.createElement('button');
stopBtn.id = 'stop';
stopBtn.textContent = 'STOP';
buttons.appendChild(stopBtn);*/

/*const fwdBtn = document.createElement('button');
fwdBtn.classeName = 'fwd';
fwdBtn.textContent = '>>';
buttons.appendChild(fwdBtn);*/





