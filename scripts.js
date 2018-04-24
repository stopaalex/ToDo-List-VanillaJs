'use strict';

const list = document.querySelector('.list');
const addNew = document.querySelector('.newItem div');

/**
 * @name CheckItem
 * @desc checks the item and updates the corresponding css
 * @param {object} e - clicked element 
 */
function checkItem(e) {
    let checkmark = e.target.parentNode.children[1].children[0];
    let text = e.target.parentNode.parentNode.children[1];

    if (e.target.checked) {
        checkmark.classList.add('fa-check');
        text.style.textDecoration = 'line-through';
    } else {
        checkmark.classList.remove('fa-check');
        text.style.textDecoration = 'none';
    }
}

function removeItem(e) {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function addNewItem() {
    var newText = document.querySelector('.newItem input').value;

    var item = document.createElement('div');
    item.classList.add('item');
    item.id = newText.replace(/ /g, '_');

    // create checkbox
    var checkbox = document.createElement('div');
    checkbox.classList.add('check');
    var input = document.createElement('input');
    input.type = 'checkbox';
    var checkOver = document.createElement('div');
    var i = document.createElement('i');
    i.classList.add('fa');

    list.appendChild(item);

    item.appendChild(checkbox);
    checkbox.appendChild(input);
    checkbox.appendChild(checkOver);
    checkOver.appendChild(i);

    // create text

    var text = document.createElement('div');
    text.classList.add('text');
    text.textContent = newText;

    item.appendChild(text);

    // create trash
    var remove = document.createElement('div');
    remove.classList.add('remove');
    var removeButton = document.createElement('div');
    removeButton.classList.add('remove-btn');
    var trash = document.createElement('i');
    trash.classList.add('fa');
    trash.classList.add('fa-trash');

    item.appendChild(remove);
    remove.appendChild(removeButton);
    removeButton.appendChild(trash);

    initialize();
}

function initialize() {
    var checkboxes = Array.from(document.querySelectorAll('.item .check input'));
    var removeBtns = Array.from(document.querySelectorAll('.item .remove .remove-btn'));

    checkboxes.forEach(function (item) {
        return item.addEventListener('change', checkItem);
    });
    removeBtns.forEach(function (btn) {
        return btn.addEventListener('click', removeItem);
    });

    addNew.addEventListener('click', addNewItem);
}

initialize();