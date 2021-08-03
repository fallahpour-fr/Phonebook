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
const clearData = document.querySelector('.clear-btn');
let trr = table.getElementsByTagName('tr');
let numberContact;
let num = 0;
let obj, arr;
let tr, td, btn, icon, lengthOfArray;



<<<<<<< Updated upstream
// let saveArray = localStorage.getItem(`saveArrayInLocal`);
// let saveNumberContact = localStorage.getItem('saveNumbContactInLocal');
// let saveObjContact = localStorage.getItem(`saveArrayInLocal${numberContact}`);

// if (saveObjContact && saveNumberContact) {
//     // arr = JSON.parse(saveArray);
//     numberContact = JSON.parse(saveNumberContact);
//     obj = JSON.parse(saveObjContact);
//     // saveInLocalStrage();
//     obj = {};
// } else {
//     numberContact = 0;
//     obj = {};
//     arr = [];
// }
numberContact = 0;
obj = {};
arr = [];
=======
let saveArray = localStorage.getItem('saveArrayInLocal');
let saveNumberContact = localStorage.getItem('saveNumbContactInLocal');



if (saveArray && saveNumberContact) {
    arr = JSON.parse(saveArray);
    numberContact = JSON.parse(saveNumberContact);
    lengthOfArray = arr.length;
    saveInLocalStrage();
    obj = {};
} else {
    numberContact = 0;
    obj = {};
    arr = [];
}

>>>>>>> Stashed changes


inputOfserch.addEventListener('keyup', serch);
phoneBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValid();
})
clearData.addEventListener('click', clearAllValueInLocal);
table.addEventListener('click', clickIntable)





function checkValid() {
    const nameInputValue = nameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const pohoneNumberInputValue = pohoneNumberInput.value.trim();
    obj.nameInputValue = nameInputValue;
    obj.pohoneNumberInputValue = pohoneNumberInputValue;
    obj.emailInputValue = emailInputValue;
<<<<<<< Updated upstream
    obj.id=Number(numberContact);
=======
    obj.id =arr.length;
    obj.trash = false;
    arr.push(obj);
    localStorage.setItem('saveArrayInLocal', JSON.stringify(arr));

>>>>>>> Stashed changes
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
        setSuccessFor()
        num++;
        addValue();
    }
}


function clickIntable(e) {
    let element = e.target;
    let elementJob = e.target.getAttribute('job');
    console.log(element, elementJob);
    if (elementJob == 'delete') {
        removeItemInList(element)
    }
}

function removeItemInList(element) {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
    arr[element.id].trash = true;
    if (numberContact >= 1) {
        numberContact--;
        numberOfContact.value = numberContact;
    }
    localStorage.setItem('saveNumbContactInLocal', JSON.stringify(numberContact));
    localStorage.setItem('saveArrayInLocal', JSON.stringify(arr));
    console.log(arr)
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

    if (num === 3 && obj.trash === false) {
        tr = document.createElement('tr');
        tr.setAttribute('id', `${numberContact}`)
        for (let i = 0; i < 4; i++) {
            td = document.createElement('td');
            tr.appendChild(td);
            td.classList.add('td');
            if (i == 1 || i == 2 || i == 3) {
                td.style.borderLeft = '1px solid #981a00';
            }
            if (i == 0) {
                td.innerHTML = obj.nameInputValue;
                td.classList.add('td-text');
                nameInput.value = '';
            }
            if (i == 1) {
                td.innerHTML = obj.pohoneNumberInputValue;
                td.classList.add('td-text');
                pohoneNumberInput.value = '';
            }
            if (i == 2) {
                td.innerHTML = obj.emailInputValue;
                td.classList.add('td-text');
                emailInput.value = '';
            }
            if (i == 3) {
                icon = document.createElement('i');
<<<<<<< Updated upstream
                icon.setAttribute('class', 'far fa-trash-alt');
                // icon.setAttribute('id', `${numberContact}`);
                btn.appendChild(icon);
                td.appendChild(btn);
                td.classList.add('td-trash');
                td.addEventListener('click', clearDataItem);
                console.log(td);

                function clearDataItem() {
                    // console.log(Number(e.target.id))
                    // localStorage.removeItem(`saveArrayInLocal${Number(e.target.id)+1}`)
                    // if (e.target === icon) {
                    //     // tr.style.display = 'none'
                    //     // document.getElementsByTagName("tr")[Number(e.target.id)].remove();
                    //     console.log(icon)
                    //     console.log(Number(e.target.id))
                    // }else{
                    //     console.log('hi')
                    // }
                    console.log('hi')
                    tr.style.display = 'none'
                    // console.log(e.target)
                    // console.log(icon)
                    // // tr.classList.add('hidden')
                    // // if (e.target === modal) {
                    // //     modal.style.display = "none";
                    // // }
                    // if (numberContact >= 1) {
                    //     numberContact--;
                    //     numberOfContact.value = numberContact;
                    //     arr = arr.splice(Number(e.target.id), 1);
                    //     localStorage.setItem('saveArrayInLocal', JSON.stringify(arr));
                    //     localStorage.setItem('saveNumbContactInLocal', JSON.stringify(numberContact));
                    // } else {
                    //     e.preventDefault();
                    // }

                    // console.log(numberContact, Number(e.target.id), 'hi')

                }
=======
                icon.classList.add('options');
                icon.setAttribute('class', 'far fa-trash-alt');
                icon.setAttribute('id', arr.length-1);
                icon.setAttribute('job', "delete")
                td.appendChild(icon)
                td.classList.add('td-trash');
>>>>>>> Stashed changes
            }

        }
        table.appendChild(tr);
        num = 0;
        numberContact++;
        numberOfContact.value = numberContact;
<<<<<<< Updated upstream
        arr.push(obj);
        // localStorage.setItem(`saveArrayInLocal`, JSON.stringify(arr));
        // localStorage.setItem(`saveArrayInLocal${numberContact}`, JSON.stringify(obj));
        // localStorage.setItem('saveNumbContactInLocal', JSON.stringify(numberContact));
        console.log(arr)
        obj = {}
=======
        localStorage.setItem('saveNumbContactInLocal', JSON.stringify(numberContact));
        obj = {};
>>>>>>> Stashed changes
    }

}



