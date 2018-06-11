/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
let age = prompt("Введите возраст");
function showSalary(data, age) {
    for(let obj of data){
        if (obj.age <= +age) {
           let name = obj.name;
           let price = obj.balance;
           let salary = [];
           salary.push(name, price);
           console.log(salary);

        }
    }

}
showSalary();