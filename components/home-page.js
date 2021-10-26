import { SideNav } from './side-nav.js';
import { Header } from './header.js';
import { ChooseLanguage } from './choose-language-container.js';
import { ExerciseItemPreview } from './exercise-item-preview.js';
import { UserItem } from './homepage/user-item.js';
import { SubmissionItem } from './homepage/submission-item.js';

class HomePage {
  $container = document.createElement('div');
  $nav = new SideNav();
  $header = new Header();
  $main = document.createElement('div');

  $languageAndInfo = document.createElement('div');

  $languageContainer = document.createElement('div');
  $chooseLanguage = new ChooseLanguage();
  $topExercises = document.createElement('div');
  $txtTopExercises = document.createElement('h4');
  $exercisesList = document.createElement('div');

  $infoContainer = document.createElement('div');
  $topUserContainer = document.createElement('div');
  $topUserText = document.createElement('h4');
  $recentSubmissionContainer = document.createElement('div');
  $recentSubmissionText = document.createElement('h4');

  constructor(headerTxt) {
    this.$container.appendChild(this.$nav.$container);
    this.$container.appendChild(this.$main);
    this.$main.appendChild(this.$header.$container);
    this.$main.appendChild(this.$languageAndInfo);
    this.$main.style.marginLeft = '80px';

    this.$languageAndInfo.appendChild(this.$languageContainer);
    this.$languageAndInfo.appendChild(this.$infoContainer);
    this.$languageAndInfo.classList.add('language-and-info');

    this.$languageContainer.classList.add('language-container');
    this.$languageContainer.appendChild(this.$chooseLanguage.$container);
    this.$languageContainer.appendChild(this.$topExercises);

    this.$topExercises.classList.add('choose-language-container', 'mt-3');
    this.$topExercises.appendChild(this.$txtTopExercises);
    this.$topExercises.appendChild(this.$exercisesList);

    this.$txtTopExercises.innerHTML = 'Top exercises';
    this.$exercisesList.classList.add('exercises-list');

    this.$infoContainer.classList.add('info-container');
    this.$infoContainer.appendChild(this.$topUserContainer);
    this.$infoContainer.appendChild(this.$recentSubmissionContainer);

    this.$topUserContainer.classList.add('top-user-container', 'p-3');
    this.$topUserContainer.appendChild(this.$topUserText);
    this.$topUserText.innerHTML = 'Top Users';

    this.$recentSubmissionContainer.classList.add('recent-submission-container', 'py-3');
    this.$recentSubmissionContainer.appendChild(this.$recentSubmissionText);
    this.$recentSubmissionText.innerHTML = 'Recent Submissions';

    if (headerTxt) this.$header.setHeader(headerTxt);

    this.getData();
  }

  getData = () => {
    firebase
      .firestore()
      .collection('problems')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().desc}`);

          const $exerciseItemPreview = new ExerciseItemPreview(doc.data());
          this.$exercisesList.appendChild($exerciseItemPreview.$container);
        });
      });

    const users = [];
    firebase
      .firestore()
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          let totalScore = 0;
          for (const key in user.problems) {
            totalScore += user.problems[key];
          }
          users.push({
            displayName: user.displayName,
            totalScore,
          });
        });
      })
      .then(() => {
        users.sort((a, b) => b.totalScore - a.totalScore);
        console.log(users);
        for (let i = 0; i < Math.min(users.length, 5); i++) {
          if (!users[i].totalScore) break;
          const $userItem = new UserItem(users[i].displayName);
          this.$topUserContainer.appendChild($userItem.$container);
        }
      });

    firebase
      .firestore()
      .collection('submissions')
      .orderBy('sentAt')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let $submissionItem = new SubmissionItem(
            `${doc.data().displayName} - ${doc.data().problemId}`,
            doc.data().score,
          );
          this.$recentSubmissionContainer.appendChild($submissionItem.$container);
        });
      });
  };
}
export { HomePage };
