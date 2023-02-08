import React from 'react';
import Pagination from 'rc-pagination';
import Link from 'next/link';

const Paginate = ({ genreId, pageSize, total, searchId }) => {
  const itemRender = (current, type, element) => {
    if (type === 'page') {
      return genreId ? (
        <Link
          href={{
            pathname: '/genres/[id]',
            query: { id: genreId, page: current }
          }}>
          {current}
        </Link>
      ) : (
        <Link
          href={{
            pathname: '/search',
            query: { value: searchId, page: current }
          }}>
          {current}
        </Link>
      );
    }
    return element;
  };

  return <Pagination pageSize={pageSize} total={total} itemRender={itemRender} />;
};

export default Paginate;
