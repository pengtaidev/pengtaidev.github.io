

        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBx1U-MM_GNzHuCOTFSGZP0_hwAIVGvn-4",
            authDomain: "ronin-3a009.firebaseapp.com",
            databaseURL: "https://ronin-3a009.firebaseio.com",
            projectId: "ronin-3a009",
            storageBucket: "ronin-3a009.appspot.com",
            messagingSenderId: "591023826852",
            appId: "1:591023826852:web:0314ac15b6622666"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        const messaging = firebase.messaging();

        //token값 알아내기
        messaging.requestPermission()
          .then(function(){
              console.log("Have permission");
              return messaging.getToken();
          })
          .then(function(token){
              document.getElementById("pushToken").innerHTML = token;
              //alert(token);
          })
          .catch(function(arr){
              alert("Error Occured");
          });

        // messaging.setBackgroundMessageHandler(function(payload){
        //
        //     const title = "Hello World";
        //     const options = {
        //         body: payload.data.status
        //     };
        //
        //     return self.registration.showNotification(title,options);
        // });