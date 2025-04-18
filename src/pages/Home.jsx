import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SortProduct from '../components/SortProduct'
import SearchProduct from '../components/SearchProduct'
import ProductPagination from '../components/ProductPagination'

const Home = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  //pagination
  const limits = 12
  const [totalPages, setTotalPages] = useState(0)
  const [currentPages, setCurrentPages] = useState(1)

  //search
  const  [searchProduct, setSearchProduct] = useState('')
 
  //sort
  const  [sortingProduct, setSortingProduct] = useState('')
  
  


  const fetchData = async (currentPages, searchProduct, sortingProduct) => {
    
    
    try {
      setIsLoading(true)

      let url =  `https://dummyjson.com/products?limit=${limits}&skip=${(currentPages - 1) * limits}`

      if (searchProduct !== '') {
         url = `https://dummyjson.com/products/search?q=${searchProduct}&limit=${limits}&skip=${(currentPages - 1) * limits}`
      }


      const sort = sortingProduct.split('-')
      console.log(sort);
      

      if (sortingProduct !== '') {
        url += `&sortBy=${sort[0]}&order=${sort[1]}`
     }
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data.total);
      
      setProducts(data.products) 
      setTotalPages(Math.ceil(data.total / limits))
      setError(null)

    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect( () => {

    fetchData(currentPages, searchProduct, sortingProduct)
    
  }, [currentPages,searchProduct, sortingProduct])
  

  return (
    <div className="productsPage">
      <h1>List of all products</h1>
      <div className="SearchAndShorting">
    <SearchProduct searchProduct={searchProduct} setSearchProduct={setSearchProduct} setCurrentPages={setCurrentPages} />

      <SortProduct setSortingProduct={setSortingProduct}/>
      </div>
     
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <section className="products">
        {products && products.map(product => (
          <article className="product" key={product.id}>
            <img className="productsImage" src={product.images} alt={product.title} />
            <h3>{product.title}</h3>
            <h3>{product.total}</h3>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>Price: </strong>{product.price}</p>
            <p>{product.description.substring(0,50)}...</p>
            <Link to={`/products/${product.id}`}>Show Details</Link>
            <button className="addToCartButton">Add to Cart</button>
          </article>
        ))}
      </section>

        <ProductPagination currentPages={currentPages} setCurrentPages={setCurrentPages} totalPages={totalPages} />

    </div>
  )
}

export default Home