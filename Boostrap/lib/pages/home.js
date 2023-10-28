//IMPORTACIONES
import { getAllProducts } from "../service/products.js"

//INSTANCIAS DE ELEMENTOS
const contenedor_hamburguesa = document.getElementById('contenedor-hamburguesa')
const contenedor_papas = document.getElementById('contenedor-papas-fritas')
const contenedor_pizza = document.getElementById('contenedor-pizza')
const contenedor_refresco = document.getElementById('contenedor-refresco')

const fillProducts = async () => {
	const products = await getAllProducts()


	processes.forEach(product => {
		const category = process.category
		let container;
		if (category === "men's clothing") {
			container = contenedor_hamburguesa
		} else if (category === "jewelery") {
			container = contenedor_papas
		} else if (category === "electronics") {
			container = contenedor_pizza
		} else if (category === "women's clothing") {
			container = contenedor_refresco
		}

		//Crear elemento en la categoria
		container.innerHTML += `
		<div class="col">
			<div class="card h-100">
			<img class="card-img-top" src="${product.image}" alt="">
			<div class="card-body p-4">
			    <div class="text-center">
				<h5 class="fw-bolder">${product.title}</h5>
				<span>${product.prince}</span>
				</div>
			</div> 
			<div class="card-footer p-4 pt-0 border-top-0 bg-transparente">
			    <div class="text-center">
				<a href="" class="btn btn-outline-success mt-auto">
				Añadir al carrito
				</a>
				</div>
			</div>
		</div>  
		`
	})
}



fillProducts()