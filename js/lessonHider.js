angular.module("directivePractice")
     .directive("lessonHider", function () {
          return {
               templateUrl: "./../views/lessonHider.html",
               restrict: 'E',
               scope: {
                    lesson: '=',
                    dayAlert: '&'
               },
               controller: function ($scope, mainSrv) {
                    $scope.getSchedule = mainSrv.getSchedule();
               },
               link: function (scope, elements, attributes) {
                    scope.getSchedule.then(function (response) {
                         scope.schedule = response.data;

                         // scope.schedule.forEach(function (sheduleDay) {
                         //      if (scheduleDay.lesson === scope.lesson) {
                         //           element.css('text-decoration', 'line-through');
                         //           return;
                         //      }
                         });
                    
               }
          }
     });