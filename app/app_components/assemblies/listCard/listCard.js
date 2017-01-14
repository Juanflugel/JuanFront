angular.module('eStock.assemblies.listCard',[])
.component('listCard',{
	templateUrl:'app_components/assemblies/listCard/listCard.html',
	controller : ['shop','$mdDialog',assemblyListCardController],
    require: {parent:'^assembliesPanel'},
    bindings:{
        assemblies:'=',
        assemblyInfo:'=',
        collection:'='
    }
});

function assemblyListCardController (shop,$mdDialog){
   

    console.log('listCard');
    var ctrl = this;
    

    ctrl.progressBardisable = false;
    
    shop.assemblies.query({},function (response){
            ctrl.assemblies = response;
            ctrl.progressBardisable = true;
            ctrl.assemblyInfo = ctrl.assemblies[0];
            ctrl.collection = ctrl.assemblyInfo.assemblyItems;
            
    });

    ctrl.showAssemblyDetails = function(obj){
        ctrl.assemblyInfo = obj
        ctrl.collection = ctrl.assemblyInfo.assemblyItems;
    };

    ctrl.editAssembly = function (assembly){
        ctrl.Objassembly = assembly;
        ctrl.editAssemblyInfo = true;
        ctrl.parent.gotoHash('top');
    };
    
    ctrl.forgetEditAssembly = function(){
        ctrl.Objassembly = {};
        ctrl.editAssemblyInfo = false;
    };

    ctrl.pushSubAssembly = function(subObj){
        ctrl.Objassembly.subAssemblies.push(subObj);
        ctrl.subObj = {};
    };

    ctrl.pullSubAssembly = function(subObj,ev) {

        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete this Subassembly?')
          .textContent(subObj.subAssemblyNumber)
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Confirm')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
        var subIndex = ctrl.Objassembly.subAssemblies.indexOf(subObj);
        ctrl.Objassembly.subAssemblies.splice(subIndex,1);
        },function(){
            console.log('ni verga primo');
        });

        
    }
}