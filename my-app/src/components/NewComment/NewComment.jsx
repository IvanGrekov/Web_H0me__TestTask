import React from 'react';
import { Form } from '../Form/index';
import './NewComment.scss';

// eslint-disable-next-line import/prefer-default-export
export const NewComment = React.memo(
  () => (
    <section className="new-comment app__content">
      <div className="new-comment__wrapper">
        <h2 className="new-comment__title">
          Add a new comment
        </h2>

        <Form />
      </div>
    </section>
  ),
);
