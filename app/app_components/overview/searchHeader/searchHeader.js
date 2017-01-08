
angular.module('eStock.overview.searchHeader',[])
.component('searchHeader',{
    templateUrl:'app_components/overview/searchHeader/searchHeader.html',
    controller : ['shop',searchHeaderController],
    bindings:{
    	collection:'=',
        currentlySelected :'='
    }
})


function searchHeaderController (shop) {
	var ctrl = this;
	ctrl.collection = [];
	// FUNCTION TO SEARCH A ITEM BY CODE OR NAME FORM MAIN INPUT
	ctrl.queryByCodeOrName = function(){ 
        var query = {};
        ctrl.filterModel =''; // CLEAN THE OTHER MODEL
        ctrl.queryTag = '';
        query.companyId = ctrl.firmaId || 'RMB01';
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
                        // _.map(ctrl.collection,function (item){
                        //   return handleProjects.orderObjectsForOrder(item);                                            
                        // });   
            	},function (error){
                        console.log(error);
                }); 
        }     
    };
}