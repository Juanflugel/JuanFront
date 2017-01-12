(function(angular) {
  'use strict';

angular.module('eStock.overview.iTable',[])
.component('iTable',{
	templateUrl:'app_components/overview/iTable/iTable.html',
	controller : ['shop','$mdDialog',iTableController],
    require: {parent:'^viewPanel'},
    bindings:{
        collection:'=',
        editItem:'=',
        newItem:'=',
        obj:'=',
        justInfo:'=',
        viewItem:'=',
        newAssembly:'=',
        newOrder:'=',
        currentlySelected:'='
    }
});

function iTableController (shop,$mdDialog){
    var ctrl = this;
    // FUNCTION TO ORDER BY EVERY COLUMN IN THE TABLE
    ctrl.order = function(predicate){
        ctrl.reverse = (ctrl.predicate === predicate) ? !ctrl.reverse : false;
        ctrl.predicate = predicate;
    };

    // SETTING TABLE HEADER
    ctrl.header = {itemCode:'Item Code',itemAmount:'Stock',neto:'Neto',insertedAmount:'Assembled',totalPendingAmount:'Pending',itemType:'Type',itemName:'Name'};

    // BUTTONS FUNCTIONALITIES
    ctrl.editObj = function(obj){
        ctrl.editItem = true;
        obj.itemLastDate = new Date(obj.itemLastDate);
        ctrl.obj = obj;
    };

    ctrl.readObj = function(obj){
        ctrl.editItem = false;
        ctrl.newItem = false;
        ctrl.justInfo = true;
        ctrl.viewItem = true;
        obj.itemLastDate = new Date(obj.itemLastDate);
        ctrl.obj = obj;
        
    };
    // COLLECTION TO FILTER THE ITEMS THAT THE USER CHECK
    ctrl.currentlySelected = [];

    // FUNCTION TO CALL EVERY TIME THE USER CHECK OR UNCHECK A CHECKBOX
    ctrl.filterSelectedItems = function(){
        ctrl.currentlySelected = _.filter(ctrl.collection,function (obj){
            return obj.insert === true;
        })
    };


    ctrl.deleteObj = function(obj,ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete this item ?')
          .textContent(obj.itemCode +' -- '+obj.itemName)
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Confirm')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
        console.log('confirmo');
    },function(){
        console.log('ni verga primo');
    });

          
  };
    
}

})(window.angular);