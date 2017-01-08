angular.module('eStockFront',[
	'ngMaterial',	'ui.router','services',
  'eStock.menu',
  'eStock.overview.panel','eStock.overview.searchHeader','eStock.overview.iTable','eStock.overview.iForm','eStock.overview.newAssemblyHeader'

  ])

.controller('monda',['$scope',function ($scope){
	console.log('coman monda');
}])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.otherwise("app/overview");
    // Now set up the states
    $stateProvider
    .state('app', {
            abstract: true,
            url: '/app',
            template: '<menu-frame></menu-frame>'
    })
    .state('app.overview',{
          url:'/overview',
          template:'<view-panel></view-panel>'
    })
}]);