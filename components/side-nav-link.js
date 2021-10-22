class NavLink {
  $container = document.createElement('a');
  constructor(icon, title) {
    this.$container.innerHTML = icon;
    this.$container.title = title;
  }

  setOnlick(listener) {
    this.$container.onclick = listener;
  }
}

export { NavLink };
