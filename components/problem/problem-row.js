import { setScreen } from '../../index.js';
import { ProblemPage } from './problem-page.js';

class ProblemRow {
  id;
  data;
  $container = document.createElement('tbody');
  constructor(data) {
    this.$container.style.cursor = 'pointer';
    this.$container.onclick = () => {
      const $problemPage = new ProblemPage(`Problem ID: ${this.id}`, data.desc);
      setScreen($problemPage.$container);
    };

    const newRow = document.createElement('tr');
    this.id = data?.id;
    this.data = data;
    newRow.innerHTML = `<th scope="row">${data?.id}</th>
          <td>${data?.title}</td>
          <td>${data?.language}</td>
          <td>${data?.difficulty}</td>`;
    this.$container.appendChild(newRow);
  }
}

export { ProblemRow };
