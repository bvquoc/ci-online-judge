class SubmissionRow {
  $container = document.createElement('tbody');
  constructor() {}

  getData = () => {
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
          <th scope="col">${doc.data().score}</th>
          <th scope="col">${doc.data().language}</th>
          <th scope="col">${doc.data().status}</th>
        </tr>`;
          this.$container.appendChild(newRow);
        });
      });
  };
}

export { SubmissionRow };
