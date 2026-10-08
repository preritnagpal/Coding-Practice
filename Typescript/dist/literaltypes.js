"use strict";
function getProductInfo(product) {
    console.log(`Product ID: ${product.productid}`);
    console.log(`Product Size: ${product.productsize}`);
}
getProductInfo({ productid: 101, productsize: "small" });
getProductInfo({ productid: "B102", productsize: "medium" });
