import { Header } from '../header.js';
import { SideNav } from '../side-nav.js';
import { SubmissionRow } from './submission-row.js';

class SubmissionList {
  $container = document.createElement('div');
  $nav = new SideNav();
  $main = document.createElement('div');

  $header = new Header();
  $contentWrapper = document.createElement('div');
  $table = document.createElement('table');
  $thead = document.createElement('thead');

  $submissionRows = new SubmissionRow();

  constructor(headerTxt) {
    this.$container.appendChild(this.$nav.$container);
    this.$container.appendChild(this.$main);

    this.$main.appendChild(this.$header.$container);
    this.$main.appendChild(this.$contentWrapper);
    this.$main.style.marginLeft = '80px';

    this.$contentWrapper.classList.add('exercise-container', 'm-5');
    this.$contentWrapper.appendChild(this.$table);

    this.$table.classList.add('table', 'table-success', 'table-striped');
    this.$table.appendChild(this.$thead);
    this.$table.appendChild(this.$submissionRows.$container);
    this.$thead.innerHTML = `<tr>
    <th scope="col">User</th>
    <th scope="col">Execise Name</th>
    <th scope="col">Score</th>
    <th scope="col">Language</th>
    <th scope="col">Status</th>
  </tr>`;

    if (headerTxt) this.$header.setHeader(headerTxt);
  }
}

export { SubmissionList };
