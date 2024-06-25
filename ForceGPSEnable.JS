// Check if the browser supports geolocation
if ("geolocation" in navigator) {
  // Request permission for geolocation
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function(position) {
      // Do something with the obtained position
      console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    },
    // Error callback
    function(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          // The user denied the request for geolocation
          console.log("User denied the request for geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          // The position of the device couldn't be determined
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          // The request to get user location timed out
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          // An unknown error occurred
          console.log("An unknown error occurred.");
          break;
      }
    }
  );
} else {
  // Geolocation is not supported by this browser
  console.log("Geolocation is not supported by this browser.");
}
