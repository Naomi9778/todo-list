const body = document.getElementsByTagName("body")[0];

const container = document.createElement('div');

const box = document.createElement('div');

const boxHead = document.createElement('div');

const boxBody = document.createElement('div');

const boxDown = document.createElement('div');

container.className = "container";
box.className = "box";
boxHead.className = "box-head";
boxBody.className = "box-body";
boxDown.className = "box-down";


const title = document.createElement('h2')
title.innerText = "Rewiew your English writing for mistake";
const p = document.createElement('h3');
p.innerText = "Write clearly in English with no mistakes.Try out free writing app!"
const bodyImage = document.createElement('img')
bodyImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T0jxhA8AxS0JrTXEWlDFODT8yI-m3uXwYA&s'

bodyImage.className = "body-image";

const logo = document.createElement('img');
logo.className = "logo";
logo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJegCk-tk9EwNlZ6Br_GnM9LJcfsjhtngkpA&s'

const logoTitle = document.createElement('h4');
logoTitle.innerText = "Grammarly";
logoTitle.className = "logo-title"





boxHead.appendChild(logo);
boxHead.appendChild(logoTitle);
boxBody.appendChild(title);
boxBody.appendChild(p);
boxBody.appendChild(bodyImage);
box.appendChild(boxHead);
box.appendChild(boxBody);
box.appendChild(boxDown);
container.appendChild(box);
body.appendChild(container);