class TopScore {
  $container = document.createElement('div');
  constructor() {
    this.$container.classList.add('w-50', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
  }

  getData = () => {
    let list = [];
    firebase
      .firestore()
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let totalScore = 0;
          for (let property in doc.data().problems) {
            totalScore += doc.data().problems[property];
          }
          let item = [doc.data().displayName, totalScore];
          list.push(item);
          list.sort(function (a, b) {
            return b[1] - a[1];
          });
        });
        list.forEach((item) => {
          const user = document.createElement('div');
          user.classList.add(
            'top-score-user',
            'w-50',
            'd-flex',
            'justify-content-between',
            'align-items-center',
            'py-2',
            'px-4',
          );
          user.innerHTML = `
            <div><i class="fas fa-medal me-3 text-primary"></i> ${item[0]}</div>
            <div class='top-score-total'>${item[1]}</div>
            `;
          this.$container.appendChild(user);
        });
      });
  };
}

export { TopScore };
