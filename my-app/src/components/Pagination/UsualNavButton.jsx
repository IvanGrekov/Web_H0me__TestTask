import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

// eslint-disable-next-line import/prefer-default-export
export const UsualNavButton = React.memo(
  ({ number, currentPage, getData }) => (
    <li className="pagination__item">
      <button
        className={classNames(
          'pagination__link',
          { 'pagination__link--selected': currentPage === number },
        )}
        type="button"
        onClick={() => {
          if (number !== currentPage) {
            getData(number);
          }
        }}
      >
        {number}
      </button>
    </li>
  ),
);

UsualNavButton.propTypes = {
  number: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  getData: PropTypes.func.isRequired,
};
