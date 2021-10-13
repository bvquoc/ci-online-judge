class NavLink {
  $container = document.createElement('a');
  constructor(icon) {
    this.$container.innerHTML = icon;
  }
}

export { NavLink };
