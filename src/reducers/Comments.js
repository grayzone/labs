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

export default function Comments(state, action) {
  if (!state) {
    state = {
      comments: []
    };
  }
  switch (action.type) {
    case INIT_COMMENTS:
      return {
        comments: action.comments
      };
    case ADD_COMMENTS:
      return {
        comments: [...state.comments, action.comments]
      };
    case DELETE_COMMENTS:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      };
    default:
      return state;
  }
}
