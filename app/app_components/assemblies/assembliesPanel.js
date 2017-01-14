(function(angular) {
  'use strict';

	angular.module('eStock.assemblies.panel',[])
	.component('assembliesPanel',{
		//transclude: true,
	    templateUrl:'app_components/assemblies/assembliesPanel.html',
	    controller : ['shop','$location','$anchorScroll',assembliesPanelController]
	});

	function assembliesPanelController (shop,$location,$anchorScroll) {
		console.log('From assemblies');
		var ctrl = this;

		ctrl.gotoHash = function(x) {
        var newHash = x;
        if ($location.hash() !== newHash) return $location.hash(x);
        else {        
            $anchorScroll();
        }
    	};

		// shop.assemblies.query({},function (response){
	 //    	ctrl.assemblies = response;
	 //        ctrl.progressBardisable = true;
	 //        ctrl.assemblyInfo = ctrl.assemblies[0];
  //   	})
	}

	
})(window.angular);