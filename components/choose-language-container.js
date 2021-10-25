class ChooseLanguage {
  $container = document.createElement('div');
  $txtTitle = document.createElement('h4');
  $languageList = document.createElement('div');

  constructor() {
    this.$container.appendChild(this.$txtTitle);
    this.$container.appendChild(this.$languageList);
    this.$container.classList.add('choose-language-container');

    this.$txtTitle.innerHTML = 'Programming languages';
    this.$languageList.innerHTML = `<a href=""
    ><img
      src="https://img.icons8.com/material-outlined/24/000000/program.png"
    />
    Pascal</a
    >
    <a href=""><img src="./img/c.png" alt="" />C</a>
    <a href=""><img src="./img/c++.png" alt="" />C++</a>
    <a href=""><img src="./img/java.png" alt="" />Java</a>
    <a href=""
        ><img
        src="./img/javascript.png"
        alt=""
        class="coming-soon"
        />JavaScript
        <p>(Coming Soon!)</p></a
    >
    <a href=""
        ><img
        src="./img/python.png"
        alt=""
        class="coming-soon"
        />Python
        <p>(Coming Soon!)</p></a
    >
    `;

    this.$languageList.classList.add('language-list');
    this.$container.onclick = (e) => {
      e.preventDefault();
    };
  }
}

export { ChooseLanguage };
