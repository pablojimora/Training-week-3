const get = async () => {
    const response = await fetch(`http://localhost:3000/productos`);
    const data = await response.json();

    // Limpiar contenido anterior
    const verProductos = document.getElementById("verProductos");
    verProductos.innerHTML = "";

    // Crear lista
    const lista = document.createElement('ol');
    data.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `ID: ${producto.id} | Nombre: ${producto.nombre ?? "Sin nombre"} | Precio: ${producto.precio ?? "Sin precio"}`;
        lista.appendChild(item);
    });

    verProductos.appendChild(lista);
}

// nuevoProducto = {id:4,nombre:"Monitor", precio:200};

const post = () => {
    let producto = document.getElementById('name').value
    let precio = document.getElementById('price').value
    let nuevoProducto = {"nombre": producto,"precio": precio}
    if (!nuevoProducto.nombre ||  !(nuevoProducto.precio)) {
        alert("Datos del producto no válidos.");
        return;
    }
    fetch(`http://localhost:3000/productos`, {
        method: `POST`,
        headers: { 'Content-Type': 'application/json' }, //Estamos diciendo que el contenido a procesar es de tipo json 
        body: JSON.stringify(nuevoProducto)

    })
        .then(reponse => reponse.json())
        .then(data =>{ 
            productAdded=document.createElement('h1'),
            productAdded.textContent=`El producto fue agregado ${data}`,
            info=appendChild(productAdded)
    })
        .catch(error => console.error("Error al agregar producto:", error));

}

const put = () => {
    let producto = document.getElementById('name').value
    let precio = document.getElementById('price').value
    let id = document.getElementById('id').value
    if (!id || !(parseFloat(precio)) || !producto) {
        alert("Datos del producto no válidos.");
        return;
    }

    let updatedProduct = {"nombre": producto,"precio": precio}

    fetch(`http://localhost:3000/productos/${id}`, {
        method: `PUT`,
        headers: { 'Content-Type': 'application/json' }, //Estamos diciendo que el contenido a procesar es de tipo json 
        body: JSON.stringify(updatedProduct)
    })
        .then(reponse => reponse.json())
        .then(data => console.log("Producto agregado:", data))
        .catch(error => console.error("Error al agregar producto:", error));
}
const eliminate = () => {
    let id = document.getElementById('id').value
    if (!id) {
        alert("ID del producto no proporcionado.");
        return;
    }
    fetch(`http://localhost:3000/productos/${id}`, { method: `DELETE` })
        .then(() => console.log("Producto eliminado"))
        .catch(error => alert("Error al agregar producto:", error));
}

const validateProduct =() => {
    let producto = document.getElementById('name').value
    let precio = document.getElementById('price').value
    let id = document.getElementById('id').value
    product = {"id": id, "nombre": producto, "precio": precio}
    if(!product.nombre || typeof product.precio !== "number") {
        console.error("Datos del producto no válidos.");
        return false;
    }
    return true;

}
