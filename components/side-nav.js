import { NavLink } from './side-nav-link.js';

class SideNav {
  $container = document.createElement('div');
  $img = document.createElement('img');

  $exercises = new NavLink(`<i class="fas fa-dumbbell"></i>`);
  $submissions = new NavLink(`<i class="fas fa-file-medical-alt"></i>`);
  $ranking = new NavLink(`<i class="fas fa-trophy"></i>`);
  $logout = new NavLink(`<i class="fas fa-sign-out-alt"></i>`);

  constructor() {
    this.$container.appendChild(this.$img);
    this.$container.appendChild(this.$exercises.$container);
    this.$container.appendChild(this.$submissions.$container);
    this.$container.appendChild(this.$ranking.$container);
    this.$container.appendChild(this.$logout.$container);
    this.$container.classList.add('w-10', 'nav');

    this.$img.src = '../mockup-design/Images/Logo.PNG';
    // this.$img.classList.add('img-fluid', 'w-100');
    this.$logout.setOnlick(() => firebase.auth().signOut());
  }
}
export { SideNav };
