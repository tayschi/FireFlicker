function createUserInfo() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var fullName = $("#fullName").val();
            var ic = $("#ic").val();
            var contactNum = $("#contactNum").val();
            var address = $("#address").val();
            firebase.database().ref('users/' + user.uid).set({
                fullname: fullName,
                ic: ic,
                contactNumber: contactNum,
                address: address
            }, function(error) {
                if (error) {
                  // The write failed...
                  alert("Failed to register account");
                } else {
                  // Data saved successfully!
                  alert(fullName + " account registered succesfully.");
                }
              });

        } else {
            // No user is signed in.
            window.location.replace("index.html");
        }
    });
}



