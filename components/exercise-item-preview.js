class ExerciseItemPreview {
  $container = document.createElement('div');
  $txtTitle = document.createElement('h5');
  $description = document.createElement('p');
  $btnTry = document.createElement('button');
  $btnSave = document.createElement('button');

  constructor() {
    this.$container.appendChild(this.$txtTitle);
    this.$container.appendChild(this.$description);
    this.$container.appendChild(this.$btnTry);
    this.$container.appendChild(this.$btnSave);
    this.$container.classList.add('exercise-item-preview');

    this.$txtTitle.innerHTML = 'Title here';
    this.$description.innerHTML = 'Description here';

    this.$btnSave.classList.add('save-for-later', 'mx-3');
    this.$btnTry.innerHTML = 'Try this exercise!';
    this.$btnSave.innerHTML = 'Save for later';
  }
}

export { ExerciseItemPreview };
