import sendRequest from "./send-request";

const BASE_URL = "/api/items";

export async function index(){
    return sendRequest(BASE_URL);
}

export async function createItem(item){
    return sendRequest(`${BASE_URL}/new`, 'POST', item)
}