(function(angular) {
  'use strict';

	angular.module('eStock.assemblies.itemsAssemblyTable',[])
	.component('itemsAssemblyTable',{
		//transclude: true,
	    templateUrl:'app_components/assemblies/table/itemsAssemblyTable.html',
	    controller : ['shop','$timeout','auxiliarFuctions',itemsAssemblyTableController],
	    require: {parent:'^assembliesPanel'},
	    bindings:{
	    	assemblyInfo:'=',
	    	collection:'='
	    }
	});

	function itemsAssemblyTableController (shop) {
		console.log('From table');
		var ctrl = this;
		ctrl.header = {itemCode:'Item Code',itemAmount:'Amount',itemName:'Item Name'};

		ctrl.order = function(predicate){
        ctrl.reverse = (ctrl.predicate === predicate) ? !ctrl.reverse : false;
        ctrl.predicate = predicate;
    	};

    	console.log(ctrl);

		
	}

	
})(window.angular);