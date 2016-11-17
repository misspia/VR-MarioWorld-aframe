
cloudContainer.setAttribute('position', '6 5 -7');
mysteryBlock.setAttribute('position', '-3 3 -5');
brickBlock.setAttribute('position', '-4 3 -5');
exclamBlock.setAttribute('position', '-2 3 -5');
usedBlock.setAttribute('position', '-1 3 -5');
pipeContainer.setAttribute('rotation', '0 40 0');
bulletBill.setAttribute('position', '0 6 -7');
treeContainer.setAttribute('position', '2 0 -7');
coin.setAttribute('position', '0 1 -2');





cloudItemBody.appendChild(cloudEyeRight);
cloudItemBody.appendChild(cloudEyeLeft);

cloudContainer.appendChild(cloudItemBody);
cloudContainer.appendChild(cloudItemSideRight);
cloudContainer.appendChild(cloudItemSideLeft);
cloudContainer.appendChild(cloudAnimation);

scene.appendChild(cloudContainer);

treeContainer.appendChild(treeTop);
treeContainer.appendChild(treeTrunk);
scene.appendChild(treeContainer);

bulletBill.appendChild(bbHead);
bulletBill.appendChild(bbHeadCylinder);
bulletBill.appendChild(bbMid);
bulletBill.appendChild(bbBack);
scene.appendChild(bulletBill);

pipeContainer.appendChild(pipeTop);
pipeContainer.appendChild(pipeBottom);

scene.appendChild(skyDay);
scene.appendChild(grass);
scene.appendChild(dirt);
scene.appendChild(pipeContainer);
scene.appendChild(mysteryBlock);

brickBlock.appendChild(blockAnimation);

scene.appendChild(brickBlock);
scene.appendChild(exclamBlock);
scene.appendChild(usedBlock);
scene.appendChild(coin);
