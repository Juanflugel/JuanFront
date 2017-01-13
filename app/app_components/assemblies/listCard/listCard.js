angular.module('eStock.assemblies.listCard',[])
.component('listCard',{
	templateUrl:'app_components/assemblies/listCard/listCard.html',
	controller : ['shop','auxiliarFuctions','$mdDialog',assemblyListCardController],
    require: {parent:'^assembliesPanel'},
    bindings:{
        assemblies:'=',
        assemblyInfo:'=',
        collection:'='
    }
});

function assemblyListCardController (shop){
    console.log('listCard');
    var ctrl = this;
    ctrl.progressBardisable = false;
    
    shop.assemblies.query({},function (response){
            ctrl.assemblies = response;
            ctrl.progressBardisable = true;
            ctrl.assemblyInfo = ctrl.assemblies[0];
            ctrl.collection = ctrl.assemblyInfo.assemblyItems;
            console.log(ctrl.collection);
        })
}