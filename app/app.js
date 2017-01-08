angular.module('eStockFront',[
	'ngMaterial',	'ui.router','ngSanitize', 'ngCsv',
  'services',
  'eStock.menu',
  'eStock.overview.panel','eStock.overview.searchHeader','eStock.overview.iTable','eStock.overview.iForm','eStock.overview.newAssemblyHeader'

  ])

.run(['shop','$rootScope',function (shop,$rootScope){

  var firmaId = "RMB01";

  shop.company.query({companyId:firmaId}, function (data){
        console.log('from run',data[0]);
        shop.passCompanyInfo(data[0]);
        $rootScope.$broadcast("companyInfoAvailable");
    });

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