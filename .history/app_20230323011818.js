const container = document.querySelector('.container');

//creation HTML dynamique

//// creation de la div globale
const allVid = document.createElement('div');
allVid.className = 'allVid';
container.appendChild(allVid);

const Video = document.createElement('video');
stockVideo.src = './assets/img/Ferrari';
stockVideo.className = 'video';
allVid.appendChild(stockVideo);

//creation de la div global pour le controle
const controls = document.createElement('div');
controls.className = 'controls';
allVid.appendChild(controls);

const orangeBar = document.createElement('div');
orangeBar.className ='orange-bar';
controls.appendChild(orangeBar);

const juice = document.createElement('div');
orangeJuice.className = 'orange-juice';
controls.appendChild(orangeJuice); 

//creation div global des boutons
const buttons = document.createElement('div');
buttons.className = 'buttons';
controls.appendChild(buttons);

const RwdBtn = document.createElement('button');
RwdBtn.className = 'rwd';
Rwd.textContent = "<<";
buttons.appendChild(buttonRwd);

const btn = document.createElement('button');
btn.id = 'play-pause';
playPause.textContent = 'PLAY / PAUSE';
buttons.appendChild(btn); 

const stop = document.createElement('button');
stop.id = 'stop';
stop.textContent = 'STOP';
buttons.appendChild(stop);

const fwdBtn = document.createElement('button');
buttonFwd.classeName = 'fwd';
buttonFwd.textContent = '>>';
buttons.appendChild(buttonFwd);

const btn



