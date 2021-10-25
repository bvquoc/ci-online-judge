class UserItem {
  $container = document.createElement('div');
  constructor(content) {
    this.$container.classList.add('user-item');
    this.$container.innerHTML = content;
  }
}

export { UserItem };
