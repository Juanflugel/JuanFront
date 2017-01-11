
angular.module('eStock.overview.searchHeader',[])
.component('searchHeader',{
    templateUrl:'app_components/overview/searchHeader/searchHeader.html',
    controller : ['shop','auxiliarFuctions',searchHeaderController],
    require: {parent:'^viewPanel'},
    bindings:{
    	collection:'=',
        currentlySelected :'=',
    }
})


function searchHeaderController (shop,auxiliarFuctions) {
	var ctrl = this;
    ctrl.companyId = shop.getCompanyId();
	ctrl.collection = [];
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
                ctrl.collection = data;
                ctrl.currentlySelected = [];

                if (ctrl.dashBoard === true){
                    var codesArray = handleProjects.getJustCode(ctrl.collection);
                    codesArray.push('0');
                    ctrl.addInsertedAndPendingsAmounts(codesArray);
                }
                                
                var arrayCodes = auxiliarFuctions.getJustCodes(ctrl.collection);                
                ctrl.parent.addPendingsAndAssembled(query,arrayCodes); 
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
            ctrl.collection = response;
            ctrl.currentlySelected = [];
            var arrayCodes = auxiliarFuctions.getJustCodes(ctrl.collection);                
            ctrl.parent.addPendingsAndAssembled(query,arrayCodes); 
        },function (error){});

    };
}