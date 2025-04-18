import React from 'react'

const SearchProduct = ({ searchProduct, setSearchProduct, setCurrentPages }) => {
  return (
    <>

             <input type="text" className="search" value={searchProduct} placeholder="Search Product..." onChange={(e) => { setSearchProduct(e.target.value); setCurrentPages(1); }} />

    </>
  )
}

export default SearchProduct