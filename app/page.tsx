import ProductCard from './components/ProductCard'
import Header from './components/Header'
import { Product } from './interfaces/Product'

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const allProducts: Product[] = await getProducts()

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Header title="TiendaFake" />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}
