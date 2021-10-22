import { setScreen } from '../index.js';
import { HomePage } from './home-page.js';
import { ProblemList } from './problem/problem-list.js';
import { RankingPage } from './ranking/ranking-page.js';
import { NavLink } from './side-nav-link.js';
import { SubmissionList } from './submission/submission-list.js';

class SideNav {
  $container = document.createElement('div');
  $img = document.createElement('img');

  $exercises = new NavLink(`<i class="fas fa-dumbbell"></i>`, 'Problems');
  $submissions = new NavLink(`<i class="fas fa-file-medical-alt"></i>`, 'Submissions');
  $ranking = new NavLink(`<i class="fas fa-trophy"></i>`, 'Ranking');
  $logout = new NavLink(`<i class="fas fa-sign-out-alt"></i>`, 'Logout');

  constructor() {
    this.$container.appendChild(this.$img);
    this.$container.appendChild(this.$exercises.$container);
    this.$container.appendChild(this.$submissions.$container);
    this.$container.appendChild(this.$ranking.$container);
    this.$container.appendChild(this.$logout.$container);
    this.$container.classList.add('w-10', 'nav');

    this.$img.src = './img/logo.png';
    this.$img.onclick = () => {
      const $home = new HomePage();
      setScreen($home.$container);
    };
    // this.$img.classList.add('img-fluid', 'w-100');
    this.$exercises.setOnlick(() => {
      const $problemList = new ProblemList('Problems');
      setScreen($problemList.$container);
    });
    this.$submissions.setOnlick(() => {
      const $submissionList = new SubmissionList('Submissions');
      setScreen($submissionList.$container);
    });
    this.$ranking.setOnlick(() => {
      const $rankPage = new RankingPage('Ranking');
      setScreen($rankPage.$container);
    });
    this.$logout.setOnlick(() => firebase.auth().signOut());
  }
}
export { SideNav };
