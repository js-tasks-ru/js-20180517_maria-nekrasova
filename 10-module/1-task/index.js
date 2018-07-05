(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
     *
     * Пример одного элемента, описывающего строку таблицы
     *
     *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
     *
     * @constructor
     */
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;
            const self = this;
             this.render = function (sortedRows) {
                this.el.innerHTML = '';
                for(let i=0; i<sortedRows.length; i++){
                    const tr = document.createElement("tr");
                    const current = sortedRows[i];
                    tr.setAttribute("id", current.id);
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
                    const td5 = document.createElement("td");
                    td5.addEventListener("click", function (i){
                        i.preventDefault();
                        i.stopPropagation();
                        const id = +i.target.parentNode.parentNode.getAttribute("id");
                        console.log(this);
                        console.log(id);
                        let newRows = sortedRows.filter(function (elt) {
                            return elt.id !== id;
                        })
                        console.log(newRows);
                        self.render(newRows);

                    });
                    td5.innerHTML = "<a href=\'#delete\'>X</a>";
                    tr.appendChild(td5);
                    this.el.appendChild(tr);
                }

            };
            this.render(data);

        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
       onRemoved(id) {

        }
    }

    window.ClearedTable = ClearedTable;
})();
