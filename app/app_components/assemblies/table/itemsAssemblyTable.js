(function(angular) {
  'use strict';

	angular.module('eStock.assemblies.itemsAssemblyTable',[])
	.component('itemsAssemblyTable',{
		//transclude: true,
	    templateUrl:'app_components/assemblies/table/itemsAssemblyTable.html',
	    controller : ['shop','auxiliarFuctions',itemsAssemblyTableController],
	    require: {parent:'^assembliesPanel'},
	    bindings:{
	    	assemblyInfo:'=',
	    	collection:'=',
	    	obj:'=', // obj related to the items
	    	startEditItem :'='
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

    	ctrl.editItemInAssembly = function(obj){
    		ctrl.obj = obj;
    		ctrl.startEditItem = true;
    		ctrl.parent.gotoHash('top');
    	}

		
	}

	
})(window.angular);