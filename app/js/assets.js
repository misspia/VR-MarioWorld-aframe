var img = {
	mysteryBlock: 'app/img/mystery-block.png',
	brickBlock: 'app/img/brick-block.png',
	exclamBlock: 'app/img/exclam-block.png',
	usedBlock: 'app/img/used-block.png'
};
var color = {
	lblue: '#98dfe1',
	lylw: '#f7dfaf'
};
// var colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#f1c40f", "#e67e22", "#e74c3c"];

var scene = document.querySelector('a-scene');
// var entity = document.createElement('a-entity');

var skyDay = document.createElement('a-sky');
skyDay.setAttribute('color', color.lblue); 

var ground = document.createElement('a-plane');
ground.setAttribute('height', 20);
ground.setAttribute('width', 60);
ground.setAttribute('color', '#CCC');
ground.setAttribute('rotation', '-90 0 0');

var mysteryBlock = document.createElement('a-entity');
mysteryBlock.setAttribute('mixin', 'cube');
mysteryBlock.setAttribute('rotation', '0 5 0');
mysteryBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.mysteryBlock +')');
mysteryBlock.setAttribute('position', '-3 3 -5');

var brickBlock = document.createElement('a-entity');
brickBlock.setAttribute('mixin', 'cube');
brickBlock.setAttribute('rotation', '0 5 0');
brickBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.brickBlock +')');
brickBlock.setAttribute('position', '-4 3 -5');

var exclamBlock = document.createElement('a-entity');
exclamBlock.setAttribute('mixin', 'cube');
exclamBlock.setAttribute('rotation', '0 5 0');
exclamBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.exclamBlock +')');
exclamBlock.setAttribute('position', '-2 3 -5');

var usedBlock = document.createElement('a-entity');
usedBlock.setAttribute('mixin', 'cube');
usedBlock.setAttribute('rotation', '0 5 0');
usedBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.usedBlock +')');
usedBlock.setAttribute('position', '-1 3 -5');

var pipeContainer = document.createElement('a-entity');
pipeContainer.setAttribute('position', '2 0.1 -4');

var pipeBottom = document.createElement('a-entity');
pipeBottom.setAttribute('mixin', 'cylinder');

var pipeTop = document.createElement('a-entity');
pipeTop.setAttribute('mixin', 'cylinder-top');

var bulletBill = document.createElement('a-entity');
bulletBill.setAttribute('position', '0 5 -5');

var bbHead = document.createElement('a-entity');
bbHead.setAttribute('position', '0 0 0');
bbHead.setAttribute('mixin', 'sphere');
bbHead.setAttribute('color', '#000');

bulletBill.appendChild(bbHead);
scene.appendChild(bulletBill);


pipeContainer.appendChild(pipeTop);
pipeContainer.appendChild(pipeBottom);

scene.appendChild(skyDay);
scene.appendChild(ground);
scene.appendChild(pipeContainer);
scene.appendChild(mysteryBlock);
scene.appendChild(brickBlock);
scene.appendChild(exclamBlock);
scene.appendChild(usedBlock);




