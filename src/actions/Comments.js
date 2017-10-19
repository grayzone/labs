export const INIT_COMMENTS = "INIT_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMNETS";
export const DELETE_COMMENTS = "DELETE_COMMENTS";

export const initComments = comments => {
  return {
    type: INIT_COMMENTS,
    comments
  };
};

export const addComments = comment => {
  return {
    type: ADD_COMMENTS,
    comment
  };
};

export const deleteComments = commentIndex => {
  return {
    type: DELETE_COMMENTS,
    commentIndex
  };
};
