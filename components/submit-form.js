import { InputGroup } from './shared/input-group.js';
import { createSubmission } from '../submission/create-submission.js';

class SubmitForm {
  $container = document.createElement('div');

  $form = document.createElement('form');
  $problemId = new InputGroup('Problem id: ');
  $code = document.createElement('textarea');
  $languageId = new InputGroup('Language ext (.c/.cpp/.py/.pas./...)');
  $btnSubmit = document.createElement('button');

  constructor() {
    this.$container.appendChild(this.$form);
    this.$form.appendChild(this.$problemId.$container);
    this.$form.appendChild(this.$code);
    this.$form.appendChild(this.$languageId.$container);
    this.$form.appendChild(this.$btnSubmit);
    this.$btnSubmit.textContent = 'Submit Code';

    this.$form.addEventListener('submit', this.handleSubmitCode);
    this.$code.textContent = `#include <bits/stdc++.h>\nusing namespace std;\nint main() {\n\tcout << "Hello world";\n\treturn 0;\n}`;
  }

  handleSubmitCode = (e) => {
    e.preventDefault();
    const language = this.$languageId.getValue();
    const code = this.$code.value;
    const problemId = this.$problemId.getValue();

    if (!language || !code || !problemId) {
      swal('Warning', 'Fill the input before submit', 'warning');
      return;
    }
    console.log('submited', problemId);
    swal('Submited', 'Your code is judging...', 'success');
    this.$problemId.reset();
    this.$languageId.reset();
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
