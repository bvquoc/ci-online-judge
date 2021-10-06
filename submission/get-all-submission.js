const db = firebase.firestore();

/**
 * get all submission in firestore
 * @param {function} callbackFn function with param is array of all submission
 */
function getAllSubmission(callbackFn) {
  if (!callbackFn) callbackFn = (data) => console.log(data);
  db.collection('submissions')
    .orderBy('sentAt')
    .get()
    .then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => tempDoc.push(doc.data()));
      callbackFn(tempDoc);
    });
}

export { getAllSubmission };
