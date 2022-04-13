const products = [
    { 
        id: 1, 
        name: 'Lenovo i3', 
        price: 80000, 
        category: 'Notebook', 
        img:'https://images.fravega.com/f500/2cca0c581600f32e27c94ad996696693.jpg', 
        stock: 20, 
        description:'Procesador Intel'
    },
    {   id: 2,
        name: 'HP Ryzen',
        price: 110000,
        category: 'Notebook',
        img:'https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/2/22B04LA-1_T1621634041.png',
        stock: 16,
        description:'Procesador AMD'
    },
    {   id: 3,
        name: 'Samsung S22',
        price: 100,
        category: 'Celular',
        img:'https://www.cetrogar.com.ar/media/catalog/product/t/e/te2755-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds',
        stock: 1100,
        description:'Ultima generacion'
    }
]

const categories = [
    {id: 'Celular', description: 'Celular'},
    {id: 'Tablet', description: 'Tablet'},
    {id: 'Notebook', description: 'Notebook'}
]

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 500)
    })
}

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}