'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let trList = table.getElementsByTagName('tr');
    for (let i = 0; i < trList.length; i++) {
        const tr = trList[i];
        const td = tr.getElementsByTagName('td');
        const name = td[0].innerHTML;
        const age = td[1].innerHTML;
        const gender = td[2].innerHTML;
        const status = td[3].getAttribute('data-available');

        if (status === true) {
            tr.classList.add('available');
        } else if (status === false) {
            tr.classList.add('unavailable');
        }

        if (status === null) {
            tr.classList.add('hidden');
        }

        if (gender === 'm') {
            tr.classList.add('male');
        } else if (gender === 'f') {
            tr.classList.add('female');
        }

        if (+age < 18) {
            tr.style.cssText = "text-decoration: line-through"
        }

        console.log(tr);


    }
}