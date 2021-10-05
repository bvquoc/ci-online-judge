function createSubmission(data) {
  firebase
    .firestore()
    .collection('submissons')
    .add({
      ...data,
      userId: firebase.auth().currentUser.uid,
      status: 'pending',
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

export { createSubmission };
