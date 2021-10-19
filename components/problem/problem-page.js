import { Header } from '../header.js';
import { SideNav } from '../side-nav.js';
import { ProblemContent } from './content.js';
import { ScoreDisplay } from './score-display.js';

class ProblemPage {
  $container = document.createElement('div');
  $nav = new SideNav();
  $main = document.createElement('div');

  $header = new Header();
  $contentWrapper = document.createElement('div');

  $content;

  $rightContainer = document.createElement('div');
  $scoreDisplay = new ScoreDisplay('100', 'C/C++, Pascal, Python, Java');
  $txtInput = document.createElement('textarea');
  $btnSubmit = document.createElement('button');

  constructor(headerTxt = 'Problem', content = '') {
    this.$content = new ProblemContent(content);
    this.$header.setHeader(headerTxt);

    this.$main.appendChild(this.$header.$container);
    this.$main.appendChild(this.$contentWrapper);

    this.$contentWrapper.appendChild(this.$content.$container);
    this.$contentWrapper.appendChild(this.$rightContainer);
    this.$contentWrapper.classList.add('d-flex', 'justify-content-around');

    this.$rightContainer.appendChild(this.$scoreDisplay.$container);
    this.$rightContainer.appendChild(this.$txtInput);
    this.$rightContainer.appendChild(this.$btnSubmit);
    this.$rightContainer.classList.add('m-4');

    this.$txtInput.classList.add('mx-4', 'rounded', 'form-control', 'mw-100', 'code-editor');
    this.$txtInput.placeholder = 'Write your code here...';

    this.$btnSubmit.innerHTML = 'Submit';
    this.$btnSubmit.classList.add('btn', 'btn-dark', 'mx-4', 'my-3');

    this.$main.style.marginLeft = '80px';
    this.$main.classList.add('p-4');
    this.$content.$container.classList.add('p-3', 'w-50');

    this.$container.appendChild(this.$nav.$container);
    this.$container.appendChild(this.$main);
  }
}

export { ProblemPage };
