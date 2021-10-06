function getSubmission(id) {
  if (!id) return;
  firebase
    .firestore()
    .collection('submissions')
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log('Submission data:', doc.data());
      } else console.log('No such submission has id', id);
    })
    .catch((error) => console.log('Error getting submission:', error));
}

export { getSubmission };
