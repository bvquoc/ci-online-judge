class Modal {
  $container = document.createElement('div');
  $modalDialog = document.createElement('div');
  $modalContent = document.createElement('div');
  $modalHeader = document.createElement('div');
  $modalTitle = document.createElement('h5');
  $modalBtnClose = document.createElement('button');

  $modalBody = document.createElement('div');
  $modalBodyContent = document.createElement('p');

  $modalFooter = document.createElement('div');
  $btnConfirm = document.createElement('button');

  constructor() {
    this.$modalTitle.innerHTML = 'Title';
    this.$modalBodyContent.innerHTML = 'Body text goes here';
    this.$btnConfirm.innerHTML = 'OK';
    this.$btnConfirm.type = 'button';
    this.$modalBtnClose.type = 'button';
    this.$modalBtnClose.innerHTML = '&times;';

    // set attribute and add classlist
    this.$container.setAttribute('tabindex', '-1');
    this.$modalBtnClose.setAttribute('data-dismiss', 'modal');
    this.$container.classList.add('modal', 'fade');
    this.$modalContent.classList.add('modal-content');
    this.$modalBtnClose.classList.add('close');
    this.$modalDialog.classList.add('modal-dialog');
    this.$btnConfirm.classList.add('btnConfirm');
    this.$modalHeader.classList.add('modal-header');
    this.$modalBody.classList.add('modal-body');
    this.$modalFooter.classList.add('modal-footer');

    this.$container.appendChild(this.$modalDialog);
    this.$modalDialog.appendChild(this.$modalContent);

    this.$modalContent.appendChild(this.$modalHeader);
    this.$modalContent.appendChild(this.$modalBody);
    this.$modalContent.appendChild(this.$modalFooter);

    this.$modalHeader.appendChild(this.$modalTitle);
    this.$modalHeader.appendChild(this.$modalBtnClose);
    this.$modalBody.appendChild(this.$modalBodyContent);
    this.$modalFooter.appendChild(this.$btnConfirm);
  }
}

export { Modal };
