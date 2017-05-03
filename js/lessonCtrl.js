angular.module("directivePractice").controller("lessonCtrl", function ($scope, mainSrv) {
     
     $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

     $scope.getSchedule = mainSrv.getSchedule();


     function announceDay(lesson, day) {
          alert(lesson + ' is active on ' + day + '.')
     }


});