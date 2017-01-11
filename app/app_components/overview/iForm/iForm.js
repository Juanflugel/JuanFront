angular.module('eStock.overview.iForm',[])
.component('iForm',{
	templateUrl:'app_components/overview/iForm/iForm.html',
	controller : ['shop',iFormController],
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

function iFormController (shop){
	var ctrl = this;
    
    ctrl.updateObj = function(obj){
        var id = obj._id;
        shop.items.update({_id:id},obj,function (response){
            alert(response.message);      
                ctrl.editItem = false;               
            },function (error){
            console.log('error : '+ error.status +" "+ error.statusText);
        });
    };
	
}