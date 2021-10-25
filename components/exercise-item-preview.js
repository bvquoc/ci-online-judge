import { setScreen } from '../index.js';
import { ProblemPage } from './problem/problem-page.js';

class ExerciseItemPreview {
  data;

  $container = document.createElement('div');
  $txtTitle = document.createElement('h5');
  $description = document.createElement('p');
  $btnTry = document.createElement('button');
  $btnSave = document.createElement('button');

  constructor(data) {
    this.$container.appendChild(this.$txtTitle);
    this.$container.appendChild(this.$description);
    this.$container.appendChild(this.$btnTry);
    // this.$container.appendChild(this.$btnSave);
    this.$container.classList.add('exercise-item-preview', 'mt-3');

    this.data = data;
    this.$txtTitle.innerHTML = data?.id || 'Title here';
    this.$description.innerHTML = data?.title || 'Description here';

    this.$btnSave.classList.add('save-for-later', 'mx-3');
    this.$btnTry.innerHTML = 'Try this exercise!';
    // this.$btnSave.innerHTML = 'Save for later';

    this.$btnTry.onclick = () => {
      const $problemPage = new ProblemPage(this.data.id, this.data.desc);
      setScreen($problemPage.$container);
    };
  }
}

export { ExerciseItemPreview };
