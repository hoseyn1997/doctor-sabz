export async function fetchProducts() {
  const response = await fetch('https://knowledgland.ir/api/lessons');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
}