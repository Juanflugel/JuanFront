angular.module('eStockFront',[
	'ngMaterial',	'ui.router','ngSanitize', 'ngCsv',
  'services','auxiliarFuctions',
  'eStock.menu',
  'eStock.overview.panel','eStock.overview.searchHeader','eStock.overview.iTable','eStock.overview.iForm',
  'eStock.overview.newAssemblyHeader','eStock.overview.newOrderHeader',
  'eStock.assemblies.panel','eStock.assemblies.listCard'

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
  
    $urlRouterProvider.otherwise("app/Overview");
    // Now set up the states
    $stateProvider
    .state('app', {
            abstract: true,
            url: '/app',
            template: '<menu-frame></menu-frame>'
    })
    .state('app.Overview',{
          url:'/Overview',
          template:'<view-panel></view-panel>'
    })
    .state('app.Assemblies',{
          url:'/Assemblies',
          template:'<assemblies-panel></assemblies-panel>'
    })
}])
.directive('contenteditable', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                // view -> model
                elm.bind('blur', function() {
                    scope.$apply(function() {
                        ctrl.$setViewValue(elm.html());
                    });
                });

                // model -> view
                ctrl.$render = function() {
                    elm.html(ctrl.$viewValue);
                };
            }
        };
})