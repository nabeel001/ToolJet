import React from 'react';

const BookSearch = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5 2.78906H7.5C5.84315 2.78906 4.5 4.13221 4.5 5.78906V16.4349C5.29613 15.7223 6.34747 15.2891 7.5 15.2891H20.5V5.78906C20.5 4.13221 19.1569 2.78906 17.5 2.78906ZM10.25 8.78906C10.25 7.54642 11.2574 6.53906 12.5 6.53906C13.7426 6.53906 14.75 7.54642 14.75 8.78906C14.75 10.0317 13.7426 11.0391 12.5 11.0391C11.2574 11.0391 10.25 10.0317 10.25 8.78906ZM12.5 5.03906C10.4289 5.03906 8.75 6.71799 8.75 8.78906C8.75 10.8601 10.4289 12.5391 12.5 12.5391C13.2643 12.5391 13.9752 12.3104 14.568 11.9178L15.4697 12.8194C15.7626 13.1123 16.2374 13.1123 16.5303 12.8194C16.8232 12.5265 16.8232 12.0516 16.5303 11.7587L15.6287 10.8571C16.0213 10.2643 16.25 9.55337 16.25 8.78906C16.25 6.71799 14.5711 5.03906 12.5 5.03906ZM7.5 16.7891C5.84315 16.7891 4.5 18.1322 4.5 19.7891C4.5 21.4459 5.84315 22.7891 7.5 22.7891H17.5C19.1569 22.7891 20.5 21.4459 20.5 19.7891V16.7891H7.5Z"
      fill={fill}
    />
  </svg>
);

export default BookSearch;