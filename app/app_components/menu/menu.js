function MenuController($mdSidenav,$timeout) {

    var ctrl = this;

    ctrl.toggleLeft = buildDelayedToggler('left');
    ctrl.toggleRight = buildToggler('right');

    ctrl.isOpenRight = function(){
        return $mdSidenav('right').isOpen();
    };

    function debounce(func, wait) {
        var timer;
        return function debounced() {
            var context = ctrl,
            args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     function buildDelayedToggler(navID) {
        return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
        .toggle()
        .then(function () {
            // $log.debug("toggle " + navID + " is done");
        });
    }, 200);
    }
    function buildToggler(navID) {
        return function() {
        // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
            .toggle()
            .then(function () {
            });
        };
    }
    ctrl.close = function () {
              // Component lookup should always be available since we are not using `ng-if`
              $mdSidenav('left').close()
              .then(function () {
                
            });
          };


      };


  angular.module('eStock.menu',[])
  .component('menuFrame',{
    templateUrl:'app_components/menu/menu.html',
    controller:MenuController
});