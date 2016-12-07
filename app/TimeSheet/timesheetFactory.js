function TimeSheetFactory($http) {
 var TimeSheetFactory = {};

 TimeSheetFactory.getEducationDetails = function(username) {
  return $http.get('Doctor-Core/dataeducation/'+username).then(
    function(response) {
     return response.data;
    });
 };
    
 TimeSheetFactory.getTimeSheet = function(username) {
  return $http.get('/resources/json/timesheet.json').then(
    function(response) {
     return response.data;
    });
 };
    
TimeSheetFactory.getProjects = function(username) {
  return $http.get('/resources/json/projects.json').then(
    function(response) {
     return response.data;
    });
 };
    
TimeSheetFactory.getTasks = function(username) {
  return $http.get('/resources/json/tasks.json').then(
    function(response) {
     return response.data;
    });
 };

 return TimeSheetFactory;
}

angular.module('timeSheet').factory('TimeSheetFactory', TimeSheetFactory);