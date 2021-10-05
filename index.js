import { languageApi } from './api/language-api.js';
import { submissionApi } from './api/submission-api.js';
import { Header } from './components/header.js';
import { HomePage } from './components/home-page.js';
import { Login } from './components/login.js';
import { createSubmission } from './submission/create-submission.js';

const app = document.getElementById('app');

function setScreen($container) {
  app.innerHTML = '';
  app.appendChild($container);
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    const username = user.displayName;
    const email = user.email;
    const uid = user.uid;
    console.log(uid);

    const $container = document.createElement('div');
    const $hello = document.createElement('h3');
    $hello.textContent = `Hello ${username} ${email}`;
    $container.appendChild(new Header().$container);
    $container.appendChild($hello);
    setScreen($container);

    const $submitForm = document.getElementById('submit-form');

    const handleSubmitCode = (e) => {
      e.preventDefault();
      const language = $submitForm.querySelector('div #submit-language').value;
      const code = $submitForm.querySelector('div #submit-code').value;
      const problemId = $submitForm.querySelector('div #submit-problem').value;

      if (!language || !code || !problemId) {
        swal('Warning', 'Fill the input before submit', 'warning');
        return;
      }
      console.log('submit', { language, code, problemId });
      swal('Submited', 'Your code is judging...', 'success');
      createSubmission({ language, code, problemId });
    };

    $submitForm.onsubmit = handleSubmitCode;
  } else {
    const homePage = new HomePage();
    setScreen(homePage.$container);
  }
});

export { setScreen };
