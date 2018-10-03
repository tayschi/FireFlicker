/*$("button").click(function(){
    $("#loginBtn").text("HI")
});*/
/*$(function(){
    $("#loginBtn").click(function(){
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });        
    });
});

$(function(){
    $("#signUpBtn").click(function(){
        var loginEmail = $("#userEmail").val();
        var loginPass = $("#userPass").val();

        if(loginEmail == "" || loginPass == ""){
            alert("Please fill in the field");
        }else{
            alert("create "+loginEmail+" success");
            firebase.auth().createUserWithEmailAndPassword(loginEmail, loginPass).catch(function(error) {
            
            
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                
              });
        }
        
    });
});*/


var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'home.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'home.html', //temporary
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
