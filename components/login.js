import { InputGroup } from './shared/input-group.js';
import { setScreen } from '../index.js';
import { SignUp } from './sign-up.js';

class Login {
  $container = document.querySelector('template.login-page').content.firstElementChild.cloneNode(true);

  $forms = this.$container.querySelectorAll('.needs-validation');
  $email = this.$container.querySelector('#emailAddress');
  $password = this.$container.querySelector('#password');
  $gotoSignup = this.$container.querySelector('.goto-signup');

  constructor() {
    Array.prototype.slice.call(this.$forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (e) => {
          e.preventDefault();
          if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
          } else {
            const email = this.$email.value;
            const passwd = this.$password.value;
            this.handleLogin(email, passwd);
          }
        },
        false,
      );

      this.$gotoSignup.onclick = this.handleGoToSignUp;
    });
  }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        swal('Successfully!', 'You are already logged in', 'success');
      })
      .catch((error) => {
        console.log('Error code:', error.code);
        swal('Error!', error.message, 'error');
      });
  };

  handleGoToSignUp = () => {
    const signUpScreen = new SignUp();
    setScreen(signUpScreen.$container);
  };
}
export { Login };
