import React from "react";

function Pagination(props) {
  // console.log("props of filtered dishes received", props.filteredDishes)

  let numberOfPages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.filteredDishes.length / props.itemsPerPage);
    i++
  ) {
    // console.log(i)
    numberOfPages.push(i);
  }
  // console.log(numberOfPages)

  function showNextDishesHandler(event) {
    // console.log(event.target.id)
    let currentPage = event.target.id
    props.setCurrentPage(currentPage)
  }

  let pages = numberOfPages.map((pageNumber) => {
    return (
      <li id={pageNumber} onClick={showNextDishesHandler}>
        {pageNumber}
      </li>
    );
  });

  return (
    <section>
      <ul className="pagination">{pages}</ul>
    </section>
  );
}

export default Pagination;
