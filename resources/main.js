`use strict`

const table = document.getElementById(`table`);
const headers = table.getElementsByTagName(`th`);

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener(`click`, sortTable.bind(null, i));
}

function sortTable(column) {
    const rows = table.rows;
    const rowsArray = Array.from(rows); 
    rowsArray.shift(0,1);

    rowsArray.sort(function(a, b) {
        const aValue = a.cells[column].textContent;
        const bValue = b.cells[column].textContent;
        return aValue.localeCompare(bValue);
    });

    for (let i = 0; i < rowsArray.length; i++) {
        table.tBodies[0].appendChild(rowsArray[i]);
    }
} 