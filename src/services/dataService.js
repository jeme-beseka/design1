// Centralized data service for accessing JSON data
export const fetchProducts = async () => {
  try {
    const response = await import('../data/productsData.json');
    return response.default;
  } catch (error) {
    console.error('Error loading products data:', error);
    return [];
  }
};

export const fetchShops = async () => {
  try {
    const response = await import('../data/shopsData.json');
    return response.default;
  } catch (error) {
    console.error('Error loading shops data:', error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  const products = await fetchProducts();
  return products.find(product => product.id === id);
};

export const fetchShopById = async (id) => {
  const shops = await fetchShops();
  return shops.find(shop => shop.id === id);
};

export const fetchDiscountedProducts = async () => {
  const products = await fetchProducts();
  return products.filter(product => product.discounted);
};

export const fetchSimilarProducts = async (currentProduct) => {
  const products = await fetchProducts();
  return products.filter(product => 
    product.id !== currentProduct.id && 
    (product.category === currentProduct.category || 
     product.shopId === currentProduct.shopId)
  );
};
