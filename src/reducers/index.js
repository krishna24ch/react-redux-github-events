import * as ActionTypes from '../actions/actionTypes'

const initialState = {
  githubEvents: [],
  isLoading: false,
  errorMessage: '',
  page: 0,
  userName: ''
};

const resetPageCount = (stateUserName, userName) => {
  return userName && userName !== stateUserName;
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS:
      return Object.assign({}, state, {
        isLoading: true,
        githubEvents: [],
        errorMessage: '',
        page: resetPageCount(state.userName, action.userName) ? 0 : state.page,
        userName: action.userName || state.userName
      });
    case ActionTypes.FETCH_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        githubEvents: action.events
      });
    case ActionTypes.FETCH_FAILED:
      return Object.assign({}, state, { isLoading: false, errorMessage: action.errorMessage });
    case ActionTypes.NEXT_PAGE:
      return Object.assign({}, state, {page: state.page + 1});
    case ActionTypes.PREVIOUS_PAGE:
      return Object.assign({}, state, {page: state.page - 1});
    default:
      return state;
  }
};

export default eventsReducer;
