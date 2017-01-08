angular.module('eStock.overview.newAssemblyHeader',[])
.component('newAssemblyHeader',{
	templateUrl:'app_components/overview/header/newAssemblyHeader.html',
	controller : ['shop','$mdDialog',newAssemblyHeaderController],
    require: {parent:'^viewPanel'},
    bindings:{
        collection:'=',
        newAssembly:'=',
        editItem:'=',
        newItem:'=',
        viewItem:'=',
        currentlySelected:'='
    }
});

function newAssemblyHeaderController (shop,$mdDialog){
    var ctrl = this;
    // A COLLECTION WITH ALL THE ITEMS THAT WILL BUILD THE ASSEMBLY
    ctrl.itemsForAssembly = [];

    ctrl.forgetAssembly = function(){
        ctrl.assembly = {};
        ctrl.itemsForAssembly = [];
        ctrl.currentlySelected = [];
        //_.map(ctrl.collection,function (obj){return obj.insert === false;});
        ctrl.newAssembly = false;
    };

    ctrl.insertItemsInAssembly = function(){
        Array.prototype.push.apply(ctrl.itemsForAssembly,ctrl.currentlySelected);
    };

    ctrl.createNewAssembly = function(newObj){
        newObj.companyId = shop.getCompanyId() || 'RMB01';
        newObj.assemblyItems = ctrl.itemsForAssembly;
        console.log(newObj);
        shop.assemblies.save(newObj,function (response){

            var alert = $mdDialog.alert({
                title:response.obj.assemblyNumber +' -- '+ response.obj.assemblyName,
                textContent:response.message,
                ok: 'Close'
            });

            $mdDialog.show( alert ).finally(function() {
                  alert = undefined;
                  ctrl.forgetAssembly();
            });

        }, function (error){})
    }
}