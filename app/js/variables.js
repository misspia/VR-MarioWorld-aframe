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

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

function block(block, img){
	setAttributes(block, {
		'mixin': 'cube',
		'material': 'color: #ffce55; src: url(' + img + ')'
	});
};