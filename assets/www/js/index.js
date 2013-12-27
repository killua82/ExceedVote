/*
 * Code for the index page(login page)
 * Event when user click the login button, the username and password 
 * will be saved as session storage for authentication.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        var username;
        var password;
        
        $( "#loginID" ).click(function() {
            username = $( "#username" ).val();
            password = $( "#password" ).val();
            
            // Save data to the current session's store
            sessionStorage.setItem("username", username);
          //rediect to digest auth
            window.location = 'myvote.html';
        });  
        
        $( "#guestLogin" ).click(function() {
            username = "Guest";
            // Save data to the current session's store
            sessionStorage.setItem("username", username);
          //rediect to digest auth
            
            window.location = 'preEmptive.html';
        }); 
        
    }
};
