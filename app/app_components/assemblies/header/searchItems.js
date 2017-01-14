
angular.module('eStock.overview.searchItems',[])
.component('searchItems',{
    templateUrl:'app_components/assemblies/header/searchItems.html',
    controller : ['shop','auxiliarFuctions',searchItemsController],
    bindings:{
    	collectionSI:'=',
        currentlySelected :'=',
        startInsertItems:'='
    }
})


function searchItemsController (shop,auxiliarFuctions) {
	var ctrl = this;
    ctrl.companyId = shop.getCompanyId();
	ctrl.collectionSI = [];
    ctrl.filterBy = shop.getCompanyFilters();

    // ctrl.addPendingsAndAssembled = ctrl.parent.addPendingsAndAssembled;
	// FUNCTION TO SEARCH A ITEM BY CODE OR NAME FORM MAIN INPUT
	ctrl.queryByCodeOrName = function(){ 
        var query = {};
        ctrl.filterModel =''; // CLEAN THE OTHER MODEL
        ctrl.queryTag = '';
        query.companyId = ctrl.companyId || 'RMB01';
        query.string = ctrl.search;

        if (ctrl.search === '') return;
        else{
            shop.itemsCodeOrName.query(query,function (data){
                ctrl.collectionSI = data;
                ctrl.currentlySelected = [];
            	},function (error){
                        console.log(error);
                }
            ); 
        }     
    };
    ctrl.queryByFilter = function(){
        ctrl.search = '';
        var query = {};
        query.companyId = ctrl.companyId;
        query[ctrl.filterModel.queryObjKey] = ctrl.queryTag;
        shop.items.query(query,function (response){
            ctrl.collectionSI = response;
            ctrl.currentlySelected = [];
        },function (error){});

    };
}