class SubmissionItem {
  $container = document.createElement('div');
  constructor(user, score) {
    this.$container.classList.add('submission-item');
    this.$container.innerHTML = `
    <div class="submission-item-content">${user}</div>
    <div class="submission-item-status">${score}</div>`;
  }
}

export { SubmissionItem };
