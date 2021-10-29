import { SubscribeSubmission } from './subscribe-submission.js';

const db = firebase.firestore();

/**
 * create a submission for current user
 * @param {object} data object data contains { language, code, problemId,... }
 */
function createSubmission(data) {
  const userId = firebase.auth().currentUser.uid;
  db.collection('submissions')
    .add({
      ...data,
      userId,
      displayName: firebase.auth().currentUser.displayName,
      status: 'pending',
      sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      score: 0,
    })
    .then((tmp) => {
      const id = tmp.id;
      // console.log('Submission was created with id', id);
      swal('Success', `Submited ${data.problemId}`, 'success');

      const listenSubmission = new SubscribeSubmission(id, data.problemId);

      const thisUserDb = db.collection('users').doc(userId);
      thisUserDb
        .get()
        .then((doc) => {
          if (doc.exists) {
            const submissions = [...doc.data().submissions, id];
            thisUserDb.update({ submissions });
          }
        })
        .catch((error) => {
          // console.log('Error getting document:', error);
          swal('Error', error.message, 'error');
        });
    });
}

export { createSubmission };
