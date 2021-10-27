class SubmissionRow {
  LANGS = {
    py: 'Python',
    c: 'C',
    cpp: 'C++',
    pas: 'Pascal',
    java: 'Java',
    js: 'JavaScript',
  };

  $container = document.createElement('tbody');
  constructor() {
    firebase
      .firestore()
      .collection('submissions')
      .orderBy('sentAt')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `<tr>
          <th scope="col">${doc.data().displayName}</th>
          <th scope="col">${doc.data().problemId}</th>
          <th scope="col">${doc.data().status === 'pending' ? '...' : doc.data().score}</th>
          <th scope="col">${this.LANGS[doc.data().language]}</th>
          <th scope="col">${doc.data().status}</th>
        </tr>`;
          this.$container.prepend(newRow);
        });
      });
  }
}

export { SubmissionRow };
