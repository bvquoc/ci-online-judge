import { setScreen } from '../../index.js';
import { ProblemPage } from './problem-page.js';

class ProblemRow {
  id;
  data;
  $container = document.createElement('tbody');
  constructor() {
    this.$container.style.cursor = 'pointer';
    this.$container.onclick = () => {
      const $problemPage = new ProblemPage(`Problem ID: ${this.id}`, this.data.desc);
      setScreen($problemPage.$container);
    };
  }

  getData = () => {
    firebase
      .firestore()
      .collection('problems')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().desc}`);
          const newRow = document.createElement('tr');
          this.id = doc.id;
          this.data = doc.data();
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
