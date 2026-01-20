HTMLTableSectionElement.prototype.sort = function (cb) {
    Array.from(this.rows)
        .sort(cb)
        .forEach((e) => this.appendChild(this.removeChild(e)));
};

/* .getElementsByClassName("order")[0]
.tBodies[0]*/
document
    .querySelector(".order tbody")
    .sort((a, b) =>
a.textContent.localeCompare(b.textContent));

const tableInteractive = document.querySelector(".orderInteractive");

const tBody = tableInteractive.querySelector("tbody");
const rows = Array.from(tBody.rows);
const headerCells = tableInteractive.tHead.rows[0].cells;

for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
        const currentRows = Array.from(tBody.rows);
        currentRows.sort((tr1, tr2) => {
            const tr1Text = tr1.cells[cellIndex].textContent;
            const tr2Text = tr2.cells[cellIndex].textContent;

            return tr1Text.localeCompare(tr2Text);
        });
        
        tBody.append(...currentRows);
    });
}