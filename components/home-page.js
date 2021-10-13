import { SideNav } from './side-nav.js';
import { Header } from './header.js';
import { ChooseLanguage } from './choose-language-container.js';
import { ExerciseItemPreview } from './exercise-item-preview.js';

class HomePage {
  $container = document.createElement('div');
  $nav = new SideNav();
  $header = new Header();
  $main = document.createElement('div');

  $languageAndInfo = document.createElement('div');

  $languageContainer = document.createElement('div');
  $chooseLanguage = new ChooseLanguage();
  $topExercises = document.createElement('div');
  $txtTopExercises = document.createElement('h4');
  $exercisesList = document.createElement('div');

  $exerciseItemPreview = new ExerciseItemPreview();

  $infoContainer = document.getElementById('info-container').content.firstElementChild.cloneNode(true);

  constructor() {
    this.$container.appendChild(this.$nav.$container);
    this.$container.appendChild(this.$main);
    this.$main.appendChild(this.$header.$container);
    this.$main.appendChild(this.$languageAndInfo);
    this.$main.style.marginLeft = '80px';

    this.$languageAndInfo.appendChild(this.$languageContainer);
    this.$languageAndInfo.appendChild(this.$infoContainer);
    this.$languageAndInfo.classList.add('language-and-info');

    this.$languageContainer.classList.add('language-container');
    this.$languageContainer.appendChild(this.$chooseLanguage.$container);
    this.$languageContainer.appendChild(this.$topExercises);

    this.$topExercises.classList.add('choose-language-container', 'mt-3');
    this.$topExercises.appendChild(this.$txtTopExercises);
    this.$topExercises.appendChild(this.$exercisesList);

    this.$txtTopExercises.innerHTML = 'Top exercises';
    this.$exercisesList.classList.add('exercises-list');

    this.$exercisesList.appendChild(this.$exerciseItemPreview.$container);
  }
}
export { HomePage };
