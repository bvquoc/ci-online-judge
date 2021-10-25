const $form = document.getElementById('problem-form');
const $id = $form.querySelector('#problem-id');
const $title = $form.querySelector('#problem-title');
const $difficulty = $form.querySelector('#problem-difficulty');
const $content = $form.querySelector('#problem-content');

$difficulty.value = 'Easy';

$form.onsubmit = (e) => {
  e.preventDefault();
  const id = $id.value;
  const title = $title.value;
  const difficulty = $difficulty.value;
  const desc = $content.value;

  if (!(id && title && difficulty && desc)) {
    swal('Error', 'Fill all fields', 'error');
    return;
  }

  const data = {
    id,
    title,
    difficulty,
    desc,
    language: null,
  };

  uploadProblem(data);
};

function uploadProblem(data) {
  const db = firebase.firestore();
  db.collection('problems')
    .doc(data.id)
    .set({
      ...data,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => swal('Success', 'Uploaded!', 'success'))
    .catch((error) => {
      console.log('Error code:', error.code);
      swal('Error!', error.message, 'error');
    });
}
