var map;
        var infowindow;
        
        function initMap() {
          if(localStorage.getItem("uname")==null)
          {
            alert("You cannot go back. Login once again with Valid Credentials");
            window.location = 'index.html'
          }
            var lati;
          var longi;
          var pyrmont=[];
          
          var localcount=localStorage.length-5;
          localcount=Math.round(localcount/2);
          var j;
          
          //for every coordinates in local storage create an array
          
          for (var i = 0; i < localcount-1; i=i+1){
               j=i*25;

               lati=parseFloat(localStorage.getItem("startLat"+j));
               longi=parseFloat(localStorage.getItem("startLng"+j));

               pyrmont[i] = {lat: lati, lng: longi};
               
          }
          
          
          mapOptions = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont[0],
            zoom: 6
          });
        
          //based on array created update the location markers by taking array values as source
          for (var i = 0; i < localcount-1; i=i+1){
          infowindow = new google.maps.InfoWindow();
        
          var service = new google.maps.places.PlacesService(mapOptions);
          
            console.log(pyrmont[i].lat);
            service.nearbySearch({
              location: pyrmont[i],
              radius: 50000,
              types: [localStorage.getItem("place")]
            }, callback);
          }
        }
        
        function callback(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var k = 0; k < results.length; k++) {
              console.log("Inside Call Back:"+k);
              createMarker(results[k]);
            }
          }
        }
        //Creating markers after finding the locations around the coordinates
        function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: mapOptions,
            position: place.geometry.location
          });
        
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent("Name: "+place.name+"; Rating: "+place.rating+"; Vicinity/Locality: "+place.vicinity);
            infowindow.open(mapOptions, this);
          });
        }
