(function(angular) {
  'use strict';

angular.module('eStock.overview.iForm',[])
.component('iForm',{
	templateUrl:'app_components/overview/iForm/iForm.html',
	controller : ['shop','$mdDialog',iFormController],
    require: {parent:'^viewPanel'},
    bindings:{
        collection:'=',
        editItem:'=',
        newItem:'=',
        obj:'=',
        justInfo:'=',
        viewItem:'='
    }
});

function iFormController (shop,$mdDialog){
	var ctrl = this;
    ctrl.$onInit = function(){
       console.log(ctrl.parent);
       ctrl.providersList = ctrl.parent.filterBy[1].array;
       ctrl.assembliesList = ctrl.parent.filterBy[3].array;
   };

    ctrl.updateObj = function(obj,ev){
        var id = obj._id;
        shop.items.update({_id:id},obj,function (response){

            var alert = $mdDialog.alert()
                  .title(response.message)
                  .textContent(obj.itemCode +' -- '+obj.itemName)
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Ok')

                   $mdDialog.show( alert ).finally(function() {
                      alert = undefined;
                    });   
                
            ctrl.editItem = false;               
        },function (error){
            console.log('error : '+ error.status +" "+ error.statusText);
        });
    };

    
	
}

})(window.angular);