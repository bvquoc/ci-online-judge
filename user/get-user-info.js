const db = firebase.firestore();

function getUserInfo(id, doAfterGet) {
  if (!id || !doAfterGet) return;
  db.collection('users')
    .doc(id)
    .get()
    .then((doc) => doAfterGet(doc.data()))
    .catch((err) => console.log(err));
}

export { getUserInfo };
