# HackathonFall2015
AdKnowledge Usecase I
Steps to Use the App:

***Initially, user should open index.html

#REGISTER SCENARIO:
1) A user can register by providing FirstName, Last Name, Password and Email ID/User ID.
2) Unless untill user provides all the details, one cannot register to application.

#LOGIN SCENARIO:
1) Registered user have to provide valid email ID as User ID and password which he provided while registering.
2) Until the user provide valid email ID and password, one cannot login to application.

#Route Maps Page:
1) One can provide the Source and Destination to which he/she wants to have a trip.
2) After clicking Get Route, one can see the route between the source and destination.
3) User can also select the modes of travel between the locations.
4) In transit mode user can even see the timings of transit and when and where he can board for it.

#Street View:
1) One can click on Source/Destination Street View button to see the street view of the locations so that if the user is new to that locaion they can get familiar with the locality and where they are.

#Weather Module:
1) Once searched for the locations and directions, one can see the weather conditions of both the Source and Destination to the bottom of the Maps Page.

#Directions List:
1) One can even see the directions list from source and destination to the bottom of the same Maps Page.

#Places Between:
1) Once user searched for the locations and directions, one can select the drop down for the type of the place the user wannts to search and click on Places in between.
2) This action will navigate the user to a Map where the route between the source and destination will be filled with markers of particular type of place.
3) User can even click on the marker to see the name of the location and address of it.

#Technologies Used:
HTML
Angular JS for Javascript
Mongo Lab(https://mongolab.com/) - for Login and User Credentials Database
LocalStorage of HTML5 for session credentials(one cannot navigate back after logout from application)

#Approach for the Solution:
1) API's Used: GOOGLE MAPS API, GOOGLE PLACES API
2) Once the route is getting calculated between source and destination, we have saved some latitudes and longitudes along the route and saved in local storage along with type of place.
3) Once user navigated to Places page, the variables saved in local storage will be used as input for the GOOGLE places API places identifier and thus the places are marked on map.
