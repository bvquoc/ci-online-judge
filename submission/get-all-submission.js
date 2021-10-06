const db = firebase.firestore();

function getAllSubmission(callbackFn) {
  if (!callbackFn) callbackFn = (data) => console.log(data);
  db.collection('submissions')
    .get()
    .then((querySnapshot) => {
      const tempDoc = [];
      querySnapshot.forEach((doc) => tempDoc.push(doc.data()));
      callbackFn(tempDoc);
    });
}

export { getAllSubmission };
