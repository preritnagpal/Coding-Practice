interface shop{
    productid: number | string;
    productsize: "small" | "medium" | "large";
}
function getProductInfo(product: shop){
    console.log(`Product ID: ${product.productid}`);
    console.log(`Product Size: ${product.productsize}`);
}
getProductInfo({ productid: 101, productsize: "small"});
getProductInfo({ productid: "B102", productsize: "medium"});