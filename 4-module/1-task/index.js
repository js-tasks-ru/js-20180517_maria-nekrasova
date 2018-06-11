'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    const ul = document.createElement("ul");
    for(let i=0; i<friends.length; i++){
        const current = friends[i];
        const li = document.createElement("li");
        // li.innerText = current.firstName + " " + current.lastName;
        li.innerText = `${current.firstName} ${current.lastName}`;
        ul.appendChild(li);
    }
    return ul;
}
