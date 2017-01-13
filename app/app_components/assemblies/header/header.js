angular.module('eStock.assemblies.header',[])
.component('aHeader',{
	templateUrl:'app_components/assemblies/header/header.html',
	controller : ['shop','auxiliarFuctions','$mdDialog',assemblyHeaderController],
    require: {parent:'^assembliesPanel'},
    bindings:{
       assemblies:'=',
       assemblyInfo:'='
    }
});

function assemblyHeaderController (shop){
    console.log('From header'); 
    var ctrl = this;

    	console.log(ctrl);
    	
    
}