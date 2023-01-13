const products = {
    "chaussures de sport": 60.99,
    "pantalon": 29.99,
    "chemise": 15.99
};

function getProductPrice(productName) {
    return products[productName];
}


function getProductInfo(productsList) {

    const filteredArray = filterByPrice(productsList, 50);
    console.log(filteredArray)
    if (!productsList) {
        return false;
    }
    
    const result = [];

    filteredArray.forEach((product) => {
        let productPrice = getProductPrice(product);

        if (productPrice > 50) {
            productPrice = applyDiscount(productPrice, 10);
        }

        if (product === "pantalon") {
            result.push(`Le ${product} coûte ${productPrice}€`);
        } else if (product === "chemise") {
            result.push(`La ${product} coûte ${productPrice}€`);
        } else if (product === "chaussures de sport") {
            result.push(`Les ${product} coûtent ${productPrice}€`);
        } else {
            result.push(`${product} coûte ${productPrice}€`);
        }
    });

    return result.join(', ');
}

console.log(getProductInfo(products));

function getTotalPrice(productsList) {
    let result = 0;
    Object.keys(productsList).forEach((product) => {
        result += getProductPrice(product);
    })

    if (result > 50) {
        result = applyDiscount(result, 10);
    }

    return result;
}


function applyDiscount(price, discount) {
    return Number((price - (price * (discount / 100))).toFixed(2))
}


function filterByPrice(productsList, maxPrice) {
    const result = [];

    Object.entries(productsList).forEach((product) => {
        const key = product[0];

        const productPrice = getProductPrice(key);

        if (productPrice <= maxPrice) {
            result.push(key);
        }
    })

    return result;
}


function addProduct(product, price) {
    if (!product || !price) {
        return false;
    }

    products[product] = price;
    return products;
}

console.log(addProduct("Jean", 99.99))
console.log(addProduct("Sweat", 50.99))

function removeProduct(product) {
    if (!product) {
        return false;
    }

    delete products[product];
    return products;
}

console.log(removeProduct("Jean"))
console.log(removeProduct("pantalon"))