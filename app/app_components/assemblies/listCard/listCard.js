angular.module('eStock.assemblies.listCard',[])
.component('listCard',{
	templateUrl:'app_components/assemblies/listCard/listCard.html',
	controller : ['shop','auxiliarFuctions','$mdDialog',assemblyListCardController],
    require: {parent:'^assembliesPanel'},
    bindings:{
        
    }
});

function assemblyListCardController (shop){
    console.log('listCard');
    var ctrl = this;

    shop.assemblies.query({},function (response){
    	ctrl.assemblies = response;
    })
}