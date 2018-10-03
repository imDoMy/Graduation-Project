export default (state = null, action) => {
switch (action.type) {
  case 'change_library':
    return action.payload;
  default:
    return state;
}
};
