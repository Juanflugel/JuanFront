(function(angular) {
  'use strict';
  
	angular.module('eStock.overview.panel',[])
	.component('viewPanel',{
		transclude: true,
	    templateUrl:'app_components/overview/overviewPanel.html',
	    controller : ['shop','$timeout','auxiliarFuctions',overviewPanelController]
	})

	function overviewPanelController (shop,$timeout,auxiliarFuctions){
		var ctrl = this;
		ctrl.companyId = shop.getCompanyId();
		ctrl.filterBy = shop.getCompanyFilters();

		ctrl.addPendingsAndAssembled = function(query,arrayCodes){
			query.codesArray = arrayCodes;
			query.projectState = 'OPEN';
			shop.totalInsertedAndPending.query(query,function (data){
            auxiliarFuctions.addResumeInsertedAndPending(ctrl.collection,data);

	        },function (error){
	            console.log(error);
	        });
		};

		ctrl.queryItems = function(){
			var query = {};
			query.companyId = ctrl.companyId;
			query.itemType = 'BUCHSE';
			console.log(query);
			shop.items.query(query,function(data){
				ctrl.collection = data;
				ctrl.currentlySelected = [];
				var arrayCodes = auxiliarFuctions.getJustCodes(ctrl.collection);				
				ctrl.addPendingsAndAssembled(query,arrayCodes)
			});
		};

		ctrl.queryItems();		

		ctrl.createNewItem = function(){
			ctrl.obj = {};
			ctrl.newItem = true;
			ctrl.editItem = false;
		}

		ctrl.initNewAssembly = function(){
			ctrl.newItem = false;
			ctrl.editItem = false;
			ctrl.viewItem = false;
			ctrl.newOrder = false;
			ctrl.newAssembly = true;
		}

		ctrl.triggerClick = function(){
        	$timeout(function() {angular.element('#csvDownloadTag').triggerHandler('click');}, 0);
    	};

		ctrl.downloadCsv = function(){
			var query = {};
			query.companyId = ctrl.companyId;
			query.projectState = 'OPEN';
			shop.downloadPendings.get(query,function (response){
            ctrl.toDownload = auxiliarFuctions.normalizeData(response.data);          
            ctrl.triggerClick();           
        	},function (error){
        		console.log(error);
        	});
		};

		ctrl.initNewOrder = function(){
			ctrl.newAssembly = false;
			ctrl.newItem = false;
			ctrl.editItem = false;
			ctrl.viewItem = false;
			ctrl.newOrder = true;
		};



	}

})(window.angular);

