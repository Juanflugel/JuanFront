angular.module('eStock.overview.newOrderHeader',[])
.component('newOrderHeader',{
	templateUrl:'app_components/overview/header/newOrderHeader.html',
	controller : ['shop','auxiliarFuctions','$mdDialog',newOrderHeaderController],
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

function newOrderHeaderController (shop,auxiliarFuctions,$mdDialog){
    var ctrl = this;
    ctrl.itemsToOrder = []; // HOLD ALL ITEMS BEFORE THE ORDER IS CREATED
    ctrl.companyId = shop.getCompanyId();
    var filters = shop.getCompanyFilters();
    ctrl.providers = filters[1].array;

    ctrl.forgetOrder = function(){
        ctrl.order = {};
        ctrl.newOrder = false;
        auxiliarFuctions.resetCollection(ctrl.collection); // JUST TO SET THE INSERT PROPERTY TO FALSE AGAIN
        ctrl.formOrder.$setUntouched(true);
    };

    ctrl.queryByProvider = function(){
        ctrl.search = '';
        ctrl.filterModel =''; // CLEAN THE OTHER MODEL
        ctrl.queryTag = '';
        var query = {};
        query.companyId = ctrl.companyId;
        query.itemProvider = ctrl.order.provider;
        console.log(query);
         shop.items.query(query,function (response){
            ctrl.collection = response;
        },function (error){});
    };

    ctrl.addItemsToOrder = function(){
         Array.prototype.push.apply(ctrl.itemsToOrder,ctrl.currentlySelected);
         ctrl.currentlySelected = [];
         auxiliarFuctions.resetCollection(ctrl.collection); // JUST TO SET THE INSERT PROPERTY TO FALSE AGAIN
    };

    ctrl.createNewOrder = function (obj){
        obj.orderedItems = ctrl.itemsToOrder;
        console.log(obj);
    };
}