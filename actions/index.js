export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

export const change = (id = null) => ({
    type: 'change_library',
    payload: id
  });
