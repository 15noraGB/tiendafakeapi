import { Product } from '../interfaces/Product';

export async function getProductById(id: string): Promise<Product | null> {
  try {
    // 1. Usamos la variable de entorno que apunta a Render
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    
    console.log(`Fetching product from MY API with ID: ${id}`);
    
    // 2. Cambiamos la URL de fakestoreapi por la nuestra
    const res = await fetch(`${baseUrl}/api/products/${id}`, { cache: 'no-store' });

    if (!res.ok) {
      console.error(`Error fetching product ${id}: Status ${res.status}`);
      return null;
    }

    const product = await res.json();

    if (!product || !product.id) {
        console.warn(`API returned invalid data for product ID: ${id}`);
        return null;
    }

    return product;

  } catch (error) {
    console.error(`Failed to fetch or parse product ${id}:`, error);
    return null;
  }
}