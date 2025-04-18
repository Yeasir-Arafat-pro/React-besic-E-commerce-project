import React from 'react'

const SortProduct = ({setSortingProduct}) => {
    
  return (
    <>


<select name="sort" id="sort" className="sort" onChange={(e) => setSortingProduct(e.target.value)}>
  <option value="">Sort By</option>
  <option value="title-asc">Sort A to Z</option>
  <option value="title-desc">Sort Z to A</option>
  <option value="price-asc">Price Low to High</option>
  <option value="price-desc">Price High to Low</option>
  <option value="rating-asc">Rating Low to High</option>
  <option value="rating-desc">Rating High to Low</option>
</select>

    </>
  )
}

export default SortProduct