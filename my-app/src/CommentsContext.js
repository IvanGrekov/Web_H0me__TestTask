import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const CommentsContext = React.createContext({
  updateData: () => {},
  pagesAmount: 1,
  currentCommentList: [],
  currentPage: 0,
  getData: () => {},
});
