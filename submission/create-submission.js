function createSubmission(data) {
  firebase
    .firestore()
    .collection('submissions')
    .add({
      ...data,
      userId: firebase.auth().currentUser.uid,
      status: 'pending',
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

export { createSubmission };
