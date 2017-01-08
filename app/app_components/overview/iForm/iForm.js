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

function iFormController (){
	
	
}