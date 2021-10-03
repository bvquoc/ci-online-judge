import { setScreen } from '../index.js';
import { Login } from './login.js';
import { SignUp } from './sign-up.js';

class Header {
  $container = document.createElement('div');

  $title = document.createElement('h1');
  $btnLogin = document.createElement('button');
  $btnSignUp = document.createElement('button');

  constructor(title = 'Home Page') {
    this.$title.textContent = title;

    this.$btnLogin.textContent = 'Login';
    this.$btnLogin.addEventListener('click', this.handleBtnLogin);
    this.$btnSignUp.textContent = 'Sign Up';
    this.$btnSignUp.addEventListener('click', this.handleBtnSignUp);

    this.$container.appendChild(this.$title);
    const $div = document.createElement('div');
    $div.appendChild(this.$btnLogin);
    $div.appendChild(this.$btnSignUp);

    this.$container.appendChild($div);
  }

  handleBtnLogin = () => {
    console.log('clicked login');
    const loginScreen = new Login();
    setScreen(loginScreen.$container);
  };
  handleBtnSignUp = () => {
    const signUpScreen = new SignUp();
    setScreen(signUpScreen.$container);
  };
}
export { Header };
