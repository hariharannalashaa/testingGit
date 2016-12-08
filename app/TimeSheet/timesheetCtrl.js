var timesheetCtrl = function(TimeSheetFactory,timeSheetData,projects,tasks){
    
    var that = this;
    var currentDate = new Date();
    that.displayMonth = currentDate.getMonthName();
    that.timeSheet = {};
    that.projects = angular.copy(timeSheetData.distinctProjects);
    that.projectlist = angular.copy(projects);
    that.taskList = angular.copy(tasks);
    that.totalHours = {};
    that.approveMatrix = {};
    that.submittedMatrix = {};
    
    generateDateForMonth();
    processTimeSheetData();
    
    function processTimeSheetData(){
        for(var key in timeSheetData.work){
            for(var i = 0 ; i < timeSheetData.work[key].length; i++){
                that.projects[timeSheetData.work[key][i].index-1].times[key].hoursSpent = timeSheetData.work[key][i].hoursSpent;
            }
        }
    }
    
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
            var key = date.format("YYYY-MM-DD");
            var columns = {
                displayDate : date.format("DD"),
            }
            that.timeSheet[key] = columns;
        }
        for(var i = 0 ; i < that.projects.length; i++){
            that.projects[i].times = angular.copy(that.timeSheet);
        }
        that.totalHours = angular.copy(that.timeSheet);
        that.approveMatrix = angular.copy(that.timeSheet);
        that.submittedMatrix = angular.copy(that.timeSheet);
    }
    
    
    angular.extend(this, {
       "changeMonth" : changeMonth
    });
};

angular
    .module('timeSheet')
    .controller('timesheetCtrl', timesheetCtrl );