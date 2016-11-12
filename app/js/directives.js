app.directive('aAssets', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: `
					<img id="sky" src="app/img/sky.png"> 
				    <img id="tex1" src="app/img/tex1.jpg">
				    <a-mixin id = "cube" geometry = "primitive: box" material = "color: #953163;" rotation = "0 45 0"></a-mixin>
			 	 `
	};
});