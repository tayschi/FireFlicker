

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
    } else {
        // No user is signed in.
        window.location.replace("index.html");
    }
});

function openTab(evt, tabName) {
    //For tab effects
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    //---------------------------------------------------------------------
    //Display details

    if (tabName === "Home") { //Display home details
        return firebase.database().ref('/page_info/').once('value').then(function (snapshot) {
            var home = (snapshot.val() && snapshot.val().home);
            $("#homeContent").text(home);

        });
    }
        
    
}

$(document).ready(function(){
   loadAboutUs();
 });

function loadAboutUs(){
    return firebase.database().ref('/page_info/').once('value').then(function (snapshot) {
        var aboutUs = (snapshot.val() && snapshot.val().about_us);
        var email = (snapshot.child('Contact Us').val() && snapshot.child('Contact Us').val().email); 
        var phone = (snapshot.child('Contact Us').val() && snapshot.child('Contact Us').val().tel);
        var fax = (snapshot.child('Contact Us').val() && snapshot.child('Contact Us').val().fax);
        $("#aboutUsContent").text(aboutUs);
        $("#emailContent").text("Email: "+ email);
        $("#phoneContent").text("Tel: "+ phone);
        $("#faxContent").text("Fax: "+ fax);
    });
}

function logOut() {
    firebase.auth().signOut();
}
