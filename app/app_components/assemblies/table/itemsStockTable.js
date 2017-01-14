(function(angular) {
  'use strict';

	angular.module('eStock.assemblies.itemsStockTable',[])
	.component('itemsStockTable',{
		//transclude: true,
	    templateUrl:'app_components/assemblies/table/itemsStockTable.html',
	    controller : ['shop','auxiliarFuctions',itemsStockTableController],
	    require: {parent:'^assembliesPanel'},
	    bindings:{
	    	assemblyInfo:'=',
	    	collectionSI:'=',
	    	obj:'=', // obj related to the items
	    	startEditItem :'=',
	    	startInsertItems:'='
	    }
	});

	function itemsStockTableController (shop) {
		console.log('From table');
		var ctrl = this;
		ctrl.header = {itemCode:'Item Code',itemAmount:'Amount',itemName:'Item Name'};

		ctrl.order = function(predicate){
        ctrl.reverse = (ctrl.predicate === predicate) ? !ctrl.reverse : false;
        ctrl.predicate = predicate;
    	};

    	// FUNCTION TO CALL EVERY TIME THE USER CHECK OR UNCHECK A CHECKBOX
    	ctrl.filterSelectedItems = function(){
		        ctrl.currentlySelected = _.filter(ctrl.collectionSI,function (obj){
		            return obj.insert === true;
		        });
    	};



		
	}

	
})(window.angular);