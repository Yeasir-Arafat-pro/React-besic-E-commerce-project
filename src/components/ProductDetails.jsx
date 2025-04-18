import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/product/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        setProducts(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); // Add `id` as a dependency since it is used in the fetch URL

  return (
    <div className="productDetail">
      <h1>Product Detail Page</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <section>
        {product && (
          <article className="detail" key={product.id}>
            <div className="leftSide image">
              <img
                className="pd"
                src={product.images && product.images[0]} // Safely access the first image
                alt={product.title}
              />
            </div>
            <div className="rightSide details">
              <h3 className="pd">{product.title}</h3>
              <p className="pd">
                <strong>Category: </strong> {product.category}
              </p>
              <p className="pd">
                <strong>Brand: </strong> {product.brand}
              </p>
              <p className="pd">
                <strong>Rating: </strong> {product.rating}
              </p>
              <p className="pd">
                <strong>Price: </strong>$ {product.price}
              </p>
              <p className="pd">
                <strong>Stock: </strong> {product.stock}
              </p>
              <br />
              <Link to="/">Go to Home page </Link>
              <button className="addToCartButton"> Add to Cart</button>
            </div>

            <div className="productDescription pd">
              <p>{product.description}</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, minus quaerat! Ullam consectetur dolorum quia esse,
                quam odit vero perspiciatis fugit facilis totam omnis
                exercitationem sint libero rerum similique eveniet velit dolore
                nihil corrupti nulla dolores illo facere inventore animi.
                Consectetur corporis assumenda illum non animi dignissimos
                exercitationem enim vero!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, minus quaerat! Ullam consectetur dolorum quia esse,
                quam odit vero perspiciatis fugit facilis totam omnis
                exercitationem sint libero rerum similique eveniet velit dolore
                nihil corrupti nulla dolores illo facere inventore animi.
                Consectetur corporis assumenda illum non animi dignissimos
                exercitationem enim vero!
              </p>
            </div>
          </article>
        )}
      </section>
    </div>
  );
};

export default ProductDetails;