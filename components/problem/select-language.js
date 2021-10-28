class SelectLanguage {
  $container = document.createElement('select');
  $langCpp = document.createElement('option');
  $langC = document.createElement('option');
  $langPas = document.createElement('option');
  $langJava = document.createElement('option');
  $langPy = document.createElement('option');
  constructor() {
    this.$container.classList.add('form-select', 'm-4');

    this.$langCpp.selected = true;
    this.$langCpp.value = 'cpp';
    this.$langCpp.textContent = 'C++';

    this.$langC.value = 'c';
    this.$langC.textContent = 'C';

    this.$langPas.value = 'pas';
    this.$langPas.textContent = 'Pascal';

    this.$langJava.value = 'java';
    this.$langJava.textContent = 'Java';

    this.$langPy.value = 'py';
    this.$langPy.textContent = 'Python';

    this.$container.appendChild(this.$langCpp);
    this.$container.appendChild(this.$langC);
    this.$container.appendChild(this.$langPas);
    // this.$container.appendChild(this.$langJava);
    // this.$container.appendChild(this.$langPy);
  }

  getValue = () => this.$container.value;
}

export { SelectLanguage };
