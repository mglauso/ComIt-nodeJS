function obtenerBuzos(url, callback) {
    let todos;
    todos = new XMLHttpRequest();
    todos.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let todEp = JSON.parse(this.responseText);
            callback(todEp)

        };
    }
    todos.open("GET", url, true);
    todos.send()
}

let contenedor = document.querySelector("#buzos");

function mostrarProductos(remeras) {
    remeras.forEach(element => {
        (`${element.imagen} ${element.nombre} ${element.precio} ${element.talle}`)
        let miNodo = document.createElement("div");
        miNodo.classList.add("card");
        miNodo.innerHTML = `
        <img src="${element.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">Talles: ${element.talle}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">$${element.precio}</small>
        </div>
      </div>`

        contenedor.appendChild(miNodo);
    });

}

obtenerBuzos("http://localhost:5500/api/productos?categoria=Buzos", mostrarProductos);