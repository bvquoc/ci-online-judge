// import { languageApi } from './judge0-api/language-api.js';
// import { submissionApi } from './judge0-api/submission-api.js';
// import { Login } from './components/login.js';
// import { SubmissionItem } from './components/submission/submission-item.js';
// import { createSubmission } from './submission/create-submission.js';
// import { getSubmission } from './submission/get-submission.js';
// import { getUserInfo } from './user/get-user-info.js';
// import { updateUserById } from './user/update-user-data.js';
import { Header } from './components/header.js';
import { HomePage } from './components/home-page.js';
import { Login } from './components/login.js';
import { SubmissionList } from './components/submission/submission-list.js';
import { SubmitForm } from './components/submit-form.js';
import { getAllSubmission } from './submission/get-all-submission.js';

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

    const $home = new HomePage();
    setScreen($home.$container);

    //     const $container = document.createElement('div');
    //     const $hello = document.createElement('h3');
    // //     $hello.textContent = `Hello ${username} ${email}`;
    //     $container.appendChild(new Header(username).$container);
    //     $container.appendChild($hello);
    //     setScreen($container);

    //     (function show_submit_form() {
    //       // submit form
    //       const $div = document.createElement('div');
    //       const $h4 = document.createElement('h4');
    //       $h4.textContent = 'Submit form here:';
    //       $div.appendChild($h4);
    //       $div.appendChild(new SubmitForm().$container);
    //       $container.appendChild($div);
    //     })();

    //     getAllSubmission((data) => {
    //       data = data.reverse();
    //       const $submissionList = new SubmissionList('Submissions here:', data);
    //       $container.appendChild($submissionList.$container);
    //     });

    // (function show_some_submission() {
    //   const $ul = document.createElement('ul');
    //   const $div = document.createElement('div');
    //   const $h4 = document.createElement('h4');
    //   $h4.textContent = 'Some submission here:';
    //   $container.appendChild($div);
    //   $div.appendChild($h4);
    //   $div.appendChild($ul);

    //   getSubmission('pE31etfX1uDDvi9iagMe', (data) => {
    //     $ul.appendChild(new SubmissionItem(data).$container);
    //   });
    //   getSubmission('pXLYEKCu4HWV2tKXydXC', (data) => {
    //     $ul.appendChild(new SubmissionItem(data).$container);
    //   });
    //   getSubmission('hpkIAieaXWGB0O7ydFwD', (data) => {
    //     $ul.appendChild(new SubmissionItem(data).$container);
    //   });
    //   getSubmission('uD6pVH2PvqbXBvjSDAkR', (data) => {
    //     $ul.appendChild(new SubmissionItem(data).$container);
    //   });
    // })();
  } else {
    const $loginPage = new Login();
    setScreen($loginPage.$container);
  }
});

export { setScreen };
