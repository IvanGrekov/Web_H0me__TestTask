const apiAddress = 'https://jordan.ashton.fashion/api/goods/30/comments';

// eslint-disable-next-line import/prefer-default-export
export const sendQuerry = (options = {}, searchParameter) => (
  fetch(
    `${apiAddress}?page=${searchParameter}`,
    options,
  )
    .then((response) => response.json())
);

// eslint-disable-next-line import/prefer-default-export
export const post = (comment) => {
  const queryOptions = {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  return sendQuerry(queryOptions)
    .then((result) => result);
};
