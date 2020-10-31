const admin = require('firebase-admin');

exports.handler = async () => {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.credentials)),
    databaseURL: process.env.credentials.databaseURL
  });
  const message = {
    notification: {
      title: 'testTitle',
      body: 'testBody'
    },
    token: process.env.deviceToken,
  };
  await admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}