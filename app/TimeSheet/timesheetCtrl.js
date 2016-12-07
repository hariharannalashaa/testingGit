var timesheetCtrl = function(){
    
    var that = this;
    
    var currentDate = new Date();
    that.displayMonth = currentDate.getMonthName();
    
    
    
    angular.extend(this, {
       
    });
};

angular
    .module('timeSheet')
    .controller('timesheetCtrl', timesheetCtrl );