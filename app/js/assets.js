var img = {
	mysteryBlock: 'app/img/mystery-block.png',
	brickBlock: 'app/img/brick-block.png',
	exclamBlock: 'app/img/exclam-block.png',
	usedBlock: 'app/img/used-block.png',
	pipe: 'app/img/pipe.png', 
	tile: 'app/img/tile.png',
	grass: 'app/img/grass.png',
	dirt: 'app/img/dirt.png',
	coin: 'app/img/coin.png',
	coinTexture: 'app/img/coinTexture.png'
};
var color = {
	black: '#2a2a2c',
	white: '#fff',
	treeTrunk: '#baa286', 
	lblue: '#98dfe1',
	ylw: '#f7dfaf',
	treeTop: '#7bd39a',
	dirt: '#c68839'
};

var scene = document.querySelector('a-scene');

var skyDay = document.createElement('a-sky');
skyDay.setAttribute('color', color.lblue); 

var cloudContainer = document.createElement('a-entity');

var cloudItemBody = document.createElement('a-entity');
cloudItemBody.setAttribute('geometry', 'primitive: sphere; radius: 1;' );
cloudItemBody.setAttribute('material', 'color: ' + color.white );
cloudItemBody.setAttribute('position', '0 0 0');

var cloudItemSideRight = document.createElement('a-entity');
cloudItemSideRight.setAttribute('geometry', 'primitive: sphere; radius: 0.8;' );
cloudItemSideRight.setAttribute('material', 'color: ' + color.white );
cloudItemSideRight.setAttribute('position', '0.7 -0.2 0');

var cloudItemSideLeft = document.createElement('a-entity');
cloudItemSideLeft.setAttribute('geometry', 'primitive: sphere; radius: 0.8;' );
cloudItemSideLeft.setAttribute('material', 'color: ' + color.white );
cloudItemSideLeft.setAttribute('position', '-0.7 -0.2 0');

var cloudEyeRight = document.createElement('a-entity');
cloudEyeRight.setAttribute('geometry', 'primitive: cylinder; height: 0.1; radius: 0.22');
cloudEyeRight.setAttribute('material', 'color: ' + color.black);
cloudEyeRight.setAttribute('rotation', '0 0 90');
cloudEyeRight.setAttribute('position', '0.35 0.3 0.75');

var cloudEyeLeft = document.createElement('a-entity');
cloudEyeLeft.setAttribute('geometry', 'primitive: cylinder; height: 0.1; radius: 0.22');
cloudEyeLeft.setAttribute('material', 'color: ' + color.black);
cloudEyeLeft.setAttribute('rotation', '0 0 90');
cloudEyeLeft.setAttribute('position', '-0.35 0.3 0.75');

var grass = document.createElement('a-plane');
grass.setAttribute('height', 20);
grass.setAttribute('width', 20);
grass.setAttribute('src', img.grass );
grass.setAttribute('rotation', '-90 0 0');
grass.setAttribute('repeat', '20 20');

var dirt = document.createElement('a-plane');
dirt.setAttribute('height', 8);
dirt.setAttribute('width', 20);
dirt.setAttribute('src', img.dirt );
dirt.setAttribute('rotation', '-90 0 0');
dirt.setAttribute('position', '0 0.001 0');
dirt.setAttribute('repeat', '8 10');

var mysteryBlock = document.createElement('a-entity');
mysteryBlock.setAttribute('mixin', 'cube');
mysteryBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.mysteryBlock +')');


var brickBlock = document.createElement('a-entity');
brickBlock.setAttribute('mixin', 'cube');
brickBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.brickBlock +')');


var exclamBlock = document.createElement('a-entity');
exclamBlock.setAttribute('mixin', 'cube');
exclamBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.exclamBlock +')');


var usedBlock = document.createElement('a-entity');
usedBlock.setAttribute('mixin', 'cube');
usedBlock.setAttribute('material', 'color: #ffce55; src: url(' + img.usedBlock +')');


var pipeContainer = document.createElement('a-entity');
pipeContainer.setAttribute('position', '3.5 0.1 -4');


var pipeBottom = document.createElement('a-entity');
pipeBottom.setAttribute('mixin', 'cylinder');
pipeBottom.setAttribute('material', 'src: url(' + img.pipe + ')')

var pipeTop = document.createElement('a-entity');
pipeTop.setAttribute('mixin', 'cylinder-top');
pipeTop.setAttribute('material', 'src: url(' + img.pipe + ')')

var bulletBill = document.createElement('a-entity');


var bbHead = document.createElement('a-sphere');
bbHead.setAttribute('position', '-1 0 0');
bbHead.setAttribute('color', color.black);

var bbHeadCylinder = document.createElement('a-entity');
bbHeadCylinder.setAttribute('geometry', 'primitive: cylinder; radius:1; height: 0.5;');
bbHeadCylinder.setAttribute('material', 'color: ' + color.black);
bbHeadCylinder.setAttribute('rotation', '0 0 -90');
bbHeadCylinder.setAttribute('position', '-0.7 0 0');

var bbMid = document.createElement('a-entity');
bbMid.setAttribute('geometry', 'primitive: cylinder; radius: 0.9; height:0.5;');
bbMid.setAttribute('material', 'color: ' + color.black);
bbMid.setAttribute('rotation', '0 0 -90');
bbMid.setAttribute('position', '-0.2 0 0');

var bbBack = document.createElement('a-entity');
bbBack.setAttribute('geometry', 'primitive: cylinder; radius:1; height: 0.5;');
bbBack.setAttribute('material', 'color: ' + color.black);
bbBack.setAttribute('rotation', '0 0 -90');
bbBack.setAttribute('position', '0 0 0');

var treeContainer = document.createElement('a-entity');


var treeTrunk = document.createElement('a-entity');
treeTrunk.setAttribute('geometry', 'primitive: cylinder; height:2.1; radius: 0.15;');
treeTrunk.setAttribute('position', '0 1 0');
treeTrunk.setAttribute('material', 'color: ' + color.treeTrunk);

var treeTop = document.createElement('a-entity');
treeTop.setAttribute('geometry', 'primitive: box; height: 2; width: 2; depth:2;');
treeTop.setAttribute('position', '0 2.85 0');
treeTop.setAttribute('material', 'color: ' + color.treeTop);

var coin = document.createElement('a-entity');
coin.setAttribute('geometry', 'primitive: cylinder; height:0.1; radius:0.5;' );
coin.setAttribute('material', 'color: ' + color.ylw + '; side: double; src: url(' + img.coinTexture + ');');
coin.setAttribute('rotation', '-90 0 0');







