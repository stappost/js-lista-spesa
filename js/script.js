// 1 - creare un array con all'interno una lista della spesa;
const list = ["tacchino", "prosecco", "pecorino", "spaghetti", "riso", "insalata"];

// 2 - creare variabile contatore i
let i = 0;

// 3 - aprire ciclo while con condizione i minore della lunghezza della lista;
while(i<list.length){
    let li = document.createElement("li");
    li.innerText = list[i];

    document.getElementById("shipping-list").appendChild(li);

    i++;
}

// 4 - creare ciclicamente li  per ogni elemento della lista e incrementare la variabile contatore
// 5 -  aggiungere nel testo del li il contenuto dell'array 