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