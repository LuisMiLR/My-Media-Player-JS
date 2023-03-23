const container = document.querySelector('.container');

//creation HTML dynamique

//// creation de la div globale
const allVid = document.createElement('div');
allVid.className = 'allVid';
container.appendChild(allVid);

const stockVideo = document.createElement('video');
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

const orangeJuice = document.createElement('div');
orangeJuice.className = 'orange-juice';
controls.appendChild(orangeJuice); 

//creation div global des boutons
const buttons = document.createElement('div');
buttons.className = 'buttons';
controls.appendChild(buttons);

const buttonRwd = document.createElement('button');
buttonRwd.className = 'rwd';
buttonRwd.textContent = "<<";
buttons.appendChild(buttonRwd);

const playPause = document.createElement('button');
playPause.id = 'play-pause';
playPause.textContent = 'PLAY / PAUSE';
buttons.appendChild(playPause); 

const stop = document.createElement('button');
stop.id = 'stop';
stop.textContent = 'STOP';
buttons.appendChild(stop);

const buttonFwd = document.createElement('button');
buttonFwd.classeName = 'fwd';
buttonFwd.textContent = '>>';
buttons.appendChild(buttonFwd);



