(function(angular) {
  'use strict';

	angular.module('eStock.assemblies.panel',[])
	.component('assembliesPanel',{
		transclude: true,
	    templateUrl:'app_components/assemblies/assembliesPanel.html',
	    controller : ['shop','$timeout','auxiliarFuctions',assembliesPanelController]
	});

	function assembliesPanelController () {
		console.log('From assemblies');
	}

	
})(window.angular);