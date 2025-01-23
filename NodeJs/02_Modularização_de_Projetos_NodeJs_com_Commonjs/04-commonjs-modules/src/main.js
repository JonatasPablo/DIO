// exporta uma função main que chama a função getFullName do módulo products.js
const product = require('./services/products');
const config = require('./services/config');
const dataBase = require('./services/database');

async function main() {
    console.log('Carrinho de Compras:');
    product.getFullName(1, 'Coca-Cola');
    product.getFullName(2345, 'Mouse');
    product.getProductLabel('Coca-Cola');
    console.log('Tipo: ' + product.productType.version);
    console.log('Version: ' + config.devArea.version);
    dataBase.connectToDatabase('MySQL');
    dataBase.disconnectFromDatabase('MySQL');
}
main();