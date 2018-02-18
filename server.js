var express = require('express');
const admin = require('firebase-admin');

var app = express();
var port = 5000;

var serviceAccount = require('./config/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();

var venueList = [];

app.listen(port, function() {
    console.log('Journey server listening on port 5000');
    db.collection('venues').get()
        .then(function(venues) {
            venues.forEach(function(venue) {
                venueList.push(venue.data());
            });
        })
        .catch(function(err) {

        });
});

app.get('/api/venues', function(req, res) {
    res.send(venueList);
})