// state is not application state
// only is the state which this reducer is responsible for
// so this reducer is only for the active book
// which is the selected book
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
