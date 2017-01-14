angular.module('eStock.assemblies.header',[])
.component('aHeader',{
	templateUrl:'app_components/assemblies/header/header.html',
	controller : ['shop','auxiliarFuctions','$mdDialog',assemblyHeaderController],
    require: {parent:'^assembliesPanel'},
    bindings:{
       assemblies:'=',
       assemblyInfo:'=',
       subACol:'=',
       startInsertItems:'='
    }
});

function assemblyHeaderController (shop){
    console.log('From header'); 
    var ctrl = this;

    ctrl.newItem = function(){
      console.log('gehts');
      ctrl.startInsertItems = true;
    };

    	
    
}