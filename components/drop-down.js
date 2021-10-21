class DropDown {
  $container = document.createElement('div');
  $btnDropDown = document.createElement('button');
  $dropDownMenu = document.createElement('ul');
  $item1 = document.createElement('li');
  $item2 = document.createElement('li');
  $item3 = document.createElement('li');
  $dropDownItem1 = document.createElement('a');
  $dropDownItem2 = document.createElement('a');
  $dropDownItem3 = document.createElement('a');

  constructor() {
    this.$btnDropDown.innerHTML = 'Select Language';
    this.$btnDropDown.type = 'button';
    this.$btnDropDown.setAttribute('id', 'dropdownMenuButton1');
    this.$btnDropDown.setAttribute('data-bs-toggle', 'dropdown');
    this.$btnDropDown.setAttribute('aria-expanded', 'false');

    this.$dropDownMenu.setAttribute('aria-labelledby', 'dropdownMenuButton1');

    this.$dropDownItem1.innerHTML = 'C/C++';
    this.$dropDownItem1.classList.add('dropdown-item');

    this.$dropDownItem2.innerHTML = 'Pascal';
    this.$dropDownItem2.classList.add('dropdown-item');

    this.$dropDownItem3.innerHTML = 'Java';
    this.$dropDownItem3.classList.add('dropdown-item');

    this.$container.classList.add('dropdown');
    this.$btnDropDown.classList.add('btn', 'btn-secondary', 'dropdown-toggle');

    this.$container.appendChild(this.$btnDropDown);
    this.$container.appendChild(this.$dropDownMenu);
    this.$dropDownMenu.appendChild(this.$item1);
    this.$dropDownMenu.appendChild(this.$item2);
    this.$dropDownMenu.appendChild(this.$item3);
    this.$item1.appendChild(this.$dropDownItem1);
    this.$item2.appendChild(this.$dropDownItem2);
    this.$item3.appendChild(this.$dropDownItem3);
  }
}

export { DropDown };