function serch() {
    let inputOfValue = inputOfserch.value;
    let tdText, txtValue;


    if (Number(inputOfValue) === 0) {
        for (let i = 0; i < trr.length; i++) {
            trr[i].style.display = '';
        }
    } else if (Number(inputOfValue) && Number(inputOfValue) !== 0) {
        for (let i = 0; i < trr.length; i++) {
            tdText = trr[i].getElementsByTagName('td')[1];
            console.log(tdText)
            if (tdText) {
                txtValue = tdText.textContent || tdText.innerText;
                if (txtValue.indexOf(inputOfValue) > -1) {
                    trr[i].style.display = '';
                } else {
<<<<<<< Updated upstream
                    trr[i].style.display = 'none';
=======
                    trr[i].style.display = 'none'
>>>>>>> Stashed changes
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


<<<<<<< Updated upstream
// function saveInLocalStrage() {
//     for (let j = 0; j < numberContact; j++) {

//         tr = document.createElement('tr');
//         for (let i = 0; i < 4; i++) {
//             td = document.createElement('td');
//             tr.appendChild(td);
//             td.classList.add('td');
//             if (i == 1 || i == 2 || i == 3) {
//                 td.style.borderLeft = '1px solid #981a00';
//             }
//             if (i == 0) {
//                 td.innerHTML = arr[j].nameInputValue;
//                 td.classList.add('td-text');
//                 nameInput.value = ''
//             }
//             if (i == 1) {
//                 td.innerHTML = arr[j].pohoneNumberInputValue;
//                 td.classList.add('td-text');
//                 pohoneNumberInput.value = '';
//             }
//             if (i == 2) {
//                 td.innerHTML = arr[j].emailInputValue;
//                 td.classList.add('td-text');
//                 emailInput.value = ''
//             }
//             if (i == 3) {
//                 btn = document.createElement('button');
//                 btn.classList.add('options')
//                 btn.setAttribute('id', `${j}`);
//                 icon = document.createElement('i');
//                 icon.setAttribute('class', 'far fa-trash-alt')
//                 btn.appendChild(icon)
//                 td.appendChild(btn)
//                 td.classList.add('td-trash');
//                 btn.addEventListener('click', clearData);

//                 function clearData() {
//                     tr.classList.add('hidden')
//                     numberContact--;
//                     numberOfContact.value = numberContact;
//                 }
//             }

//         }
//         table.appendChild(tr);
//         numberOfContact.value = numberContact;

//     }
// }
=======
function saveInLocalStrage() {
    console.log(arr)
    for (let j = 0; j < lengthOfArray; j++) {
        console.log(arr)
        if (arr[j].trash === false) {
            tr = document.createElement('tr');
            for (let i = 0; i < 4; i++) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.classList.add('td');
                if (i == 1 || i == 2 || i == 3) {
                    td.style.borderLeft = '1px solid #981a00';
                }
                if (i == 0) {
                    td.innerHTML = arr[j].nameInputValue;
                    td.classList.add('td-text');
                    nameInput.value = ''
                }
                if (i == 1) {
                    td.innerHTML = arr[j].pohoneNumberInputValue;
                    td.classList.add('td-text');
                    pohoneNumberInput.value = ''
                }
                if (i == 2) {
                    td.innerHTML = arr[j].emailInputValue;
                    td.classList.add('td-text');
                    emailInput.value = ''
                }
                if (i == 3) {
                    icon = document.createElement('i');
                    icon.classList.add('options');
                    icon.setAttribute('class', 'far fa-trash-alt');
                    icon.setAttribute('id', j);
                    icon.setAttribute('job', "delete")
                    td.appendChild(icon)
                    td.classList.add('td-trash');
                }

            }
            table.appendChild(tr);
            numberOfContact.value = numberContact;
        }

    }
}
>>>>>>> Stashed changes


function clearAllValueInLocal() {
    localStorage.clear();

    for (let i = 0; i < trr.length; i++) {
        trr[i].style.display = 'none';
    }

    numberContact = '';
    numberOfContact.value = numberContact;
}