export const createNote = note => {
  return Promise.resolve({
    _id: '1234',
    ...note
  });
};

