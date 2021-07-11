'use strict'

const submitBtn = document.querySelector('.submit-btn');
const table = document.querySelector('.phoneBook-info__container');
const phoneBookForm = document.querySelector('.phoneBook-contactinfo');
const nameInput = document.querySelector('.phoneBook-contactinfo--inputName');
const emailInput = document.querySelector('.phoneBook-contactinfo--inputE-mail');
const pohoneNumberInput = document.querySelector('.phoneBook-contactinfo--inputPhoneNumber');
const numberOfContact = document.querySelector('.phoneBook-search__numberOfContac--input')
let num = 0;

submitBtn.addEventListener('click', addValue);

// emailInput.addEventListener('keyup', function (event) {
//     isValidEmail = emailInput.checkValidity();

//     if ( isValidEmail ) {
//         submitBtn.disabled = false;
//       } else {
//         submitBtn.disabled = true;
//       }
// })

function addValue() {
    let tr = document.createElement('tr');
    for (let i = 0; i < 4; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.classList.add('td');
        if (i == 1 || i == 2 || i == 3) {
            td.style.borderLeft = '1px solid #981a00';
        }
        if (i == 0) {
            td.innerHTML = nameInput.value;
            td.classList.add('td-text');
            nameInput.value = ' '
        }
        if (i == 1) {
            td.innerHTML = pohoneNumberInput.value;
            td.classList.add('td-text');
            pohoneNumberInput.value = ' '
        }
        if (i == 2) {
            td.innerHTML = emailInput.value;
            td.classList.add('td-text');
            emailInput.value = ' '
        }
        if (i == 3) {
            let btn = document.createElement('button');
            btn.classList.add('options')
            let icon = document.createElement('i');
            icon.setAttribute('class', 'far fa-trash-alt')
            btn.appendChild(icon)
            td.appendChild(btn)
            td.classList.add('td-trash');
        }

    }
    table.appendChild(tr);
    // phoneBookForm.submit();

}