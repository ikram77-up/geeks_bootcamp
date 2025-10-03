const { products } = require('./products');
function serchproduct(name) {
    for (i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            return products[i];
        }
    }
    return "product not found";
}
module.exports = { serchproduct };

console.log(serchproduct("p1"));
console.log(serchproduct("p2"));
console.log(serchproduct("p3"));
console.log(serchproduct("p4"));
console.log(serchproduct("p5"));
