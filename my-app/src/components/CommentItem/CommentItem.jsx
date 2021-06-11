import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import './CommentItem.scss';

// eslint-disable-next-line import/prefer-default-export
export const CommentItem = React.memo(
  ({ item }) => {
    const [textExpanding, setTextExpanding] = useState(false);
    const { name, text } = item;
    const maxVisibleTextLength = 75;

    // eslint-disable-next-line no-unneeded-ternary
    let overflow = text.length > maxVisibleTextLength ? true : false;

    if (text.length > 70) {
      overflow = true;
    }

    return (
      <li className="comment comment-list__item">
        <h3 className="comment__name">
          {name}
        </h3>

        <p
          className={classNames(
            'comment__text',
            { 'comment__text--expand': textExpanding },
          )}
        >
          {text}
        </p>

        <button
          className={classNames(
            'comment__show',
            { 'comment__show--disabled': !overflow },
          )}
          onClick={() => setTextExpanding(!textExpanding)}
          type="button"
        >
          {textExpanding ? 'Hide full comment' : 'Show full comment'}
        </button>
      </li>
    );
  },
);

CommentItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
