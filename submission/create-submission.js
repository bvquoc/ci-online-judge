const db = firebase.firestore();
function createSubmission(data) {
  const userId = firebase.auth().currentUser.uid;
  db.collection('submissions')
    .add({
      ...data,
      userId,
      displayName: firebase.auth().currentUser.displayName,
      status: 'pending',
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((tmp) => {
      const id = tmp.id;
      console.log('Submission was created with id', id);

      const thisUserDb = db.collection('users').doc(userId);
      thisUserDb
        .get()
        .then((doc) => {
          if (doc.exists) {
            const submissions = [...doc.data().submissions, id];
            thisUserDb.update({ submissions });
          }
        })
        .catch((error) => console.log('Error getting document:', error));
    });
}

export { createSubmission };
