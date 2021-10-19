import { Header } from '../header.js';
import { SideNav } from '../side-nav.js';
import { TopScore } from './top-score.js';

class RankingPage {
  $container = document.createElement('div');
  $nav = new SideNav();
  $main = document.createElement('div');

  $header = new Header();
  $contentWrapper = document.createElement('div');

  $txtTitle = document.createElement('h2');
  $topScoreContainer = new TopScore();

  constructor() {
    this.$container.appendChild(this.$nav.$container);
    this.$container.appendChild(this.$main);

    this.$main.appendChild(this.$header.$container);
    this.$main.appendChild(this.$contentWrapper);
    this.$main.style.marginLeft = '80px';

    this.$contentWrapper.classList.add('mt-5', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
    this.$contentWrapper.appendChild(this.$txtTitle);
    this.$txtTitle.innerHTML = 'Top Score';

    this.$contentWrapper.appendChild(this.$topScoreContainer.$container);
    this.$topScoreContainer.getData();
  }
}

export { RankingPage };
