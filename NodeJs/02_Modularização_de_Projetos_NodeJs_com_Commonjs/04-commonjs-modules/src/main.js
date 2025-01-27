// exporta uma função main que chama a função getFullName do módulo products.js
const { getFullName, productType } = require('./services/products');
const config = require('./services/config');
const dataBase = require('./services/database');

async function main() {
    console.log('Carrinho de Compras:');

    getFullName(1, 'Coca-Cola');
    getFullName(2345, 'Mouse');
    // getProductLabel('Coca-Cola');

    console.log('Tipo: ' + productType.version);
    console.log('Version: ' + config.devArea.version);

    dataBase.connectToDatabase('MySQL');
    dataBase.disconnectFromDatabase('MySQL');
}
main();