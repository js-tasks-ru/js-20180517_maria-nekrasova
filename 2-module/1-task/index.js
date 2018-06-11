/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone (obj) {
    let cloned = {};
    for (let key in obj) {
        cloned[key] = obj[key];
    }
    return cloned
}