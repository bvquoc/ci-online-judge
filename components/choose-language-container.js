class ChooseLanguage {
  $container = document.createElement('div');
  $txtTitle = document.createElement('h4');
  $languageList = document.createElement('div');

  constructor() {
    this.$container.appendChild(this.$txtTitle);
    this.$container.appendChild(this.$languageList);
    this.$container.classList.add('choose-language-container');

    this.$txtTitle.innerHTML = 'Please pick a language!';
    this.$languageList.innerHTML = `<a href=""
    ><img
      src="https://img.icons8.com/material-outlined/24/000000/program.png"
    />
    Pascal</a
    >
    <a href=""><img src="../mockup-design/Images/python.png" alt="" />Python</a>
    <a href=""><img src="../mockup-design/Images/c.png" alt="" /> C/C++</a>
    <a href=""
        ><img
        src="../mockup-design/Images/javascript.png"
        alt=""
        class="coming-soon"
        />JavaScript
        <p>(Coming Soon!)</p></a
    >`;

    this.$languageList.classList.add('language-list');
  }
}

export { ChooseLanguage };
