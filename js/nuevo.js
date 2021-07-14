function obtenerProductos(url, callback) {
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

let contenedor = document.querySelector("#nuevas");


function mostrarProductos(prod) {
    prod.forEach(element => {
        if (`${element.categoria}` == "Sweaters" && `${element.precio}` > 1800) {
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
        }
        if (`${element.categoria}` == "Pantalones" && `${element.precio}` > 2200) {
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
        }
        if (`${element.categoria}` == "Buzos" && `${element.marca}` == "Almendra Moda") {
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
        }
    });



}
obtenerProductos("http://localhost:5500/api/productos", mostrarProductos);