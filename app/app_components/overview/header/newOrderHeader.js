angular.module('eStock.overview.newOrderHeader',[])
.component('newOrderHeader',{
	templateUrl:'app_components/overview/header/newOrderHeader.html',
	controller : ['shop','$mdDialog',newOrderHeaderController],
    require: {parent:'^viewPanel'},
    bindings:{
        collection:'=',
        newOrder:'=',
        editItem:'=',
        newItem:'=',
        viewItem:'=',
        currentlySelected:'='
    }
});

function newOrderHeaderController (shop,$mdDialog){
    var ctrl = this;
    ctrl.companyId = shop.getCompanyId();
    var filters = shop.getCompanyFilters();
    ctrl.providers = filters[1].array;

    ctrl.forgetOrder = function(){
        ctrl.order = {};
        ctrl.newOrder = false;
        ctrl.formOrder.$setUntouched(true);
    };

    ctrl.queryByProvider = function(){
        ctrl.search = '';
        var query = {};
        query.companyId = ctrl.companyId;
        query.itemProvider = ctrl.order.provider;
        console.log(query);
         shop.items.query(query,function (response){
            ctrl.collection = response;
        },function (error){});
    }
}