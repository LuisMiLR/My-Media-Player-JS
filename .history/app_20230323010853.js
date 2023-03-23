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
controls.appendChild() 
