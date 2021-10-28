import { createSubmission } from '../submission/create-submission.js';

class SubmitForm {
  $container = document.createElement('div');

  $form = document.createElement('form');
  $problemId = document.createElement('div'); //new InputGroup('Problem id: ');
  $code = document.createElement('textarea');
  $languages = document.createElement('select');

  $btnSubmit = document.createElement('button');

  constructor() {
    this.$container.appendChild(this.$form);
    this.$form.appendChild(this.$problemId.$container);
    this.$form.appendChild(this.$code);
    this.$form.appendChild(this.$languages);
    this.$form.appendChild(this.$btnSubmit);
    this.$btnSubmit.textContent = 'Submit Code';

    this.$languages.textContent = 'Choose a language:';
    const $langC = document.createElement('option');
    $langC.value = 'c';
    $langC.textContent = 'C';
    const $langCpp = document.createElement('option');
    $langCpp.value = 'cpp';
    $langCpp.textContent = 'C++';
    const $langPy = document.createElement('option');
    $langPy.value = 'py';
    $langPy.textContent = 'Python';
    const $langPas = document.createElement('option');
    $langPas.value = 'pas';
    $langPas.textContent = 'Pascal';
    const $langJava = document.createElement('option');
    $langJava.value = 'java';
    $langJava.textContent = 'Java';
    this.$languages.appendChild($langC);
    this.$languages.appendChild($langCpp);
    this.$languages.appendChild($langPy);
    this.$languages.appendChild($langPas);
    this.$languages.appendChild($langJava);

    this.$form.addEventListener('submit', this.handleSubmitCode);
    this.$code.textContent = `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n\tcout << "Hello world";\n\treturn 0;\n}`;
  }

  handleSubmitCode = (e) => {
    e.preventDefault();
    const language = this.$languages.value;
    const code = this.$code.value;
    const problemId = this.$problemId.getValue();

    if (!language || !code || !problemId) {
      swal('Warning', 'Fill the input before submit', 'warning');
      return;
    }
    // console.log('submited', problemId);
    swal('Submited', 'Your code is judging...', 'success');
    this.$problemId.reset();
    createSubmission({ language, code, problemId });
  };
}

// const $submitForm = document.getElementById('submit-form');

// const handleSubmitCode = (e) => {
//   e.preventDefault();
//   const language = $submitForm.querySelector('div #submit-language').value;
//   const code = $submitForm.querySelector('div #submit-code').value;
//   const problemId = $submitForm.querySelector('div #submit-problem').value;

//   if (!language || !code || !problemId) {
//     swal('Warning', 'Fill the input before submit', 'warning');
//     return;
//   }
//   console.log('submit', { language, code, problemId });
//   swal('Submited', 'Your code is judging...', 'success');
//   createSubmission({ language, code, problemId });
// };

// $submitForm.onsubmit = handleSubmitCode;
export { SubmitForm };
