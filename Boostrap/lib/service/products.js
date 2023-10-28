//Funcion que devuelve un json con los productos
export function getAllProcesses() {
    return fetch('https://fakestoreapi.com/products')   ///  
        .then(res => res.json())
        .then(json => json)
}

//Funcion que devuelve un json con un producto solicitado segun su id
export function getOneProcess(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => json)
}