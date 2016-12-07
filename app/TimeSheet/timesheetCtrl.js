var timesheetCtrl = function(TimeSheetFactory,timeSheetData,projects,tasks){
    
    var that = this;
    var currentDate = new Date();
    that.displayMonth = currentDate.getMonthName();
    that.timeSheet = {};
    generateDateForMonth();
    that.projects = timeSheetData.distinctProjects;
    that.projectlist = projects;
    that.taskList = tasks;
    
    function changeMonth(forward){
        if(forward){
            currentDate.setMonth(currentDate.getMonth()+1);
            that.displayMonth = currentDate.getMonthName();
            generateDateForMonth();
        } else {
            currentDate.setMonth(currentDate.getMonth()-1);
            that.displayMonth = currentDate.getMonthName();
            generateDateForMonth();
        }
    }
    
    function generateDateForMonth(){
        var currDate = new Date(currentDate);
        var firstDay = new Date(currDate.setDate(1));
        var lastDay = new Date(currDate.setMonth(currDate.getMonth()+1));
        that.timeSheet = {};
        lastDay.setDate(0);
        for(var i = firstDay ; i <= lastDay ; i.setDate(i.getDate()+1)){
            var date = moment(i);
            var key = date.format("DD-MM-YYYY");
            var column = {
                displayDate : date.format("DD"),
                times : [1,2,3]
            }
            that.timeSheet[key] = column;
        }
    }
    
    
    angular.extend(this, {
       "changeMonth" : changeMonth
    });
};

angular
    .module('timeSheet')
    .controller('timesheetCtrl', timesheetCtrl );