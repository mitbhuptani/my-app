import http from './httpService';


const apiURL = 'https://oo6picbp71.execute-api.ap-south-1.amazonaws.com/dev/product';


function productUrl(id) {
    return `${apiURL}/${id}`;
}

export function getProducts() {
    return http.get(apiURL);
}

export function getProduct(productId) {
    return http.get(productUrl(productId));
}

  
export function saveProduct(product){
    if(product.product_id){
    const body = { ...product };
    delete body.product_id;
    return http.put(productUrl(product.product_id), body);
    }

    return http.post(apiURL, product);
}



export function deleteProduct(productId){
    return http.delete(productUrl(productId));
}

  


