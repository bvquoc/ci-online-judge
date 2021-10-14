import { Header } from '../header.js';
import { SideNav } from '../side-nav.js';
import { ProblemContent } from './content.js';

class ProblemPage {
  $container = document.createElement('div');
  $nav = new SideNav();
  $header = new Header();
  $main = document.createElement('div');
  $content;
  constructor(content = '') {
    this.$content = new ProblemContent(content);

    this.$main.appendChild(this.$header.$container);
    this.$main.appendChild(this.$content.$container);
    this.$main.style.marginLeft = '80px';
    this.$main.style.padding = '24px';
    this.$content.$container.style.padding = '24px';

    this.$container.appendChild(this.$nav.$container);
    this.$container.appendChild(this.$main);
  }
}

export { ProblemPage };
