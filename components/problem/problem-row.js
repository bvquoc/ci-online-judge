class ProblemRow {
  $container = document.createElement('tbody');
  constructor() {}

  getData = () => {
    firebase
      .firestore()
      .collection('problems')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().desc}`);
          const newRow = document.createElement('tr');
          newRow.innerHTML = `<th scope="row">${doc.id}</th>
          <td>${doc.data().title}</td>
          <td>${doc.data().language}</td>
          <td>${doc.data().difficulty}</td>`;
          this.$container.appendChild(newRow);
        });
      });
  };
}

export { ProblemRow };
