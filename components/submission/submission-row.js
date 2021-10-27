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
          const currentSub = doc.data();
          const d = new Date(new Date(currentSub.sentAt.seconds * 1000).toLocaleString({ timezone: 'Asia/Jakarta' }));

          newRow.innerHTML = `<tr>
          <th scope="col">${
            // d.getDay() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes()
            `0${d.getDate()}`.slice(-2) +
            '/' +
            `0${d.getMonth() + 1}`.slice(-2) +
            '/' +
            d.getFullYear() +
            ' ' +
            `0${d.getHours()}`.slice(-2) +
            ':' +
            `0${d.getMinutes()}`.slice(-2)
          }</th>
          <th scope="col">${currentSub.displayName}</th>
          <th scope="col">${currentSub.problemId}</th>
          <th scope="col">${currentSub.status === 'pending' ? '...' : currentSub.score}</th>
          <th scope="col">${this.LANGS[currentSub.language]}</th>
          <th scope="col">${currentSub.status}</th>
        </tr>`;
          this.$container.prepend(newRow);
        });
      });
  }
}

export { SubmissionRow };
