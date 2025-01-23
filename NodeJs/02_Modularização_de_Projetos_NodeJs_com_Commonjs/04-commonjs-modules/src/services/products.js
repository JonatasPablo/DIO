// todas as funções que lidam com produtos
const productType = {
    version: 'Físico',
    tax: 'x1',
};

async function getFullName(codeId, productName) {
    console.log('Product: '+ codeId + " / " + productName);
    doBreakLine();
};

// hidden function (não exportada)
async function doBreakLine() {
    console.log('------------------');  
};

async function getProductLabel(productName) {
    console.log('Product: '+ productName);
};

// Exporta as funções
module.exports = {
    getFullName,
    getProductLabel,
    productType,
};