import { Login } from './login.js';
import { setScreen } from '../index.js';

class SignUp {
  $container = document.querySelector('template.signup-page').content.firstElementChild.cloneNode(true);

  $form = this.$container.querySelector('form');
  $displayName = this.$container.querySelector('#userName');
  $email = this.$container.querySelector('#emailAddress');
  $password = this.$container.querySelector('#password');
  $confirmPassword = this.$container.querySelector('#confirm-password');
  $pwMatchError = this.$container.querySelector('#pw-match-err');
  $gotoLogin = this.$container.querySelector('.goto-login');

  constructor() {
    this.$form.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        if (!this.$form.checkValidity()) e.stopPropagation();
        this.$form.classList.add('was-validated');
        if (this.$password.value !== this.$confirmPassword.value) {
          e.stopPropagation();
          this.$pwMatchError.innerHTML = 'Confirm password did not match';
          this.$password.classList.add('invalid-field');
          this.$confirmPassword.classList.add('invalid-field');
        } else {
          this.$pwMatchError.innerHTML = '';
          this.$password.classList.remove('invalid-field');
          this.$confirmPassword.classList.remove('invalid-field');

          const email = this.$email.value;
          const passwd = this.$password.value;
          const displayName = this.$displayName.value;

          this.handleSignup(email, passwd, displayName);
        }
      },
      false,
    );

    this.$gotoLogin.onclick = this.handleGoToLogin;
  }

  handleSignup = (email, password, displayName) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({ displayName });

        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            displayName,
            email,
            submissions: [],
            problems: {},
          })
          .then(() => console.log('Document successfully written!'))
          .catch((error) => console.error('Error writing document: ', error));

        swal('Completed!', 'Email verification sent.', 'success');
        firebase.auth().currentUser.sendEmailVerification();
      })
      .catch((error) => {
        console.log('Error code:', error.code);
        swal('Error!', error.message, 'error');
      });
  };

  handleGoToLogin = () => {
    const loginScreen = new Login();
    setScreen(loginScreen.$container);
  };
}

export { SignUp };
