function getSubmission(id, callbackFn) {
  if (!id) return;
  if (!callbackFn) callbackFn = (data) => console.log('Submission data:', data);
  firebase
    .firestore()
    .collection('submissions')
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) callbackFn(doc.data());
      else console.log('No such submission has id', id);
    })
    .catch((error) => console.log('Error getting submission:', error));
}

export { getSubmission };
