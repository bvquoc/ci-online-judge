class NavLink {
  $container = document.createElement('a');
  constructor(icon) {
    this.$container.innerHTML = icon;
  }

  setOnlick(listener) {
    this.$container.onclick = listener;
  }
}

export { NavLink };
