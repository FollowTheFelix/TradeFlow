import sendRequest from "./send-request";

const BASE_URL = "/api/items";

export async function index() {
  return sendRequest(BASE_URL);
}

export async function display() {
  return sendRequest(`${BASE_URL}/items`);
}

export async function createItem(item) {
  return sendRequest(`${BASE_URL}/new`, "POST", item);
}

export async function deleteItem(productId) {
  return sendRequest(`${BASE_URL}/${productId}`, "DELETE");
}

export async function updateItem(item) {
  console.log(item, "api");
  return sendRequest(`${BASE_URL}/${item.id}`, "PUT", item);
}

export async function createReview(review, itemId) {
  return sendRequest(`${BASE_URL}/createReview/${itemId}`, "POST", review);
}

export async function getReviews() {
  return sendRequest(BASE_URL);
}
