import { setScreen } from '../index.js';
import { Login } from './login.js';
import { SignUp } from './sign-up.js';

class Header {
  $container = document.createElement('div');

  $title = document.createElement('h1');
  $btnLogin = document.createElement('button');
  $btnSignUp = document.createElement('button');
  // $btnLogout = document.createElement('button');

  // this.$container.appendChild(this.$btnLogout);
  // this.$btnLogout.innerHTML = 'Logout';
  // this.$btnLogout.type = 'submit';
  //
  constructor() {
    this.$container.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'px-4', 'header');

    this.$btnLogin.textContent = 'Login';
    this.$btnLogin.addEventListener('click', this.handleBtnLogin);
    this.$btnLogin.classList.add('btn', 'btn-primary', 'mx-2');
    this.$btnSignUp.textContent = 'Sign Up';
    this.$btnSignUp.addEventListener('click', this.handleBtnSignUp);
    this.$btnSignUp.classList.add('btn', 'btn-secondary');
    // this.$btnLogout.textContent = 'Logout';
    // this.$btnLogout.addEventListener('click', this.handleBtnLogout);

    this.$container.appendChild(this.$title);
    const $div = document.createElement('div');
    if (firebase.auth().currentUser) {
      this.$title.textContent = `Welcome ${firebase.auth().currentUser.displayName}`;
      // $div.appendChild(this.$btnLogout);
    } else {
      this.$title.textContent = 'Home Page';
      $div.appendChild(this.$btnLogin);
      $div.appendChild(this.$btnSignUp);
    }

    this.$container.appendChild($div);
  }

  handleBtnLogin = () => {
    const loginScreen = new Login();
    setScreen(loginScreen.$container);
  };
  handleBtnSignUp = () => {
    const signUpScreen = new SignUp();
    setScreen(signUpScreen.$container);
  };
  // handleBtnLogout = () => {
  //   firebase.auth().signOut();
  // };
}
export { Header };
