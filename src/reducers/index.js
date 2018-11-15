const initialState = {
  githubEvents: [],
  isLoading: false,
  isError: false
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return Object.assign({}, state, { isLoading: true });
    case 'FETCH_EVENTS_SUCCESS':
      return Object.assign({}, state, {
        isLoading: false,
        githubEvents: action.events
      });
    case 'FETCH_FAILED':
      return Object.assign({}, state, { isLoading: false, isError: true });
    default:
      return state;
  }
};

export default eventsReducer;
