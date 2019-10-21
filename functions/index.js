const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
exports.getScream=functions.https.onRequest((req,res)=>{
    admin.firestore().collection('screams').get()
        .then(data=>{
            let screams=[];
            data.forEach(doc=>{
                screams.push(doc.data())

            })
            return res.json(screams)
        })
        .catch(err=>console.error(err))
})

exports.createScream=functions.https.onRequest((req, res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAT: admin.firestore.Timestamp.fromDate(new Date()),

    }


    admin
        .firestore()
        .collection('screams')
        .add(newScream)
        .then((doc) => {
                res.json({message: `document ${doc.id} success`})
            }
        )
})
