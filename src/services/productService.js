import http from './httpService';


const apiURL = 'https://oo6picbp71.execute-api.ap-south-1.amazonaws.com/dev/product';

export function getProducts() {
    return http.get(apiURL);
}
