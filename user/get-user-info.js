const db = firebase.firestore();

/**
 * Get user info in 'user' collection by id
 * @param {string} id of the user
 * @param {Function} callbackFn the param of function is user's data
 */
function getUserInfo(id, callbackFn) {
  if (!id || !callbackFn) return;
  db.collection('users')
    .doc(id)
    .get()
    .then((doc) => callbackFn(doc.data()))
    .catch((err) => console.log(err));
}

export { getUserInfo };
