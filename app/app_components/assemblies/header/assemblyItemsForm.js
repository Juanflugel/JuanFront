(function(angular) {
  'use strict';

	angular.module('eStock.assemblies.assemblyItemsForm',[])
	.component('assemblyItemsForm',{
		//transclude: true,
	    templateUrl:'app_components/assemblies/header/assemblyItemsForm.html',
	    controller : ['shop',assemblyItemsFormController],
	    bindings:{
	    	obj:'=', // obj related to the items
	    	subACol:'=',
	    	startEditItem:'='
	    }
	});

	function assemblyItemsFormController (){
		var ctrl = this;
		//to guarantee that when user select a vaule from subassemblies the other value is automatic setted
		ctrl.setOtherValue = function(subObj){ 
	        var currentSubAssemblyObj = {};

	        if(subObj.subAssemblyNumber){
	            currentSubAssemblyObj =_.find(ctrl.subACol,function (i){
	                return i.subAssemblyNumber === subObj.subAssemblyNumber;
	            });
	            ctrl.obj.subAssemblyName = currentSubAssemblyObj.subAssemblyName;
	        }

	        if(subObj.subAssemblyName){
	            currentSubAssemblyObj =_.find(ctrl.subACol,function (i){
	                return i.subAssemblyName === subObj.subAssemblyName;
	            });
	            ctrl.obj.subAssemblyNumber = currentSubAssemblyObj.subAssemblyNumber;
	        }       
       
    };

	}

})(window.angular);