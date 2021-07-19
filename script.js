'use strict'

const submitBtn = document.querySelector('.submit-btn');
const table = document.querySelector('.phoneBook-info__container');
const phoneBookForm = document.querySelector('.phoneBook-contactinfo');
const nameInput = document.querySelector('.phoneBook-contactinfo--inputName');
const emailInput = document.querySelector('.phoneBook-contactinfo--inputE-mail');
const pohoneNumberInput = document.querySelector('.phoneBook-contactinfo--inputPhoneNumber');
const numberOfContact = document.querySelector('.phoneBook-search__numberOfContact--input');
const erroreName = document.querySelector('.phoneBook-contactinfo__error--name');
const erroreEmail = document.querySelector('.phoneBook-contactinfo__error--email');
const erroreMassage = document.querySelector('.phoneBook-contactinfo__error');
const inputOfserch = document.querySelector('.phoneBook-search__box--input');
let num = 0;
let numberContact = 0;
let tr, td, btn, icon;

inputOfserch.addEventListener('keyup', serch);
phoneBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValid();
})

function checkValid() {
    const nameInputValue = nameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const pohoneNumberInputValue = pohoneNumberInput.value.trim();

    if (nameInputValue !== ' ') {
        num++;
        addValue();
    }
    if (pohoneNumberInputValue !== ' ') {
        num++;
        addValue();
    }
    if (!isEmail(emailInputValue)) {
        num = 0;
        setErrorFor(emailInput, 'email is not valid');
    } else {
        setSuccessFor(emailInputValue)
        num++;
        addValue();
    }
}

function setErrorFor(emaileValue, massage) {
    const errMassageOfemaile = document.querySelector('.form-control-Email .phoneBook-contactinfo__error');
    errMassageOfemaile.style.visibility = 'visible';
    erroreEmail.innerText = massage;
    emaileValue.value = ' ';
}

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function setSuccessFor() {
    const errMassageOfemaile = document.querySelector('.form-control-Email .phoneBook-contactinfo__error');
    errMassageOfemaile.style.visibility = 'hidden';
}


function addValue() {
    if (num === 3) {
        tr = document.createElement('tr');
        for (let i = 0; i < 4; i++) {
            td = document.createElement('td');
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
                btn = document.createElement('button');
                btn.classList.add('options')
                icon = document.createElement('i');
                icon.setAttribute('class', 'far fa-trash-alt')
                btn.appendChild(icon)
                td.appendChild(btn)
                td.classList.add('td-trash');
                btn.addEventListener('click', clearData);

                function clearData() {
                    tr.classList.add('hidden')
                    numberContact--;
                    numberOfContact.value = numberContact;
                }
            }

        }
        table.appendChild(tr);
        num = 0;
        numberContact++;
        numberOfContact.value = numberContact;


        // let tr=table.getElementsByTagName('tr');

    }

}

function serch() {
    let inputOfValue = inputOfserch.value;
    let tdText, txtValue;
    let trr = table.getElementsByTagName('tr')
    // console.log(Number(inputOfValue))
    // if (Number(inputOfValue)) {
    //     // console.log('hi')
    //     for (let i = 0; i < trr.length; i++) {
    //         tdText = trr[i].getElementsByTagName('td')[1];
    //         console.log(tdText)
    //         if (tdText) {
    //             txtValue = tdText.textContent || tdText.innerText;
    //             // console.log(inputOfValue,txtValue.split('').indexOf(inputOfValue))
    //             if (txtValue.indexOf(inputOfValue) > -1) {
    //                 trr[i].style.display = '';
    //                 // console.log('yes')
    //             } else {
    //                 trr[i].style.display = 'none'
    //                 // console.log('no')
    //             }
    //         }
    //     }
    // } else {
    //     let filter = inputOfValue.toUpperCase();
    //     for (let i = 0; i < trr.length; i++) {
    //         tdText = trr[i].getElementsByTagName('td')[0];
    //         console.log(tdText)
    //         if (typeof inputOfValue === 'string' && tdText) {
    //             txtValue = tdText.textContent || tdText.innerText;
    //             if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //                 trr[i].style.display = '';
    //             } else {
    //                 trr[i].style.display = 'none'
    //             }
    //         }
    //     }
    // }
    if (Number(inputOfValue) === 0) {
        for (let i = 0; i < trr.length; i++) {
            trr[i].style.display = '';
        }
    }
    else if (Number(inputOfValue) && Number(inputOfValue) !== 0) {
        // console.log('hi')
        for (let i = 0; i < trr.length; i++) {
            tdText = trr[i].getElementsByTagName('td')[1];
            console.log(tdText)
            if (tdText) {
                txtValue = tdText.textContent || tdText.innerText;
                // console.log(inputOfValue,txtValue.split('').indexOf(inputOfValue))
                if (txtValue.indexOf(inputOfValue) > -1) {
                    trr[i].style.display = '';
                    // console.log('yes')
                } else {
                    trr[i].style.display = 'none'
                    // console.log('no')
                }
            }
        }
    } else {
        let filter = inputOfValue.toUpperCase();
        for (let i = 0; i < trr.length; i++) {
            tdText = trr[i].getElementsByTagName('td')[0];
            console.log(tdText)
            if (typeof inputOfValue === 'string' && tdText) {
                txtValue = tdText.textContent || tdText.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    trr[i].style.display = '';
                } else {
                    trr[i].style.display = 'none'
                }
            }
        }
    }

}