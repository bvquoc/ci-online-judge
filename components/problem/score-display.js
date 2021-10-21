import { DropDown } from '../drop-down.js';

class ScoreDisplay {
  $container = document.createElement('div');
  $txtScore = document.createElement('h5');
  $txtLanguages = document.createElement('p');

  $selectLaguages = new DropDown();

  constructor(score, languages) {
    this.$container.classList.add('d-flex', 'flex-column', 'align-items-start', 'm-4', 'p-3', 'score-display', 'w-100');
    this.$container.appendChild(this.$txtScore);
    this.$container.appendChild(this.$txtLanguages);
    this.$container.appendChild(this.$selectLaguages.$container);

    this.$txtScore.innerHTML = `Score: ${score}`;
    this.$txtLanguages.innerHTML = `Language: ${languages}`;
  }
}

export { ScoreDisplay };
