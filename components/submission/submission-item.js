class SubmissionItem {
  $container = document.createElement('li');
  $title = document.createElement('h5');
  $language = document.createElement('div');
  $status = document.createElement('div');
  $score = document.createElement('div');
  $compileStatus = document.createElement('div');
  $compileDetails = document.createElement('div');

  constructor(data) {
    const LANGUAGES = {
      py: 'Python',
      c: 'C',
      cpp: 'C++',
      pas: 'Pascal',
      java: 'Java',
    };
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$language);
    this.$container.appendChild(this.$status);

    this.$title.textContent = `${data.displayName || data.userId} submitted ${data.problemId}`;
    this.$language.textContent = `Language: ${LANGUAGES[data.language] || data.language}`;
    this.$status.textContent = `Status: ${data.status}`;
    this.$score.textContent = `Scored: ${data.score || 0}`;

    if (data.status === 'complete') {
      this.$container.appendChild(this.$score);
      this.$container.appendChild(this.$compileStatus);
      this.$container.appendChild(this.$compileDetails);
      this.$compileStatus.textContent = `${data.compile_status} compile`;

      if (data.compile_status === 'error') this.$compileDetails.textContent = data.compile_details;
    }
  }
}

export { SubmissionItem };
