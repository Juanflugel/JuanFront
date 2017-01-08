(function(angular) {
  'use strict';
  
	angular.module('eStock.overview.panel',[])
	.component('viewPanel',{
	    templateUrl:'app_components/overview/overviewPanel.html',
	    controller : ['shop',overviewPanelController]
	})

	function overviewPanelController (shop){
		var ctrl = this;
		var query = {};

		ctrl.companyId = shop.getCompanyId() || 'RMB01';
		query.companyId = ctrl.companyId;
		query.itemType = 'BUCHSE';
		console.log(query);
		shop.items.query(query,function(data){
			ctrl.collection = data;
		})

		ctrl.createNewItem = function(){
			ctrl.obj = {};
			ctrl.newItem = true;
			ctrl.editItem = false;
		}

		ctrl.initNewAssembly = function(){
			ctrl.newAssembly = true;
		}

	}

})(window.angular);

