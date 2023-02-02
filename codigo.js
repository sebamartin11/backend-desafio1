class ProductManager {
    constructor(){
        this.products = [];
    };

    static id = 0

    addProduct(title, description, price, image, code, stock){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            };
        };

        const newProduct = {
            title, 
            description, 
            price, 
            image, 
            code, 
            stock,
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({
                ...newProduct,
                id:ProductManager.id,
            });
        } else{
            console.log("Todos los campos son requeridos");
        };
    };

    getProduct(){
        return this.products;
    };

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("No Existe") : console.log(this.existe(id));
    };
};

const productos = new ProductManager
//Primera llamada = arreglo vacío
console.log(productos.getProduct());

//Agregando Producto
productos.addProduct("title1", "descripcion1", 755, "image1", "001", 5);
productos.addProduct("title2", "descripcion2", 755, "image2", "002");

// Segunda llamada = arreglo con producto
console.log(productos.getProduct());

// Validacion de CODE repetido
productos.addProduct("title3", "descripcion3", 165, "image3", "002", 7);

// Busqueda de producto por id
(productos.getProductById(1));

//Busquedo por id no encontrado 
(productos.getProductById(4));