var scene = document.querySelector('a-scene');

var skyDay = document.createElement('a-sky');
skyDay.setAttribute('color', color.lblue); 

var cloudContainer = document.createElement('a-entity');

var cloudItemBody = document.createElement('a-entity');
setAttributes(cloudItemBody, {
	'geometry': 'primitive: sphere; radius: 1;',
	'material': 'color: ' + color.white,
	'position': '0 0 0'
});

var cloudItemSideRight = document.createElement('a-entity');
setAttributes(cloudItemSideRight, {
	'geometry': 'primitive: sphere; radius: 0.8;' , 
	'material': 'color: ' + color.white , 
	'position': '0.7 -0.2 0'
});

var cloudItemSideLeft = document.createElement('a-entity');
setAttributes(cloudItemSideLeft, {
	'geometry': 'primitive: sphere; radius: 0.8;' ,
	'material': 'color: ' + color.white,
	'position': '-0.7 -0.2 0'
});

var cloudEyeRight = document.createElement('a-entity');
setAttributes(cloudEyeRight, {
	'geometry': 'primitive: cylinder; height: 0.1; radius: 0.22', 
	'material': 'color: ' + color.black, 
	'rotation': '0 0 90', 
	'position': '0.35 0.3 0.75'
});

var cloudEyeLeft = document.createElement('a-entity');
setAttributes(cloudEyeLeft, {
	'geometry': 'primitive: cylinder; height: 0.1; radius: 0.22',
	'material': 'color: ' + color.black,
	'rotation': '0 0 90', 
	'position': '-0.35 0.3 0.75'
});

var grass = document.createElement('a-plane');
setAttributes(grass, {
	'height': 20, 
	'width': 20,
	'src': img.grass,
	'rotation': '-90 0 0',
	'repeat': '20 20'
});

var dirt = document.createElement('a-plane');
setAttributes(dirt, {
	"height": 8,
	"width": 20,
	"src": img.dirt,
	'rotation': '-90 0 0',
	'position': '0 0.001 0',
	'repeat': '8 10'
});


var mysteryBlock = document.createElement('a-entity');
block(mysteryBlock, img.mysteryBlock);

var brickBlock = document.createElement('a-entity');
block(brickBlock, img.brickBlock);

var exclamBlock = document.createElement('a-entity');
block(exclamBlock, img.exclamBlock);

var usedBlock = document.createElement('a-entity');
block(usedBlock, img.usedBlock);



var pipeContainer = document.createElement('a-entity');
pipeContainer.setAttribute('position', '3.5 0.1 -4');


var pipeBottom = document.createElement('a-entity');
setAttributes(pipeBottom, {
	'mixin': 'cylinder',
	'material': 'src: url(' + img.pipe + ')'
});

var pipeTop = document.createElement('a-entity');
setAttributes(pipeTop, {
	'mixin': 'cylinder-top',
	'material': 'src: url(' + img.pipe + ')'
});

var bulletBill = document.createElement('a-entity');

var bbHead = document.createElement('a-sphere');
setAttributes(bbHead, {
	'position': '-1 0 0',
	'color': color.black
});

var bbHeadCylinder = document.createElement('a-entity');
setAttributes(bbHeadCylinder, {
	'geometry': 'primitive: cylinder; radius:1; height: 0.5;',
	'material': 'color: ' + color.black,
	'rotation': '0 0 -90',
	'position': '-0.7 0 0'
});


var bbMid = document.createElement('a-entity');
setAttributes(bbMid, {
	'geometry': 'primitive: cylinder; radius: 0.9; height:0.5;',
	'material': 'color: ' + color.black,
	'rotation': '0 0 -90',
	'position': '-0.2 0 0'
});

var bbBack = document.createElement('a-entity');
setAttributes(bbBack, {
	'geometry': 'primitive: cylinder; radius:1; height: 0.5;',
	'material': 'color: ' + color.black,
	'rotation': '0 0 -90',
	'position': '0 0 0'
});


var treeContainer = document.createElement('a-entity');

var treeTrunk = document.createElement('a-entity');
setAttributes(treeTrunk, {
	'geometry': 'primitive: cylinder; height:2.1; radius: 0.15;',
	'position': '0 1 0',
	'material': 'color: ' + color.treeTrunk
});

var treeTop = document.createElement('a-entity');
setAttributes(treeTop, {
	'geometry': 'primitive: box; height: 2; width: 2; depth:2;',
	'position': '0 2.85 0',
	'material': 'color: ' + color.treeTop
});

var coin = document.createElement('a-entity');
setAttributes(coin, {
	'geometry': 'primitive: cylinder; height:0.1; radius:0.5;' ,
	'material': 'color: ' + color.ylw + '; side: double; src: url(' + img.coinTexture +');',
	'rotation': '-90 0 0'
})








