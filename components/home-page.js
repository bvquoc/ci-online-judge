import { Footer } from './footer.js';
import { Header } from './header.js';

class HomePage {
  $container = document.createElement('div');
  $header = new Header();
  $main = document.createElement('div');
  $footer = new Footer();

  constructor() {
    this.$container.appendChild(this.$header.$container);
    this.$container.appendChild(this.$main);
    this.$container.appendChild(this.$footer.$container);
  }
}
export { HomePage };
