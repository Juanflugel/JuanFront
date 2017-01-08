angular.module('services', ['ngResource'])

.factory('Config', function () {
  return {
      version : '0.0.1',
      ip: 'localhost', // localhost www.estock.website
      port:3000,
      protocol: 'http',
      api:'/api'
  };
})

.factory('shop',['$resource', 'Config', function ContenidoFactory($resource, Config){
    var totalCompanyInfo = {};
    var companyEmployees = [];
    var companyProviders = [];
    var companyFilters = [];
    var companyId ;
    var root = 'http://' + Config.ip + ':' + Config.port  + Config.api;//
  return {
    
    // request to the API
    items: $resource(root +'/items',{},{ update: {method: 'PUT'}}), // VERIFIED
    itemIncrement:$resource(root +'/increment',{},{ update: {method: 'PUT'}}),
    itemsCodeOrName: $resource(root +'/itemsCodeOrName',{}),// VERIFIED con regular expresions
    projects:$resource(root + '/projects',{},{ update: {method: 'PUT'}}),
    projectRequiredAmounts:$resource('http://' + Config.ip + ':' + Config.port + '/requiredAmounts',{}),
    projectGeneralView:$resource('http://' + Config.ip + ':' + Config.port + '/projectGeneralView',{}),
    // is a function to perform update operations in the items array embedded in projects
    itemsInProject:$resource('http://' + Config.ip + ':' + Config.port + '/itemsInproject',{},{ update: {method: 'PUT'}}),

    assemblies:$resource(root + '/assemblies',{},{ update: {method: 'PUT'}}), // VERIFIED
    company: $resource(root + '/company',{}),
    companyInfoUpdate:$resource('http://' + Config.ip + ':' + Config.port + '/company',{},{ update: {method: 'PUT'}}),
    companyFiltersUpdate:$resource('http://' + Config.ip + ':' + Config.port + '/companyFilters',{},{ update: {method: 'PUT'}}),
    users:$resource(root + '/users',{}),
    usersUpdate:$resource(root+ '/users',{},{ update: {method: 'PUT'}}),
    orders :$resource(root + '/orders',{}),
    ordersUpdate :$resource(root + '/orders',{},{ update: {method: 'PUT'}}),
    totalInsertedAndPending :$resource(root + '/totalInsertedAndPending',{}),
    downloadPendings :$resource(root + '/pendings',{}),
    // request to the APIs
    // company Information
    passCompanyInfo: function(objCompany){
      totalCompanyInfo = objCompany;
      companyFilters = totalCompanyInfo.companyItemFilters;
      companyProviders = totalCompanyInfo.companyProviders;
      companyEmployees = totalCompanyInfo.companyUsers;
      companyId = totalCompanyInfo.companyId;
    },
    getCompanyId:function(){
      return companyId;
    },
    getCompanyProviders:function(){
      return companyProviders;
    },
    getCompanyEmployees:function(){
      return companyEmployees;
    },
    getCompanyFilters:function(){
      return companyFilters;
    },
    getTotalCompanyInfo:function(){
      return totalCompanyInfo;
    }

  };
}]);