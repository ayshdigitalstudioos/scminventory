import React from 'react';
import { useLocation } from 'react-router-dom';

const PageHeader = () => {
  const location = useLocation();

  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
      <span>
        {location.pathname.split('/')[2]
          ? location.pathname.split('/')[2].toUpperCase()
          : location.pathname.split('/')[1].toUpperCase()}
      </span>
    </div>
  );
};

export default PageHeader;
