const db = firebase.firestore();

class SubscribeSubmission {
  id;
  unSubscribeSubmission;

  constructor(id, problemId) {
    if (!id) return;
    this.id = id;

    db.collection('cities')
      .doc('SF')
      .onSnapshot((doc) => {
        console.log('Current data: ', doc.data());
      });

    this.unSubscribeSubmission = db
      .collection('submissions')
      .doc(id)
      .onSnapshot((doc) => {
        const item = doc.data();

        console.log('Current data: ', item);
        if (item.status === 'complete') {
          swal(`Judged problem ${problemId}`, `You was scored: ${item.score}/100`, 'success');
          this.unSubscribeSubmission();
        }
      });
  }
}
export { SubscribeSubmission };
