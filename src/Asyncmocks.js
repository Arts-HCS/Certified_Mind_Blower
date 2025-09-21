const productos = [
    {
        id: "1",
        nombre: "URBAN DARK BLOWER TEE",
        precio: '30,00 USD',
        img: '../src/assets/designs/tshirt1/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt1/tshirt-back.png',
        prenda: 'playera'
    },
    {
        id: "2",
        nombre: "URBAN LIGHT BLOWER TEE",
        precio: '30,00 USD',
        img: '../src/assets/designs/tshirt2/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt2/tshirt-back.png',
        prenda: 'playera'        
    },
    {
        id: "3",
        nombre: "CERTIFIED MIND BLOWER T-SHIRT",
        precio: '25,00 USD',
        img: '../src/assets/designs/tshirt3/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt3/tshirt-back.png',
        prenda: 'playera'
    },
    {
        id: "4",
        nombre: "NAVY T-SHIRT",
        precio: '30,00 USD',
        img: '../src/assets/designs/tshirt4/tshirt-front.png',
        img_back: '../src/assets/designs/tshirt4/tshirt-back.png',
        prenda: 'playera'
    },
    {
        id: "5",
        nombre: "WEEKEND DARK CMB PANTS",
        precio: '65,00 USD',
        img: '../src/assets/designs/pants1/pants-front.png',
        img_back: '../src/assets/designs/pants1/pants-back.png',
        prenda: 'pants'
    },
    {
        id: "6",
        nombre: "LOWKEY MALTA CMB PANTS",
        precio: '68,00 USD',
        img: '../src/assets/designs/pants2/pants-front.png',
        img_back: '../src/assets/designs/pants2/pants-back.png',
        prenda: 'pants'
    },
    {
        id: "7",
        nombre: "WEEKEND ZURICH CMB PANTS",
        precio: '72,00 USD',
        img: '../src/assets/designs/pants3/pants-front.png',
        img_back: '../src/assets/designs/pants3/pants-back.png',
        prenda: 'pants'
    },
    {
        id: "8",
        nombre: "PORTO BLOWER PANTS",
        precio: '65,00 USD',
        img: '../src/assets/designs/pants4/pants-front.png',
        img_back: '../src/assets/designs/pants4/pants-back.png',
        prenda: 'pants'
    },
    {
        id: "9",
        nombre: "FAROVAO CEMB PANTS",
        precio: '70,00 USD',
        img: '../src/assets/designs/pants5/pants-front.png',
        img_back: '../src/assets/designs/pants5/pants-back.png',
        prenda: 'pants'
    },
    {
        id: "10",
        nombre: "LIGHT BEACHKEY SHORTS",
        precio: '50,00 USD',
        img: '../src/assets/designs/shorts1/shorts-front.png',
        img_back: '../src/assets/designs/shorts1/shorts-back.png',
        prenda: 'shorts'
    },
    {
        id: "11",
        nombre: "BLUE CMB SHORTS",
        precio: '53,00 USD',
        img: '../src/assets/designs/shorts2/shorts-front.png',
        img_back: '../src/assets/designs/shorts2/shorts-back.png',
        prenda: 'shorts'
    },
    {
        id: "12",
        nombre: "DARK GREEN CMB SHORTS",
        precio: '55,00 USD',
        img: '../src/assets/designs/shorts3/shorts-front.png',
        img_back: '../src/assets/designs/shorts3/shorts-back.png',
        prenda: 'shorts'
    },
    {
        id: "13",
        nombre: "CMD ORANGE CARACAS SHORTS",
        precio: '48,00 USD',
        img: '../src/assets/designs/shorts4/shorts-front.png',
        img_back: '../src/assets/designs/shorts4/shorts-back.png',
        prenda: 'shorts'
    },
    {
        id: "14",
        nombre: "SICK BLOWER HOODIE",
        precio: '85,00 USD',
        img: '../src/assets/designs/hoodie1/hoodie-front.png',
        img_back: '../src/assets/designs/hoodie1/hoodie-back.png',
        prenda: 'hoodie'
    },
    {
        id: "15",
        nombre: "NAVY CHART HOODIE",
        precio: '80,00 USD',
        img: '../src/assets/designs/hoodie2/hoodie-front.png',
        img_back: '../src/assets/designs/hoodie2/hoodie-back.png',
        prenda: 'hoodie'
    },
    {
        id: "16",
        nombre: "LOWKEY BLOWER HOODIE",
        precio: '90,00 USD',
        img: '../src/assets/designs/hoodie3/hoodie-front.png',
        img_back: '../src/assets/designs/hoodie3/hoodie-back.png',
        prenda: 'hoodie'
    },

]

export const getProducts = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (productos) resolve(productos) 
            else reject('No se encontraron datos')
        })
    } )
}

export const getAProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = productos.find((item) => item.id === id)
            resolve(producto) 
        })
    })
}

export const getProductsByCategory = (categoria) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const productosCategorizados = productos.filter(item => item.prenda === categoria)
            resolve(productosCategorizados)

        })
    })
}