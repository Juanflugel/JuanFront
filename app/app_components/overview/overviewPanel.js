(function(angular) {
  'use strict';
  
	angular.module('eStock.overview.panel',[])
	.component('viewPanel',{
	    templateUrl:'app_components/overview/overviewPanel.html',
	    controller : ['shop','$timeout',overviewPanelController]
	})

	function overviewPanelController (shop,$timeout){
		var ctrl = this;
		ctrl.companyId = shop.getCompanyId();
			

		ctrl.queryItems = function(){
			var query = {};
			query.companyId = ctrl.companyId;
			query.itemType = 'BUCHSE';
			console.log(query);
			shop.items.query(query,function(data){
				ctrl.collection = data;
			});
		};

		ctrl.queryItems();		

		ctrl.createNewItem = function(){
			ctrl.obj = {};
			ctrl.newItem = true;
			ctrl.editItem = false;
		}

		ctrl.initNewAssembly = function(){
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
            //ctrl.toDownload = handleProjects.orderFromCollection(response.data);
            console.log(response);
            ctrl.toDownload = response.data;
            ctrl.triggerClick();           
        	},function (error){});
		}

	}

})(window.angular);

