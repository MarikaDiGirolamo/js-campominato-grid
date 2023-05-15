document.getElementById("playBtn").addEventListener("click", initGame )

function initGame() {
        console.log("Gioco avviato");

        //(div.grid)
        const grid = createElement("div", "grid", "");
        
        //Creiamo n celle
        let numeroDiCelleTotali = document.getElementById("livelloDifficolta").value;
        let numeroDiCellePerLato = Math.ceil( Math.sqrt(numeroDiCelleTotali) );
        let dimensione = `calc(100% / ${numeroDiCellePerLato})`;

        for (let i = 0; i < numeroDiCelleTotali; i++) {
            let cella = createElement("div", "cell", i+1 );
            cella.style.width = dimensione;
            cella.style.height = dimensione;

            cella.addEventListener("click", function() {
                console.log("Cliccato", this);
                this.classList.toggle("clicked");
            });

            grid.appendChild( cella );
        }

        //Appendiamo la griglia al main
        const mainEl = document.querySelector("main");
        mainEl.innerHTML = "";
        mainEl.appendChild(grid);

        console.log("Griglia: ", grid);
        gameInit = true;
}

function createElement(tagHtml, classe, contenuto) {
    
    //Creiamo una cella
    const cell = document.createElement(tagHtml);
    cell.classList.add(classe);
    cell.innerText = contenuto;

    return cell;

}