const PageIndicatorList = ({ currentPage, numberOfPages }) => {
    return (
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {Array.from({ length: numberOfPages }, (_, i) => {
          const pageNumber = i + 1;
          return (
            <li
              key={pageNumber}
              style={{
                margin: '10px',
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: pageNumber === currentPage ? '#007bff' : '#e9ecef',
                color: pageNumber === currentPage ? 'white' : 'black',
                borderRadius: '5px',
              }}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    );
  };

  export default PageIndicatorList;