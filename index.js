import { languageApi } from './api/language-api.js';
import { submissionApi } from './api/submission-api.js';
import { Header } from './components/header.js';
import { HomePage } from './components/home-page.js';
import { Login } from './components/login.js';

const app = document.getElementById('app');

function setScreen($container) {
  app.innerHTML = '';
  app.appendChild($container);
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    const username = user.username;
    const email = user.email;
    const uid = user.uid;
    console.log(username, email, uid);

    const $container = document.createElement('div');
    const $hello = document.createElement('h2');
    $hello.textContent = `Hello ${email}`;
    $container.appendChild(new Header().$container);
    $container.appendChild($hello);
    setScreen($container);

    (async function testAPI() {
      const data = {
        source_code: '#include <stdio.h>\n\nint main(void) {\n printf("hello");\n  return 0;\n}',
        language_id: 54,
        stdin: 'world',
      };

      // const submission = await submissionApi.create(data);
      // const status = await submissionApi.get(submission.token);
      // console.log(status);
    })();
  } else {
    const homePage = new HomePage();
    setScreen(homePage.$container);
  }
});

export { setScreen };
