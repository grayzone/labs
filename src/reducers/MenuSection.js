export const REDIRECT_MENU = "REDIRECT_MENU";

export const redirect = url => {
  return {
    type: REDIRECT_MENU,
    url
  };
};

export default function menu(state, action) {
  if (!state) {
    state = {
      url: "#"
    };
  }
  switch (action.type) {
    case REDIRECT_MENU:
      return {
        url: action.url
      };
    default:
      return state;
  }
}
