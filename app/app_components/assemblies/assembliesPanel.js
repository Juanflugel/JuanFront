(function(angular) {
  'use strict';

	angular.module('eStock.assemblies.panel',[])
	.component('assembliesPanel',{
		//transclude: true,
	    templateUrl:'app_components/assemblies/assembliesPanel.html',
	    controller : ['shop','$timeout','auxiliarFuctions',assembliesPanelController]
	});

	function assembliesPanelController (shop) {
		console.log('From assemblies');
		var ctrl = this;

		// shop.assemblies.query({},function (response){
	 //    	ctrl.assemblies = response;
	 //        ctrl.progressBardisable = true;
	 //        ctrl.assemblyInfo = ctrl.assemblies[0];
  //   	})
	}

	
})(window.angular);