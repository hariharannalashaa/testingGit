angular.module('timeSheet',
 [
    'ui.router',
    'oc.lazyLoad'
   ]).config(function($ocLazyLoadProvider,$stateProvider,$urlRouterProvider){
    
        $urlRouterProvider.otherwise('/timesheet');
    
        $stateProvider.state('login',{
            url: '/logina',
            templateUrl: '/app',
            controller:'',
            controllerAs:'',
            resolve:{
                dependancies:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        '/app/ratingPage/',
                        '/app/ratingPage/',
                        '/app/ratingPage/'
                    ]);
                }
            }
        });
        
        $stateProvider.state('timesheet',{
            url: '/timesheet',
            templateUrl: '/app/TimeSheet/timesheet.html',
            controller:'timesheetCtrl',
            controllerAs:'viewObj',
            resolve:{
                dependancies:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        '/app/TimeSheet/timesheetCtrl.js'
                        ]);
                }
            }
        });
 });

angular.module('timeSheet')
.run( function($rootScope){
     $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
          event.preventDefault();
          return $state.go('error');
        });
    $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
            // do something
        });
});


// General Code 
Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

Date.prototype.getMonthName = function() {
    return this.monthNames[this.getMonth()];
};
