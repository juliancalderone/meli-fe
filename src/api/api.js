const SERVER_URL = 'http://localhost:8080/';

export const getProducts = async (query) => {
  try {
    const data = await fetch(`${SERVER_URL}api/items?q=${query}`)
    
    return await data.json();
  } catch(e) {
    console.error(e);
  }
}

export const getProductDetail = async (id) => {
  try {
    const data = await fetch(`${SERVER_URL}api/items/${id}`)
    return await data.json();
  } catch(e) {
    console.error(e);
  }
}