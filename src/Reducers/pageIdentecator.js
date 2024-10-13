const PageIndicatorList = ({ currentPage, numberOfPages }) => {
    return (
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {Array.from({ length: numberOfPages }, (_, i) => {
          const pageNumber = i + 1;
          return (
            <li
              key={pageNumber}
              className={`mx-auto mb-3 p-3 
                ${pageNumber === currentPage ? 'text-white' : 'text-black'}
                ${pageNumber === currentPage ? 'bg-lime-500' : 'bg-[#e9ecef]'}
                 rounded`}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    );
  };

  export default PageIndicatorList;