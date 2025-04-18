import React from 'react'

const ProductPagination = ({ currentPages, setCurrentPages, totalPages }) => {
  return (
    <>
              <div className="pagination">
  <button
    className="previousBtn"
    onClick={() => setCurrentPages(currentPages - 1)}
    disabled={currentPages === 1}
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => index + 1)
    .filter((page) => {
      // Show only 5 pages: current page in the center when possible
      if (totalPages <= 5) return true; // Show all if total pages <= 5
      if (currentPages <= 3) return page <= 5; // Show first 5 pages
      if (currentPages >= totalPages - 2) return page > totalPages - 5; // Show last 5 pages
      return Math.abs(page - currentPages) <= 2; // Show current page ± 2
    })
    .map((page) => (
      <button
        className={`paginationButton ${currentPages === page ? 'active' : 'inactive'}`}
        key={page}
        onClick={() => setCurrentPages(page)}
      >
        {page}
      </button>
    ))}

  <button
    className="nextBtn"
    onClick={() => setCurrentPages(currentPages + 1)}
    disabled={currentPages === totalPages}
  >
    Next
  </button>
</div>
    </>
  )
}

export default ProductPagination