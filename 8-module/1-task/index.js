'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavods'
 *      },
 *
 * @constructor
 *//**
 * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
 */
function SortableTable(rows) {
    this.el = document.createElement("table");
    this.render = function (sortedRows) {
        this.el.innerHTML = '';
        for(let i=0; i<sortedRows.length; i++){
            const tr = document.createElement("tr");
            const current = sortedRows[i];
            const td1 = document.createElement("td");
            td1.innerText = `${current.name}`;
            tr.appendChild(td1);
            const td2 = document.createElement("td");
            td2.innerText = `${current.age}`;
            tr.appendChild(td2);
            const td3 = document.createElement("td");
            td3.innerText = `${current.salary}`;
            tr.appendChild(td3);
            const td4 = document.createElement("td");
            td4.innerText = `${current.city}`;
            tr.appendChild(td4);
            this.el.appendChild(tr);
        }

    };
    this.render(rows);
                /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        const fn = {
            0: compareNames,
            2: compareSalaries
        };
        const compare = fn[column] || compareNames;
        const sortedRows = rows.sort(compare);
        function compareNames(prev,next) {
            return desc ?  prev.name < next.name : prev.name > next.name;
        }
        function compareSalaries(prev,next) {
            return desc ? next.salary - prev.salary : prev.salary - next.salary;
        }
        this.render(sortedRows);
    };
}


