import { SubmissionItem } from './submission-item.js';

class SubmissionList {
  $container = document.createElement('div');
  $title = document.createElement('h4');
  $submissionList = document.createElement('ul');

  constructor(title = 'Submissions:', submissionList = []) {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$submissionList);

    this.$title.textContent = title;
    submissionList.forEach((item) => {
      const $li = new SubmissionItem(item).$container;
      this.$submissionList.appendChild($li);
    });
  }
}

export { SubmissionList };
