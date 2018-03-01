const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const ServiceAccount = require('./ServiceAccountKey.json');
const collectionName = "apiCollection";

admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount)
});

var db = admin.firestore();

router.get('/importData', (res) => {
    // var apiName = "login";
    
    var apiData = {
        "url": "/api/auth/login",
        "currentSelection": "success",
        "method": "post",
        "apiName": "login"
      };

      var apiresponses = [
           {
            "description": "Success",
            "httpcode": 200,
            "response": {
                "channel_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWFtX3VzZXJuYW1lIjoiMDAwMDAwOTg0MTQzNCIsInN1YiI6IjcxY2M4NzM4LTA1YzQtNDFhNS04NGZkLTExMmRhNjVmMTAwYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJsb2NrX3N0YXR1cyI6Ik4iLCJpYW1fcm9sZSI6IkNVU1RPTUVSIiwiaXNzIjoiaHR0cHM6Ly9MQ0xfQVBJR1dfRE9NQUlOLyIsImdpdmVuX25hbWUiOiIwMDAwMDA5ODQxNDM0Iiwibm9uY2UiOiI0ODEyMzMxNiIsImF1ZCI6ImNsaWVudF9pZD8iLCJleHAiOjE1MTk4Njc2MTYsImlhdCI6MTUxOTg2MDQxNiwiZmFtaWx5X25hbWUiOiJDVVNUT01FUiIsImVtYWlsIjoiMDAwMDAwOTg0MTQzNEBnbWFpbC5jb20iLCJqdGkiOiIyODg0MWNlMy1kYzAwLTQ3YmYtYmQ1ZC1jMjUwODQwYWVjNGIifQ.8dymAZfwEmui9Khd55_usb98usMzLqLIWQ5Am7ePXVQ",
                "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWFtX3VzZXJuYW1lIjoiMDAwMDAwOTg0MTQzNCIsInN1YiI6IjcyNzg4NGNjLWI5NmQtNDdiMi04YmEzLWQ3YjczMjU0ZTA0YiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJsb2NrX3N0YXR1cyI6Ik4iLCJpYW1fcm9sZSI6IkNVU1RPTUVSIiwiaXNzIjoiaHR0cHM6Ly9MQ0xfQVBJR1dfRE9NQUlOLyIsImdpdmVuX25hbWUiOiIwMDAwMDA5ODQxNDM0Iiwibm9uY2UiOiI0ODEyMzMxNiIsImF1ZCI6ImNsaWVudF9pZD8iLCJleHAiOjE1MTk4Njc2MTYsImlhdCI6MTUxOTg2MDQxNiwiZmFtaWx5X25hbWUiOiJDVVNUT01FUiIsImVtYWlsIjoiMDAwMDAwOTg0MTQzNEBnbWFpbC5jb20iLCJqdGkiOiI4N2FlZWJhNC1jMjlhLTRkNmQtODA2YS00M2E3ZDgwOWUyZjIifQ.uBG7zGrQukQSQTdh9-vTpdutZV8yy-NmnjtxLj_CPdE",
                "requestId": "e8538589-4659-4913-90c0-9f45b1657d00"
                }
            },
        
            {
                "description": "Bad Credentials",
                "httpcode": 401,
                "response": {
                    "error": "GTW_AUTH_BAD_CREDENTIALS",
                    "error_description": "ERROR_RESUBMIT_OK",
                    "requestId": null
                }
            },

            {
                "description": "Bad Credentials",
                "httpcode": 401,
                "response":{
                    "error": "GTW_AUTH_CHALLENGE",
                    "error_description": "ERROR_RESUBMIT_OK",
                    "requestId": "3a98305b-d318-479f-a6a0-f295fa36a23a"
                }
            },
        ]



      



      var apiDoc = db.collection(collectionName).add(apiData).then(ref=>{
          console.log("Added document with ID: '", ref.id);

          var thisApiResponsesSubCollection = db.collection(collectionName).doc(ref.id).collection('responses');
          apiresponses.array.forEach(responseData => {
            thisApiResponsesSubCollection.add(responseData).then(responseInsertResponse => {
                console.log("response added!");
            })
            res.send('added!');
          });
      })
})