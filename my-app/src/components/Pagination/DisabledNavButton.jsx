import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const DisabledNavButton = React.memo(
  () => (
    <li className="pagination__item">
      <button
        className="pagination__link"
        type="button"
        disabled
      >
        ...
      </button>
    </li>
  ),
);
