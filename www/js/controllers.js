angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
	
	var locs = [ ["51.38254", "-2.362804"], ["51.235249", "-2.297804"], ["51.086126", "-2.210767"]]
	
	//var myLatLng = {lat: -25.363, lng: 131.044};
for (i = 0; i < locs.length; i++) {
	
	var marker="location"+i;
	     marker = new google.maps.Marker({
          position: new google.maps.LatLng(locs[i][0], locs[i][1]),
          map: $scope.map,
          title: 'Hello World!'
        }); 
};
  
	
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });
 
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
