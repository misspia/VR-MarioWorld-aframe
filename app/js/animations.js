
var cloudAnimation = document.createElement('a-animation');
cloudAnimation.setAttribute('attribute', 'position')
cloudAnimation.setAttribute('repeat', 'indefinite');
cloudAnimation.setAttribute('direction', 'alternate');
cloudAnimation.setAttribute('easing', 'linear');
cloudAnimation.setAttribute('to', '-6 5 -7');
cloudAnimation.setAttribute('dur', '10000');


var blockAnimation = document.createElement('a-animation');
blockAnimation.setAttribute('attribute', 'position')
blockAnimation.setAttribute('repeat', 'indefinite');
blockAnimation.setAttribute('direction', 'alternate');
blockAnimation.setAttribute('easing', 'linear');
blockAnimation.setAttribute('to', '-6 5 -7');
blockAnimation.setAttribute('dur', '10000');
blockAnimation.setAttribute('begin', 'click');
