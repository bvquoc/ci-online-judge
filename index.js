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
  } else {
    const homePage = new HomePage();
    setScreen(homePage.$container);
  }
});

export { setScreen };
