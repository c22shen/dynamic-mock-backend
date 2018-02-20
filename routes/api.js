const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const ServiceAccount = require('./ServiceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount)
});

var db = admin.firestore();

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

let response = {
};

// GET login
router.get('/login', (req, res) => {
    let state;
    let apiName = 'login';
    db.collection('state').get()
    .then((snapshot) => {
        snapshot.forEach((stateDoc) => {
            if (stateDoc.id === apiName) {
                state = stateDoc.data().state;
                // response.data = stateDoc.data();

                //doc.id = 'login'
                db.collection(stateDoc.id).get()
                .then((snapshot) => {
                    snapshot.forEach((responseDoc) => {
                        if (responseDoc.id === state) {
                            res.statusCode = responseDoc.data().httpcode;
                            response = responseDoc.data().response;
                            res.json(response);  
                        }
                    })
                })
                .catch((responseErr) => {
                    console.log('Error getting api response', responseErr);
                    sendError(responseErr, res);
                });
            }
            
        });
    })
    .catch((stateErr) => {
        console.log('Error getting current state', stateErr);
        sendError(stateErr, res);
    });
});

// POST userChannels
router.post('/userchannels', (req, res) => {
    let state;
    let apiName = 'userChannels';
    db.collection('state').get()
    .then((snapshot) => {
        snapshot.forEach((stateDoc) => {
            if (stateDoc.id === apiName) {
                state = stateDoc.data().state;
                // response.data = stateDoc.data();

                //doc.id = 'login'
                db.collection(stateDoc.id).get()
                .then((snapshot) => {
                    snapshot.forEach((responseDoc) => {
                        if (responseDoc.id === state) {
                            res.statusCode = responseDoc.data().httpcode;
                            response = responseDoc.data().response;
                            res.json(response);  
                        }
                    })
                })
                .catch((responseErr) => {
                    console.log('Error getting api response', responseErr);
                    sendError(responseErr, res);
                });
            }
            
        });
    })
    .catch((stateErr) => {
        console.log('Error getting current state', stateErr);
        sendError(stateErr, res);
    });
});

// POST generateOTP
router.post('/generateotp', (req, res) => {
    let state;
    let apiName = 'generateOTP';
    db.collection('state').get()
    .then((snapshot) => {
        snapshot.forEach((stateDoc) => {
            if (stateDoc.id === apiName) {
                state = stateDoc.data().state;
                // response.data = stateDoc.data();

                //doc.id = 'login'
                db.collection(stateDoc.id).get()
                .then((snapshot) => {
                    snapshot.forEach((responseDoc) => {
                        if (responseDoc.id === state) {
                            // response.status = responseDoc.data().httpcode;
                            res.statusCode = responseDoc.data().httpcode;
                            response = responseDoc.data().response;
                            res.json(response);  
                        }
                    })
                })
                .catch((responseErr) => {
                    console.log('Error getting api response', responseErr);
                    sendError(responseErr, res);
                });
            }
            
        });
    })
    .catch((stateErr) => {
        console.log('Error getting current state', stateErr);
        sendError(stateErr, res);
    });
});

// POST generateOTP
router.post('/validateotp', (req, res) => {
    let state;
    let apiName = 'validateOTP';
    db.collection('state').get()
    .then((snapshot) => {
        snapshot.forEach((stateDoc) => {
            if (stateDoc.id === apiName) {
                state = stateDoc.data().state;
                // response.data = stateDoc.data();

                //doc.id = 'login'
                db.collection(stateDoc.id).get()
                .then((snapshot) => {
                    snapshot.forEach((responseDoc) => {
                        if (responseDoc.id === state) {
                            // response.status = responseDoc.data().httpcode;
                            res.statusCode = responseDoc.data().httpcode;
                            response = responseDoc.data().response;
                            res.json(response);  
                        }
                    })
                })
                .catch((responseErr) => {
                    console.log('Error getting api response', responseErr);
                    sendError(responseErr, res);
                });
            }
            
        });
    })
    .catch((stateErr) => {
        console.log('Error getting current state', stateErr);
        sendError(stateErr, res);
    });
});

module.exports = router;

